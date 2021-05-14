import React from "react";
import Illness from "./components/illness";
import Severity from "./components/severity";
import Hospital from "./components/hospital";
import { DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Illness}
          options={
            {
              // title: "Illness",
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Severity"
          component={Severity}
          options={
            {
              // title: "Illness",
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Hospital"
          component={Hospital}
          options={
            {
              // title: "Illness",
              // headerShown: false,
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 1,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    // accent: "#f1c40f",
  },
};
