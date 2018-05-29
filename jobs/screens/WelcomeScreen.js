import React, { Component } from "react";
import { AppLoading } from "expo";
import { View, Text, AsyncStorage } from "react-native";
import _ from "lodash";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { id: 1, color: "#03A9F4", text: "Welcome to JobApp" },
  { id: 2, color: "#009688", text: "Set yout location, then swipe away" },
  { id: 3, color: "#03A9F4", text: "Job Finder will help you get a job!" }
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem("fb_token");
    if (token) {
      this.props.navigation.navigate("map");
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
