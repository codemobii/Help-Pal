/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContainer from "./drawer_container";

//SCREENS
import CategoryVideos from "../screens/discover/category_videos";
import PlayVideo from "../screens/discover/play";

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={DrawerContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CategoryVideos"
          component={CategoryVideos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PlayVideo"
          component={PlayVideo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
