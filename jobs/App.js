import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import store from "./store";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreen from "./screens/ReviewScreen";

class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: createBottomTabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
            review: {
              screen: createStackNavigator({
                review: { screen: ReviewScreen },
                settings: { screen: SettingsScreen }
              })
            }
          })
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        lazy: true
      }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
