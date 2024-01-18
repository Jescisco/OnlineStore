import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Navegation from "./src/navegation/Navegation";
import { NavigationContainer } from "@react-navigation/native";

export default function Index() {
  return (
    <NavigationContainer>
      <Navegation />
    </NavigationContainer>
  );
}
