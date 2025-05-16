import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ClothingEssentials from "../components/ClothingEssentials/ClothingEssentials";

const ClothingEssentialsPage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ClothingEssentials />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // You can adjust this to your theme color
  },
});

export default ClothingEssentialsPage;
