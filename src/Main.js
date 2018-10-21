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
import Snackbar from "react-native-snackbar";
import ScoreTable from "./components/scoretable";
import ModalView from "./components/modal";
import AppBar from "./components/AppNavbar";
import TotalTable from "./components/totalTable";
import CardView from "react-native-cardview";
import { Col, Row, Grid } from "react-native-easy-grid";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Main extends Component {
  state = {
    isVisible: false,
    firstName: "ASHISH",
    secondName: "DEVKANT",
    thirdName: "ARVIND",
    firstSubject: "MATHS",
    secondSubject: "SCIENCE",
    thirdSubject: "ENGLISH",
    firstmathsmarks: 0,
    firstsciencemarks: 0,
    firstenglishmarks: 0,
    secondmathmarks: 0,
    secondsciencemarks: 0,
    secondenglishmarks: 0,
    thirdmathsmarks: 0,
    thirdsciencemarks: 0,
    thirdenglishmarks: 0,
    modalName: "",
    modalSubject: "",
    modalMarks: null
  };
  onpressAdd = () => {
    this.setState({ isVisible: true });
  };
  closeModal = () => {
    this.setState({ isVisible: false });
  };
  update = () => {
    if (this.state.modalName === this.state.firstName) {
      this.updateFirst();
    } else if (this.state.modalName === this.state.secondName) {
      this.updateSecond();
    } else if (this.state.modalName === this.state.thirdName) {
      this.updateThird();
    } else if (modalName === "" || modalSubject === "" || modalMarks === "") {
      alert("Please fill the above informations");
    } else {
      alert("The user is not available");
    }
  };
  updateFirst = () => {
    if (this.state.modalSubject === this.state.firstSubject) {
      this.setState({
        firstmathsmarks: this.state.modalMarks,
        isVisible: false
      });
      firstmathsmarks = this.state.modalMarks;
    } else if (this.state.modalSubject === this.state.secondSubject) {
      this.setState({
        firstsciencemarks: this.state.modalMarks,
        isVisible: false
      });
      firstsciencemarks = this.state.modalMarks;
    } else if (this.state.modalSubject === this.state.thirdSubject) {
      this.setState({
        firstenglishmarks: this.state.modalMarks,
        isVisible: false
      });
    }
  };
  updateSecond = () => {
    if (this.state.modalSubject === this.state.firstSubject) {
      this.setState({
        secondmathmarks: this.state.modalMarks,
        isVisible: false
      });
    } else if (this.state.modalSubject === this.state.secondSubject) {
      this.setState({
        secondsciencemarks: this.state.modalMarks,
        isVisible: false
      });
    } else if (this.state.modalSubject === this.state.thirdSubject) {
      this.setState({
        secondenglishmarks: this.state.modalMarks,
        isVisible: false
      });
    }
  };
  updateThird = () => {
    if (this.state.modalSubject === this.state.firstSubject) {
      this.setState({
        thirdmathsmarks: this.state.modalMarks,
        isVisible: false
      });
    } else if (this.state.modalSubject === this.state.secondSubject) {
      this.setState({
        thirdsciencemarks: this.state.modalMarks,
        isVisible: false
      });
    } else if (this.state.modalSubject === this.state.thirdSubject) {
      this.setState({
        thirdenglishmarks: this.state.modalMarks,
        isVisible: false
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <AppBar title="Marks Board" subtitle="Update Marks" />
        <View style={styles.scorebanner}>
          <Text style={styles.bannerText}>CLICK ON ADD TO UPDATE MARKS</Text>
          <TouchableOpacity
            style={styles.bannerTouch}
            onPress={this.onpressAdd}
          >
            <Text style={styles.add}>ADD</Text>
          </TouchableOpacity>
        </View>
        <ScoreTable
          firstName={this.state.firstName}
          secondName={this.state.secondName}
          thirdName={this.state.thirdName}
          firstSubject={this.state.firstSubject}
          secondSubject={this.state.secondSubject}
          thirdSubject={this.state.thirdSubject}
          firstmathsmarks={this.state.firstmathsmarks}
          firstsciencemarks={this.state.firstsciencemarks}
          firstenglishmarks={this.state.firstenglishmarks}
          secondmathmarks={this.state.secondmathmarks}
          secondsciencemarks={this.state.secondsciencemarks}
          secondenglishmarks={this.state.secondenglishmarks}
          thirdmathsmarks={this.state.thirdmathsmarks}
          thirdsciencemarks={this.state.thirdsciencemarks}
          thirdenglishmarks={this.state.thirdenglishmarks}
        />
        <ModalView
          isVisible={this.state.isVisible}
          onModalNameChange={text => {
            this.setState({ modalName: text });
          }}
          onModalSubjectChange={text => {
            this.setState({ modalSubject: text });
          }}
          onModalMarksChange={text => {
            this.setState({ modalMarks: Number(text) });
          }}
          update={this.update.bind(this)}
          closeModal={this.closeModal.bind(this)}
        />
        <View style={styles.scorebanner}>
          <Text style={styles.bannerText}>TOTAL MARKS</Text>
        </View>
        <TotalTable
          firstName={this.state.firstName}
          secondName={this.state.secondName}
          thirdName={this.state.thirdName}
          firstTotalMarks={
            this.state.firstmathsmarks +
            this.state.firstsciencemarks +
            this.state.firstenglishmarks
          }
          secondTotalMarks={
            this.state.secondmathmarks +
            this.state.secondsciencemarks +
            this.state.secondenglishmarks
          }
          thirdTotalMarks={
            this.state.thirdmathsmarks +
            this.state.thirdsciencemarks +
            this.state.thirdenglishmarks
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    left: 100,
    width: 50,
    height: 40,
    justifyContent: "center"
  },
  bannerText: {
    fontSize: 17,
    color: "#FEF6FF",
    fontWeight: "bold"
  },
  add: {
    fontSize: 16,
    color: "#0FB737"
  },
  cardViewStyle: {
    width: width - 20,
    marginLeft: 10,
    height: height - 450,
    marginTop: 20
  },
  cardViewTotalStyle: {
    width: width - 20,
    marginLeft: 10,
    height: height - 600,
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
