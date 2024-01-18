import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Menu from "../component/Menu";
import Cart from "../component/Cart";

const Tab = createBottomTabNavigator();

export default function Navegation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={{ uri: "https://img.icons8.com/ios/50/home--v1.png" }}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={{
                uri: "https://img.icons8.com/pastel-glyph/64/shopping-cart--v1.png",
              }}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
