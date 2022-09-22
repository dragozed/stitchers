import React from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>Welcome Stitcher</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() =>
          Alert.alert("Title", "Message", [
            { onPress: () => console.log("Yes"), text: "Yes" },
            { onPress: () => console.log("No"), text: "No" },
          ])
        }
      >
        <Text style={{ color: "white" }}>Giriş</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#FF0000",
    textShadowRadius: 2,
    textShadowColor: "black",
    paddingBottom: "15%",
  },
  button: {
    alignItems: "center",
    paddingVertical: 16,
    width: "40%",
    borderRadius: "10%",
    borderWidth: 3,
    borderColor: "#260E6B",
    backgroundColor: "#3407B3",
  },
});

export default WelcomeScreen;
