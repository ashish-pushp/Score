import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import Main from "./src/Main";
import SplashScreen from "react-native-splash-screen";
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <Main />;
  }
}
