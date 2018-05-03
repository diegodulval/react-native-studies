const admin = require("firebase-admin");
const twilio = require("./twilio");

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({
      error: "You must provide a phone number"
    });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  //Find the user model
  admin
    .auth()
    .getUser(phone)
    .then(user => {
      //Generate code
      const code = Math.floor(Math.random() * 8999 + 1000);

      //send message
      twilio.messages.create(
        {
          body: "Your code is " + code,
          to: "+" + phone,
          from: "+12195129977"
        },
        err => {
          if (err) {
            return res.status(422).send(err);
          }

          //save code to user
          admin
            .database()
            .ref("users/" + phone)
            .update({ code: code, codeValid: true }, () => {
              res.send({ success: true });
            });
        }
      );

      //return null;
    })
    .catch(err => res.status(422).send(err));

  // Respond to the user request, saying the account was made
};
