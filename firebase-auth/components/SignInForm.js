import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL = "https://us-central1-one-time-react.cloudfunctions.net/";

class SignInForm extends Component {
  state = { phone: "", code: "" };

  handleSubmit = async () => {
    const user = { phone: this.state.phone, code: this.state.code };
    try {
      let { data } = await axios.post(
        `${ROOT_URL}/verifyOneTimePassword`,
        user
      );

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log("Deu erro!");
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
