import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";

const JobCard = ({ item, onPress }) => {
  return (
    <View style={[styles.container, { height: null }]}>
      <View style={styles.row}>
        <Image source={require('../assets/hearty.png')} style={styles.img} />
        <View>
          <Text style={styles.userNameText}>{item.userName}</Text>
          <Text style={styles.madeRequestText}>made a request!</Text>
        </View>
      </View>

      {item.start && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Pick-up:</Text>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>{item.start}</Text>
          </View>
        </View>
      )}

      {item.end && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Destination:</Text>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>{item.end}</Text>
          </View>
        </View>
      )}

      {item.desc && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Job Description:</Text>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>{item.desc}</Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            `Talk to ${item.userName} now!`,
            `Add ${item.userName} under the messages tab`
          );
        }}
        style={styles.butt}
      >
        <Text style={styles.buttText}>Accept job</Text>
      </TouchableOpacity>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: deviceWidth - 50,
    backgroundColor: "#b2d3c2",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 5, height: 5 },
    elevation: 10,
    shadowRadius: 5,
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
    padding: 10,
    flex: 1, // Make the card's height dynamic
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the center
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 30,
    marginRight: 10,
  },
  userNameText: {
    color: "#000",
    padding: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  madeRequestText: {
    color: "#CD5E77",
    fontWeight: "bold",
    padding: 5,
    fontSize: 18,
  },
  text: {
    color: "#000",
    padding: 5,
  },
  butt: {
    backgroundColor: "#a7c2cc",
    width: 100,
    height: 30,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  buttText: {
    color: "#000",
    alignSelf: "center",
    marginTop: 4,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Align items vertically at the start
    padding: 5,
  },
  label: {
    color: "#592120",
    marginRight: 5,
    fontWeight: '600'
  },
  infoTextContainer: {
    flex: 1, // Allow the infoText to take up available space
  },
  infoText: {
    color: "#000",
  },
});

export default JobCard;
