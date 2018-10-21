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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  scorebanner: {
    marginTop: 20,
    backgroundColor: "#1D1E1E",
    borderRadius: 5,
    height: 50,
    width: width - 20,
    flexDirection: "row",
    alignItems: "center",
    left: 10
  },
  bannerTouch: {
    left: 170
  },
  bannerText: {
    fontSize: 17,
    color: "#FEF6FF",
    fontWeight: "bold",
    left: 10
  },
  add: {
    color: "#FEF6FF",
    fontSize: 16,
    color: "#0FB737"
  },
  cardViewStyle: {
    width: width - 20,
    marginLeft: 10,
    height: height - 550,
    marginTop: 20
  },
  grid: {
    borderWidth: 0.5,
    borderColor: "#B6AFAF"
  },
  heading: {
    borderWidth: 0.5,
    borderBottomColor: "#B6AFAF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6FE5E5"
  },
  content: {
    borderWidth: 0.5,
    borderBottomColor: "#B6AFAF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  headingContent: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#738383"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  table: {
    backgroundColor: "red"
  }
});
