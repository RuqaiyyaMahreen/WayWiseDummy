import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const StatusBar: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.time}>9:41</Text>
      <View style={styles.indicators}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c6fe2891db70d8cc9c00987422b792d54d1023f?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
          }}
          style={styles.networkIcon}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6159b45569afa28b45c593fb2d73909eb2565a9e?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
          }}
          style={styles.wifiIcon}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/90ff70b1c2ca356851f372c9ca7d9ef3b7e9c747?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
          }}
          style={styles.batteryIcon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    overflow: "hidden",
    gap: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  time: {
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: -0.5,
    textAlign: "center",
    color: "#1C1917",
  },
  indicators: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  networkIcon: {
    width: 20,
    aspectRatio: 1.54,
    alignSelf: "stretch",
  },
  wifiIcon: {
    width: 17,
    aspectRatio: 1.31,
    alignSelf: "stretch",
  },
  batteryIcon: {
    width: 27,
    aspectRatio: 2.08,
    alignSelf: "stretch",
  },
});
