import { Button, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../Theme";
import { RootDrawerParams } from "../DrawerNavigator";

interface Props extends StackScreenProps<RootDrawerParams, 'SettingsScreen'>{}

export const SettingsScreen = ({ navigation }:Props) => {
  return(
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </View>
  )
}


