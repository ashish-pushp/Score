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
import Modal from "react-native-modal";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class ModalView extends Component {
  state = {};
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <Text
              style={{
                left: 10,
                fontSize: 20,
                color: "#153BA5",
                fontWeight: "bold"
              }}
            >
              UPDATE MARKS
            </Text>
          </View>
          <View style={{ top: 20 }}>
            <Fumi
              label={"NAME"}
              iconClass={FontAwesomeIcon}
              iconName={"users"}
              iconColor={"#f95a25"}
              iconSize={20}
              autoCapitalize="characters"
              onChangeText={this.props.onModalNameChange}
              style={styles.textBox}
            />
            <Fumi
              label={"SUBJECT"}
              iconClass={FontAwesomeIcon}
              iconName={"book"}
              iconColor={"#f95a25"}
              iconSize={20}
              autoCapitalize="characters"
              onChangeText={this.props.onModalSubjectChange}
              style={styles.textBox}
            />
            <Fumi
              label={"MARKS"}
              iconClass={FontAwesomeIcon}
              iconName={"pencil"}
              iconColor={"#f95a25"}
              iconSize={20}
              onChangeText={this.props.onModalMarksChange}
              style={styles.textBox}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={styles.cancelView}
              onPress={this.props.closeModal}
            >
              <Image
                source={require("../../assets/images/cross.png")}
                style={styles.image}
              />
              <View style={{ left: 30 }}>
                <Text style={{ fontSize: 16, color: "white" }}>CANCEL</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.updateView}
              onPress={this.props.update}
            >
              <Image
                source={require("../../assets/images/tick.png")}
                style={styles.image}
              />
              <View style={{ left: 30 }}>
                <Text style={{ fontSize: 16, color: "white" }}>UPDATE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

ModalView.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onModalNameChange: PropTypes.func.isRequired,
  onModalSubjectChange: PropTypes.func.isRequired,
  onModalMarksChange: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#FDFFFF",
    width: 380,
    height: 400
  },
  titleView: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#738383"
  },
  textBox: {
    height: 60,
    width: width - 80,
    left: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#738383",
    marginBottom: 10,
    backgroundColor: "#FFFFFF"
  },
  bottomView: {
    borderTopWidth: 1,
    borderTopColor: "#738383",
    height: 70,
    top: 60,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  cancelView: {
    backgroundColor: "red",
    width: 110,
    height: 40,
    borderRadius: 2,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  updateView: {
    backgroundColor: "#153BA5",
    width: 110,
    height: 40,
    borderRadius: 2,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 10,
    height: 10,
    left: 10,
    tintColor: "white"
  }
});
