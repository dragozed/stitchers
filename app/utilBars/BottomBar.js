import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";

function BottomBar(props) {
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
}

const styles = StyleSheet.create({
  bottombar: {
    width: "100%",
    height: 50,
    backgroundColor: "green",
    borderTopLeftRadius: "15%",
    borderTopRightRadius: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});

export default BottomBar;
