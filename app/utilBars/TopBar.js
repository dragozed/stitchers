import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";

function TopBar(props) {
  return (
    <View style={styles.topbar}>
      <TouchableWithoutFeedback onPress={() => console.log("Stitchers Tapped")}>
        <Image
          style={{ width: 48, height: 48 }}
          source={require("../assets/stitchers-64.png")}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
export default TopBar;
