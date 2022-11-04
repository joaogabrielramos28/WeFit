import React from "react";
import { Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

import theme from "./src/styles/theme";
import { Routes } from "./src/routes/index.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando ...</Text>;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
}
