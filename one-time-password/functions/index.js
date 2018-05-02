const admin = require("firebase-admin");
const functions = require("firebase-functions");

const createUser = require("./create_user");
const serviceAccount = require("./service_account.json");
requestOneTimePassword = "./request_one_time_password";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-react.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);

exports.requestOneTimePassword = functions.https.onRequest(
  requestOneTimePassword
);
