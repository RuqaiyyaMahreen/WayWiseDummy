import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ImageItem } from "./ImageItem";

export const ClothingGrid: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <ImageItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b60f850c49cbe83205555a120b07e3ff2e1e239b?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572"
          caption="A fur jacket"
          imageStyle={styles.verticalImage}
        />
        <ImageItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0932cf39fba3e6551e64c50b64ab151cd9680e?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572"
          caption="Long Boots"
          style={styles.marginTop}
          imageStyle={styles.verticalImage}
        />
      </View>
      <View style={styles.rightColumn}>
        <ImageItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/1941d103e8b8c16e796247db1875ea8f5548ecaf?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572"
          caption="Warm pair of gloves"
          imageStyle={styles.wideImage}
          style={styles.marginBottom}
        />
        <ImageItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/84054975e81b89738b5ced18f00f321a1a0b9ef6?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572"
          caption="A scarf"
          imageStyle={styles.verticalImage}
          style={styles.marginTop}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignSelf: "center",
    marginTop: 14,
    width: "100%",
    maxWidth: 324,
  },
  leftColumn: {
    flexDirection: "column",
  },
  rightColumn: {
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    width: 173,
  },
  verticalImage: {
    width: 131,
    aspectRatio: 0.75,
  },
  wideImage: {
    width: "100%",
    aspectRatio: 1.1,
  },
  marginTop: {
    marginTop: 14,
  },
  marginBottom: {
    marginBottom: 32,
  },
});
