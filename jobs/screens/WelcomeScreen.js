import React, { Component } from "react";
import { View, Text } from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp" },
  { text: "Set yout location, then swipe away" },
  { text: "Job Finder will help you get a job!" }
];

class WelcomeScreen extends Component {
  render() {
    return <Slides data={SLIDE_DATA} />;
  }
}

export default WelcomeScreen;
