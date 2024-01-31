import "react-native-gesture-handler";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { Provider } from "react-redux";
import { Main } from "./components/Main";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
    <Provider store={store.store}>
      <PersistGate loading={<Text>...Loading</Text>} persistor={store.persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
