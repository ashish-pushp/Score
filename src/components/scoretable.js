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
import CardView from "react-native-cardview";
import { Col, Row, Grid } from "react-native-easy-grid";
import PropTypes from "prop-types";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class ScoreTable extends Component {
  state = {};
  render() {
    return (
      <CardView
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}
        style={styles.cardViewStyle}
      >
        <Grid style={styles.grid}>
          <Col>
            <Row size={0.5} style={styles.heading}>
              <Text style={styles.headingContent}>Name</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.firstName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.firstName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.firstName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.secondName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.secondName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.secondName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.thirdName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.thirdName}</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>{this.props.thirdName}</Text>
            </Row>
          </Col>
          <Col>
            <Row size={0.5} style={styles.heading}>
              <Text style={styles.headingContent}>Subject</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.firstSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.secondSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.thirdSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.firstSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.secondSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.thirdSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.firstSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.secondSubject}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.thirdSubject}
              </Text>
            </Row>
          </Col>
          <Col>
            <Row size={0.5} style={styles.heading}>
              <Text style={styles.headingContent}>Marks</Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.firstmathsmarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.firstsciencemarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.firstenglishmarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.secondmathmarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.secondsciencemarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.secondenglishmarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.thirdmathsmarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.thirdsciencemarks}
              </Text>
            </Row>
            <Row size={0.5} style={styles.content}>
              <Text style={styles.headingContent}>
                {this.props.thirdenglishmarks}
              </Text>
            </Row>
          </Col>
        </Grid>
      </CardView>
    );
  }
}

ScoreTable.propTypes = {
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  thirdName: PropTypes.string.isRequired,
  firstSubject: PropTypes.string.isRequired,
  secondSubject: PropTypes.string.isRequired,
  thirdSubject: PropTypes.string.isRequired,
  firstmathsmarks: PropTypes.number.isRequired,
  firstsciencemarks: PropTypes.number.isRequired,
  firstenglishmarks: PropTypes.number.isRequired,
  secondmathmarks: PropTypes.number.isRequired,
  secondsciencemarks: PropTypes.number.isRequired,
  secondenglishmarks: PropTypes.number.isRequired,
  thirdmathsmarks: PropTypes.number.isRequired,
  thirdsciencemarks: PropTypes.number.isRequired,
  thirdenglishmarks: PropTypes.number.isRequired
};

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
    height: height - 450,
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
