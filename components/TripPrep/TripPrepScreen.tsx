import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TripPrepScreen = () => {
  const buttons = [
    "Weather",
    "Clothing and Toileteries",
    "Essentials",
    "Travel Hacks and Tips",
  ];

  return (
    <ImageBackground
      source={{
        uri: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747239650/uploads/1747239650521-image.png.png",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Trip Prep</Text>
        <Text style={styles.subheading}>
          Prepare for your trip with ease! Ensuring you’re all set for your
          adventure.
        </Text>

        <View style={styles.buttonContainer}>
          {buttons.map((text, index) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subheading: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 24,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#FEF2F2",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default TripPrepScreen;
