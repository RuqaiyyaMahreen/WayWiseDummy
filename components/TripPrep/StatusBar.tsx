import React from "react";
import { Text, View } from "react-native";
import { Circle, Path, Rect, Svg } from "react-native-svg";

export const StatusBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 9,
      }}
    >
      <Text style={{ fontSize: 18 }}>9:41</Text>
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Svg width={20} height={12} viewBox="0 0 20 12" fill="none">
          <Path
            d="M1 9h2v1H1V9zm4-2.5h2v3.5H5V6.5zm4-2.5h2v6H9V4zm4-2.5h2v8.5h-2V1.5zM17 0h2v11h-2V0z"
            fill="#1E1E1E"
          />
        </Svg>
        <Svg width={17} height={13} viewBox="0 0 17 13" fill="none">
          <Path
            d="M8.5 3.5c2.2 0 4.3.9 5.8 2.4l1.4-1.4C13.7 2.5 11.2 1.5 8.5 1.5S3.3 2.5 1.3 4.5l1.4 1.4c1.5-1.5 3.6-2.4 5.8-2.4z"
            fill="#1E1E1E"
          />
          <Path
            d="M8.5 6.5c1.4 0 2.7.6 3.7 1.5l1.4-1.4c-1.3-1.3-3.2-2.1-5.1-2.1S4.7 5.3 3.4 6.6l1.4 1.4c1-1 2.3-1.5 3.7-1.5z"
            fill="#1E1E1E"
          />
          <Path
            d="M8.5 9.5c.7 0 1.4.3 1.9.8l1.4-1.4c-.8-.8-2-1.4-3.3-1.4s-2.5.6-3.3 1.4l1.4 1.4c.5-.5 1.2-.8 1.9-.8z"
            fill="#1E1E1E"
          />
          <Circle cx={8.5} cy={11.5} r={1} fill="#1E1E1E" />
        </Svg>
        <Svg width={28} height={13} viewBox="0 0 28 13" fill="none">
          <Rect
            opacity={0.4}
            x={1.00122}
            y={0.5}
            width={24}
            height={12}
            rx={3.5}
            stroke="#1E1E1E"
          />
          <Path
            opacity={0.5}
            d="M26.5012 4.5V8.5C27.3071 8.16122 27.8312 7.37313 27.8312 6.5C27.8312 5.62687 27.3071 4.83878 26.5012 4.5Z"
            fill="#1E1E1E"
          />
          <Rect x={2.50122} y={2} width={17} height={9} rx={2} fill="#1E1E1E" />
        </Svg>
      </View>
    </View>
  );
};
