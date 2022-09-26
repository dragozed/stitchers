import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { BottomBar } from "./app/utilBars/BottomBar";
import { TopBar } from "./app/utilBars/TopBar";
import { HomeScreen } from "./app/screens/HomeScreen";

export default function App() {
  const [screenName, setScreenName] = useState("WelcomeScreen");

  const getScreenName = (e) => {
    setScreenName(e);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <TopBar />
      {screenName === "WelcomeScreen" ? (
        <WelcomeScreen getScreenName={getScreenName} />
      ) : screenName === "HomeScreen" ? (
        <HomeScreen />
      ) : (
        ""
      )}
      {screenName === "WelcomeScreen" ? "" : <BottomBar />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC04A",
    alignItems: "center",
  },
});
