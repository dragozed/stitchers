import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { LoginModal } from "./Modals/LoginModal";
import { RegisterModal } from "./Modals/RegisterModal";

export const WelcomeScreen = (props) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>Welcome Stitcher</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setIsLoginOpen(true)}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setIsRegisterOpen(true)}
      >
        <Text style={{ color: "white" }}>Register</Text>
      </TouchableHighlight>
      <LoginModal
        getScreenName={props.getScreenName}
        setIsLoginOpen={setIsLoginOpen}
        isLoginOpen={isLoginOpen}
      />
      <RegisterModal
        getScreenName={props.getScreenName}
        setIsRegisterOpen={setIsRegisterOpen}
        isRegisterOpen={isRegisterOpen}
      />
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
    marginVertical: 3,
  },
  modal: {
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
  textInput: {
    width: "60%",
    paddingVertical: 10,
    borderRadius: "10%",
    borderWidth: 3,
    borderColor: "#260E6B",
    backgroundColor: "#FEA500",
    textAlign: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    color: "#FF0000",
    textShadowRadius: 2,
    textShadowColor: "black",
    paddingBottom: "5%",
  },
});
