import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
