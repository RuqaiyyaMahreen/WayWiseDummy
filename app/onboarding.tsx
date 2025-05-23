import React from "react";
import { StyleSheet, View } from "react-native";
import HomeIndicator from "../components/Onboarding/HomeIndicator";
import OnboardingNative from "../components/Onboarding/OnboardingNative"; // This is the Builder.io component
import CustomStatusBar from "../components/Onboarding/StatusBar";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <OnboardingNative />
      <HomeIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
