import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import {Provider} from "react-redux"
import { Main } from "./components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eaeaea",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 6,
//     backgroundColor: "#61dafb",
//     color: "#20232a",
//     textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// });
