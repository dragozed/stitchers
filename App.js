import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("TextPressed");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World!!
      </Text>
      <Button color="#884158" title="Button" accessibilityLabel="learnmore" />
      <TouchableWithoutFeedback onPress={() => console.log("imagetapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
