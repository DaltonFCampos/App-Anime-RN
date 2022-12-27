import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import TabRoute from "./src/routes/TabRoute";
import ReadingPage from "./src/pages/ReadingPage";
import RegisterPage from "./src/pages/RegisterPage";

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
        <Stack.Screen name="Reading Page" component={ReadingPage} />
        <Stack.Screen name="Register Page" component={RegisterPage} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
