import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";
import FavoritesPage from "./src/pages/FavoritesPage";
import ProfilePage from "./src/pages/ProfilePage";
import LoginPage from "./src/pages/LoginPage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="TabPage" component={TabPage} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

function TabPage() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home Page" component={HomePage} />
      <Tab.Screen name="Search Page" component={SearchPage} />
      <Tab.Screen name="Favorites Page" component={FavoritesPage} />
      <Tab.Screen name="Profile Page" component={ProfilePage} />
    </Tab.Navigator>
  );
}
