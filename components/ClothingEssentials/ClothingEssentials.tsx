import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ClothingGrid } from "./ClothingGrid";
import { ClothingHeader } from "./ClothingHeader";

const ClothingEssentials: React.FC = () => {
  return (
    <View style={styles.container}>
      <ClothingHeader />
      <ClothingGrid />
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd745e7cf3c5a8fae9dad3f462f3fd2a71ac5662?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
        }}
        style={styles.bottomImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    marginHorizontal: "auto",
    width: "100%",
    maxWidth: 480,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "#1C1917",
  },
  bottomImage: {
    marginTop: 24,
    width: "100%",
    aspectRatio: 1.77,
    borderRadius: 35,
  },
});

export default ClothingEssentials;
