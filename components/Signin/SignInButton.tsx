import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SignInButtonProps {
  onPress: () => void;
}

export const SignInButton: React.FC<SignInButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 64,
    paddingVertical: 14,
    marginTop: 64,
    backgroundColor: "#0891b2", // bg-cyan-600
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
