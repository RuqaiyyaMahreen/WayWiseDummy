import React from "react";
import { TouchableOpacity, View } from "react-native";

export const MenuButton = () => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        left: 22,
        top: 21,
        height: 13,
        width: 19,
        flexDirection: "column",
        gap: 2,
      }}
    >
      {[1, 2, 3].map((key) => (
        <View
          key={key}
          style={{
            height: 3,
            width: 19,
            backgroundColor: "#1E1E1E",
            borderRadius: 2,
          }}
        />
      ))}
    </TouchableOpacity>
  );
};
