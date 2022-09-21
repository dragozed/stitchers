import React from "react";
import { Text, StyleSheet } from "react-native";

function TopBar(props) {
  return <Text style={styles.topbar}>I am TopBar</Text>;
}

const styles = StyleSheet.create({
  topbar: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    textAlign: "center",
  },
});
export default TopBar;
