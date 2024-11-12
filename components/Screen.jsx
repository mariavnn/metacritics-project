import { View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

export function Screen({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.backgroundColor
  },
});