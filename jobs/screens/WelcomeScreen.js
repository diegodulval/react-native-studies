import React, { Component } from "react";
import { View, Text } from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { id: 1, color: "#03A9F4", text: "Welcome to JobApp" },
  { id: 2, color: "#009688", text: "Set yout location, then swipe away" },
  { id: 3, color: "#03A9F4", text: "Job Finder will help you get a job!" }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
