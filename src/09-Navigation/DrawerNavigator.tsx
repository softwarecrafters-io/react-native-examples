import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "./screens/SettingsScreen";

export type RootDrawerParams = {
  StackNavigator: undefined,
  SettingsScreen: undefined,
}

const Drawer = createDrawerNavigator<RootDrawerParams>()

export const DrawerNavigatorContainer = () => (
  <NavigationContainer>
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name={"StackNavigator"} component={StackNavigator} />
      <Drawer.Screen name={"SettingsScreen"} options={{}} component={SettingsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
)

const screenOptions: DrawerNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent'
  },
}

