import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    switch (percentage) {
      case percentage < 40:
        return Colors.terciary;
      case percentage > 65:
        return Colors.secondary;
      default:
        return Colors.primary;
    }
  };

  const backgroundColor = getColors();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});