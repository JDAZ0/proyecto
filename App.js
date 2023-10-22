import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getCurrentLocation } from "./src/helpers/location";
import MyButton from "./src/components/MyButton.jsx";

export default function App() {
  function handlePress() {
    console.log("Test");
    getCurrentLocation();
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyButton onPress={handlePress} title="Test" />
    </View>
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
