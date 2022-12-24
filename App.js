import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import TabRoute from "./src/routes/TabRoute";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          navigationBarColor: "black",
          navigationBarHidden: true,
        }}
      >
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="TabRoute" component={TabRoute} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
