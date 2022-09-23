import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { BottomBar } from "./app/utilBars/BottomBar";
import { TopBar } from "./app/utilBars/TopBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <TopBar />
      <WelcomeScreen />
      <BottomBar />
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
