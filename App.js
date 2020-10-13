import React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import AppStack from "./src/routes/app_stack";

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5c969e",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: (props) => <Ionicons {...props} />,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0,0,0,0.3)"
      />
      <AppStack />
    </PaperProvider>
  );
}
