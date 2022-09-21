import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Image,
  Button,
  Alert,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import BottomBar from "./app/utilBars/BottomBar";
import TopBar from "./app/utilBars/TopBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <TopBar />
      <WelcomeScreen />
      <Button
        color="#884158"
        title="Yes/No Button"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { onPress: () => console.log("Yes"), text: "Yes" },
            { onPress: () => console.log("No"), text: "No" },
          ])
        }
      />
      <Button
        color="#884158"
        title="Get Text Button"
        onPress={() =>
          Alert.prompt("Title", "Message", (text) => console.log(text))
        }
      />

      <TouchableHighlight onPress={() => console.log("imagetapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
