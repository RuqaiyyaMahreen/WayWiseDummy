import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from "./StatusBar";
import { TimelineChart } from "./TimelineChart";
import { WeatherCard } from "./WeatherCard";

export function WeatherDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.dashboard}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b2fbc4f952cd4f67fdc51dc4662fab3ca21b2c6",
          }}
          style={styles.backgroundImage}
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/37202d25a3328692d612f62686e8ff5d8ea5943e",
          }}
          style={styles.overlayImage}
        />
        <View style={styles.content}>
          <StatusBar />
          <WeatherCard />
          <TimelineChart />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  dashboard: {
    overflow: "hidden",
    position: "relative",
    marginHorizontal: "auto",
    width: "100%",
    height: "100%",
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "#1C1917",
    maxWidth: 375,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  overlayImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  spacing: {
    height: 200, // You can increase this if you want more space
  },
});
