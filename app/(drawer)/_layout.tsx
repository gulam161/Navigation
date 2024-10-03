import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Home from "./index";

const drawerRoot = () => {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="index" />
        <Drawer.Screen name="about" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default drawerRoot;
