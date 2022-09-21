import React from "react";
import { Text, StyleSheet } from "react-native";

function BottomBar(props) {
  return <Text style={styles.bottombar}>I am BottomBar</Text>;
}

const styles = StyleSheet.create({
  bottombar: {
    width: "100%",
    height: 50,
    backgroundColor: "green",
    textAlign: "center",
  },
});

export default BottomBar;
