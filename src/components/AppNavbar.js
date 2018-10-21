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
import PropTypes from "prop-types";

export default class AppBar extends Component {
  state = {};
  render() {
    return (
      <View style={styles.mainDiv}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/back.png")}
            style={styles.backImage}
          />
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{this.props.title}</Text>
          <Text style={styles.subtitleText}>{this.props.subtitle}</Text>
        </View>
        <TouchableOpacity style={styles.crossView}>
          <Image
            source={require("../../assets/images/cross.png")}
            style={styles.crossImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: "#6C6C7C",
    height: 60,
    alignItems: "center",
    flexDirection: "row"
  },
  backImage: {
    width: 30,
    height: 30
  },
  titleText: {
    fontSize: 18,
    color: "#FFFFFF"
  },
  subtitleText: {
    fontSize: 14,
    color: "#FFFFFF"
  },
  crossView: {
    left: 270
  },
  crossImage: {
    width: 17,
    height: 17,
    tintColor: "#FFFFFF"
  },
  titleView: {
    left: 50
  }
});
