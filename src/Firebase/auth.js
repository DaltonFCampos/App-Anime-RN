import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { firebaseConfig } from "./firebaseConfig";

// add firebase config here

// initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize auth
const Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { Auth };
