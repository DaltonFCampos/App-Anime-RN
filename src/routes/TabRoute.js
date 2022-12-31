import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";
import ProfilePage from "../pages/ProfilePage";
import { Octicons, FontAwesome } from "@expo/vector-icons/";

const Tab = createBottomTabNavigator();

function TabRoute() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#90939B",
        tabBarActiveTintColor: "#2EAEBE",

        tabBarStyle: {
          position: "relative",
          backgroundColor: "#21252F",
          borderTopWidth: 0,
          paddingBottom: 14,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home Page"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => {
            return <Octicons name="home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search Page"
        component={SearchPage}
        options={{
          tabBarIcon: ({ color }) => {
            return <Octicons name="search" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites Page"
        component={FavoritesPage}
        options={{
          tabBarIcon: ({ color }) => {
            return <Octicons name="bookmark" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile Page"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="user-o" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoute;
