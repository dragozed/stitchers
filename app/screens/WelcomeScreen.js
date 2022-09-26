import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from "react-native";
import axios from "axios";

export const WelcomeScreen = (props) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [infoText, setInfoText] = useState(
    "Please enter your Username and Password"
  );

  const submitHandler = async () => {
    let matchingFlag = false;

    const getUsers = await axios.get("http://192.168.2.240:3000/users"); //localip instead of localhost
    const found = getUsers.data.find((e) => e.userName === userName);
    if (typeof found === "undefined") {
      setInfoText("Username not found");
    } else {
      matchingFlag = found.password === password;
      if (matchingFlag) {
        //Login Successful
        setInfoText("Login Succesful");
        props.getScreenName("HomeScreen");
      } else {
        setInfoText("Username and Password do not match");
      }
    }
  };

  return (
    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>Welcome Stitcher</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setIsLoginOpen(true)}
      >
        <Text style={{ color: "white" }}>Login</Text>
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
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            placeholderTextColor={"black"}
            style={styles.textInput}
            placeholder="Username"
            onChangeText={setUserName}
          />
          <TextInput
            placeholderTextColor={"black"}
            style={[styles.textInput, { marginTop: 5 }]}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <TouchableHighlight
            style={[styles.button, { marginTop: 10 }]}
            onPress={submitHandler}
          >
            <Text style={{ color: "white" }}>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, { marginTop: 5 }]}
            onPress={() => setIsLoginOpen(false)}
          >
            <Text style={{ color: "white" }}>Back</Text>
          </TouchableHighlight>
          <Text style={{ color: "black" }}>{infoText}</Text>
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
  textInput: {
    width: "60%",
    paddingVertical: 10,
    borderRadius: "10%",
    borderWidth: 3,
    borderColor: "#260E6B",
    backgroundColor: "#FEA500",
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    color: "#FF0000",
    textShadowRadius: 2,
    textShadowColor: "black",
    paddingBottom: "5%",
  },
});
