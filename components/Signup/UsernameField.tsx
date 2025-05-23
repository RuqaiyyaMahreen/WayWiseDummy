import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function UsernameField() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        defaultValue="amy_traveller"
      />
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#71717a",
  },
  input: {
    fontSize: 16,
    color: "#1c1917",
    marginTop: 8,
    padding: 0,
  },
  divider: {
    alignSelf: "stretch",
    marginTop: 10,
    height: 1,
    borderWidth: 1,
    borderColor: "#0891b2",
  },
});

export default UsernameField;
