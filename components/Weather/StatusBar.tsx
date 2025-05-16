import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

export function StatusBar() {
  return (
    <View style={styles.header}>
      <Text style={styles.time}>9:41</Text>
      <View style={styles.icons}>
        <View style={styles.signalIcon}>
          <Svg width="100%" height="100%" />
        </View>
        <View style={styles.wifiIcon}>
          <Svg width="100%" height="100%" />
        </View>
        <View>
          <Svg width={29} height={13} viewBox="0 0 29 13" fill="none">
            <Rect
              opacity={0.4}
              x={1.47058}
              y={0.5}
              width={24}
              height={12}
              rx={3.5}
              stroke="#1E1E1E"
            />
            <Path
              opacity={0.5}
              d="M26.9706 4.5V8.5C27.7765 8.16122 28.3006 7.37313 28.3006 6.5C28.3006 5.62687 27.7765 4.83878 26.9706 4.5Z"
              fill="#1E1E1E"
            />
            <Rect
              x={2.97058}
              y={2}
              width={17}
              height={9}
              rx={2}
              fill="#1E1E1E"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 48,
    paddingTop: 16,
  },
  time: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 16,
    color: "#1C1917",
  },
  icons: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  signalIcon: {
    width: 20,
    height: 12,
  },
  wifiIcon: {
    height: 13,
    width: 17,
  },
});
