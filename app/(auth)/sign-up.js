import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Screen } from "../../components/Screen";
import { Logo } from "../../components/Logo";



export default function Register() {
  return (
    <Screen>
      <View style={styles.container}>
        <Logo/>
        <Text style={styles.text}>Register </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  text:{
    fontSize: 20,
    color: "#fff",
  }
});