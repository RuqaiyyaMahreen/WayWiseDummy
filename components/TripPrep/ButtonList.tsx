import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const ButtonList = () => {
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
      <View style={styles.container}>
        {buttons.map((text, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 32,
  },
  container: {
    flexDirection: "column",
    gap: 16,
    paddingHorizontal: 20,
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
