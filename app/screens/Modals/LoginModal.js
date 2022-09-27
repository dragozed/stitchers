import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from "react-native";
import axios from "axios";
import bcrypt from "bcryptjs";

export const LoginModal = (props) => {
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
      matchingFlag = await bcrypt.compare(password, found.password);
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
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isLoginOpen}
      onRequestClose={() => {
        props.setIsLoginOpen(!props.isLoginOpen);
      }}
    >
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Login</Text>
        <TextInput
          placeholderTextColor={"black"}
          style={styles.textInput}
          placeholder="Username"
          onChangeText={setUserName}
        />
        <TextInput
          placeholderTextColor={"black"}
          style={[styles.textInput, { marginTop: 6 }]}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableHighlight style={styles.button} onPress={submitHandler}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => props.setIsLoginOpen(false)}
        >
          <Text style={{ color: "white" }}>Back</Text>
        </TouchableHighlight>
        <Text style={{ color: "black" }}>{infoText}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
