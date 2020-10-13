import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./drawer_content";

//Screens
import Home from "../screens/report";
import Discover from "../screens/discover";

export default function DrawerContainer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Discover" component={Discover} />
    </Drawer.Navigator>
  );
}
