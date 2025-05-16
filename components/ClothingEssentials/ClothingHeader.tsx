import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "./StatusBar";

export const ClothingHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Clothing And Toiletries</Text>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8365fe767cad10a5f34eced054872d012f60bca1?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
          }}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.description}>
        Get organized for your trip with the right clothing!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 24,
    paddingRight: 14,
    paddingLeft: 36,
    width: "100%",
    backgroundColor: "#FEF2F2",
    borderRadius: 24,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "flex-start",
    marginTop: 14,
    marginLeft: 20,
  },
  title: {
    flex: 1,
    alignSelf: "flex-end",
    marginTop: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: "#1C1917",
  },
  icon: {
    width: 31,
    aspectRatio: 1,
    alignSelf: "flex-start",
  },
  description: {
    alignSelf: "center",
    marginTop: 24,
    fontSize: 18,
    textAlign: "center",
    color: "#1C1917",
  },
});
