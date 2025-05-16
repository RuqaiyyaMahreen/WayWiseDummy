import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { StatusBar } from "../components/Weather/StatusBar";
import { WeatherDashboard } from "../components/Weather/WeatherDashboard";

const WeatherScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <WeatherDashboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
});

export default WeatherScreen;
