import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";

export const BottomBar = () => {
  return (
    <View style={styles.bottombar}>
      <TouchableWithoutFeedback onPress={() => console.log("Home Tapped")}>
        <Image source={require("../assets/home-48.png")} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("Add Tapped")}>
        <Image source={require("../assets/add-48.png")} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("User Tapped")}>
        <Image source={require("../assets/user-48.png")} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  bottombar: {
    position: "fixed",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#FEA500",
    borderTopLeftRadius: "15%",
    borderTopRightRadius: "15%",
    paddingLeft: "5%",
    paddingRight: "5%",
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: "#DC9300",
  },
});
