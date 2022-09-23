import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export const WelcomeScreen = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>Welcome Stitcher</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setIsLoginOpen(true)}
      >
        <Text style={{ color: "white" }}>Giriş</Text>
      </TouchableHighlight>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLoginOpen}
        onRequestClose={() => {
          setIsLoginOpen(!isLoginOpen);
        }}
      >
        <View style={styles.loginModal}>
          <Text>asddasd</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => setIsLoginOpen(false)}
          >
            <Text style={{ color: "white" }}>Geri</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

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
  loginModal: {
    flex: 0.8,
    height: "80%",
    borderTopLeftRadius: "15%",
    borderTopRightRadius: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.75,
    bottom: "-20%",
  },
});
