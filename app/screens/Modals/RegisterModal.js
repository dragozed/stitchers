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

const salt = bcrypt.genSaltSync(10);

export const RegisterModal = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [infoText, setInfoText] = useState("Choose Username and Password");

  const submitHandler = async () => {
    if (rePassword === password) {
      let matchingFlag = false;

      const getUsers = await axios.get("http://192.168.2.240:3000/users"); //localip instead of localhost
      const found = getUsers.data.find((e) => e.userName === userName);
      if (typeof found === "undefined") {
        //username is unique
        await axios.post("http://192.168.2.240:3000/users/createUser", {
          userName: userName,
          password: bcrypt.hashSync(password, salt),
        });
        setInfoText("Registeration Successful");
      } else {
        setInfoText("Username already exists");
      }
    } else {
      setInfoText("Passwords do not match");
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isRegisterOpen}
      onRequestClose={() => {
        props.setIsRegisterOpen(!props.isRegisterOpen);
      }}
    >
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Register</Text>
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
        <TextInput
          placeholderTextColor={"black"}
          style={[styles.textInput, { marginTop: 6 }]}
          placeholder="Re-Enter Password"
          secureTextEntry={true}
          onChangeText={setRePassword}
        />
        <TouchableHighlight style={styles.button} onPress={submitHandler}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => props.setIsRegisterOpen(false)}
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
