import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

export function WeatherCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <View>
              <Svg width={50} height={26} viewBox="0 0 50 26" fill="none">
                <Rect
                  x={0.210449}
                  y={0.693298}
                  width={49}
                  height={25}
                  rx={12.5}
                  fill="white"
                  fillOpacity={0.4}
                />
                <Path
                  d="M11.2104 13.7933H29.2104"
                  stroke="#1E1E1E"
                  strokeWidth={1.6968}
                />
                <Path
                  d="M16.2174 19.6365L10.2104 13.6933L16.2174 7.69327"
                  stroke="#1E1E1E"
                  strokeWidth={1.7}
                />
              </Svg>
            </View>
            <Text style={styles.title}>Tomorrow</Text>
          </View>
          <View style={styles.closeButton}>
            <View style={[styles.closeLine, styles.closeLineLeft]} />
            <View style={[styles.closeLine, styles.closeLineRight]} />
          </View>
        </View>

        <View style={styles.weatherInfo}>
          <View>
            <Svg width={84} height={67} viewBox="0 0 84 67" fill="none">
              <Path
                d="M47.0117 17.0194C59.8346 17.0194 67.107 25.6272 68.163 36.0177H68.4855C76.7359 36.0177 83.4257 42.7824 83.4257 51.1276C83.4257 59.4728 76.7359 66.2376 68.4855 66.2376H25.5379C17.2875 66.2376 10.5977 59.4728 10.5977 51.1276C10.5977 42.7824 17.2875 36.0177 25.5379 36.0177H25.8604C26.9268 25.5561 34.1888 17.0194 47.0117 17.0194ZM33.4449 0.613404C41.019 0.613404 47.6255 5.14147 50.8872 11.7969C49.6014 11.6311 48.3071 11.5489 47.0117 11.5508C34.5789 11.5508 25.5171 18.6983 22.2814 29.5209L21.9589 30.6912L21.7196 31.7138L20.8613 31.8779C17.7198 32.5505 14.7856 34.0302 12.3203 36.1848C9.85506 38.3394 7.93543 41.102 6.73266 44.2261C4.25448 42.6389 2.32243 40.2621 1.21737 37.4413C0.112316 34.6204 -0.108154 31.5026 0.588014 28.541C1.28418 25.5795 2.8607 22.9285 5.0884 20.9735C7.31609 19.0184 10.0788 17.8613 12.9751 17.6702L14.1299 17.6429C14.9321 12.8705 17.3078 8.54776 20.8399 5.43354C24.3721 2.31933 28.8349 0.612745 33.4449 0.613404Z"
                fill="white"
              />
            </Svg>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperature}>25</Text>
            <Svg
              width={14}
              height={15}
              viewBox="0 0 14 15"
              fill="none"
              style={styles.degreeIcon}
            >
              <Path
                d="M0.0891113 7.76005C0.0891113 5.88561 0.736023 4.28062 2.02985 2.94508C3.32367 1.60954 4.87853 0.941772 6.69442 0.941772C8.48761 0.941772 10.0254 1.60954 11.3079 2.94508C12.5904 4.28062 13.2316 5.88561 13.2316 7.76005C13.2316 9.63449 12.5904 11.2453 11.3079 12.5926C10.0254 13.9398 8.48761 14.6135 6.69442 14.6135C4.90123 14.6135 3.35204 13.9398 2.04687 12.5926C0.741698 11.2453 0.0891113 9.63449 0.0891113 7.76005ZM3.28962 7.76005C3.28962 8.74413 3.61875 9.57592 4.27701 10.2554C4.95797 10.9583 5.76378 11.3098 6.69442 11.3098C7.62507 11.3098 8.43087 10.9583 9.11183 10.2554C9.79279 9.55249 10.1333 8.7207 10.1333 7.76005C10.1333 6.7994 9.79279 5.97348 9.11183 5.28228C8.43087 4.59107 7.62507 4.24547 6.69442 4.24547C5.74108 4.24547 4.93528 4.58522 4.27701 5.2647C3.61875 5.94419 3.28962 6.77597 3.28962 7.76005Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>

        <Text style={styles.condition}>Cloudy</Text>
        <Text style={styles.location}>Bangalore, Karnataka</Text>
        <Text style={styles.date}>21 May 2025</Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Feels like 28</Text>
          <View style={styles.divider} />
          <Text style={styles.footerText}>Sunset 18:20</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    marginTop: 56,
  },
  card: {
    position: "relative",
    padding: 24,
    width: "100%",
    borderRadius: 24,
    backgroundColor: "#64748B",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#CBD5E1",
  },
  closeButton: {
    flexDirection: "row",
    gap: 6,
  },
  closeLine: {
    width: 10,
    height: 2,
    borderRadius: 4,
    backgroundColor: "#CBD5E1",
  },
  closeLineLeft: {
    transform: [{ rotate: "135deg" }],
  },
  closeLineRight: {
    transform: [{ rotate: "-45deg" }],
  },
  weatherInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  temperature: {
    fontSize: 72,
    fontWeight: "500",
    color: "white",
  },
  degreeIcon: {
    width: 13,
    height: 14,
    marginTop: 21,
    marginLeft: 2,
  },
  condition: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
  location: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    color: "#CBD5E1",
  },
  date: {
    marginTop: 14,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    color: "#CBD5E1",
  },
  footer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  footerText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#CBD5E1",
  },
  divider: {
    width: 1,
    height: 9,
    borderRadius: 8,
    backgroundColor: "#CBD5E1",
  },
});
