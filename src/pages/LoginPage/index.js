import { Entypo } from "@expo/vector-icons/";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Styles from "./style";
import { Auth } from "../../Firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  async function handleAsyncStorage() {
    //armazena valor no asyncStorage
    await AsyncStorage.setItem("@Email1", email);
    await AsyncStorage.setItem("@Password1", passWord);
  }

  async function signinAutomatically() {
    const asyncEmail = await AsyncStorage.getItem("@Email1");
    const asyncPassword = await AsyncStorage.getItem("@Password1");
    if (asyncEmail && asyncPassword) {
      handleSignin(asyncEmail, asyncPassword);
    }
  }

  useEffect(() => {
    signinAutomatically();
  }, []);

  const handleSignin = (e, p) => {
    signInWithEmailAndPassword(Auth, e, p)
      .then((userCredential) => {
        console.log("Sign In");
        const usuario = userCredential.user;
        navigation.navigate("TabRoute");
        console.log(usuario);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <SafeAreaView style={Styles.logoContainer}>
        <Image
          style={Styles.logo}
          source={require("../../assets/imgs/logo-Animepp.png")}
        />
      </SafeAreaView>
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <TextInput
          style={Styles.loginInput}
          placeholder="Email"
          placeholderTextColor={"#90939B"}
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={Styles.loginInput}
          placeholder="PassWord"
          placeholderTextColor={"#90939B"}
          autoCapitalize="none"
          secureTextEntry={passwordHidden}
          value={passWord}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity
          style={Styles.iconPassword}
          onPress={() => {
            setPasswordHidden(!passwordHidden);
          }}
        >
          <Entypo
            name={passwordHidden ? "eye-with-line" : "eye"}
            color={passwordHidden ? "#90939B" : "#fff"}
            size={30}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={Styles.loginButton}
        onPress={() => {
          handleAsyncStorage();
          handleSignin(email.trim(), passWord.trim());
        }}
      >
        <Text style={Styles.textButton}>Login</Text>
      </TouchableOpacity>

      <View style={Styles.forgotPassword}>
        <Text style={{ color: "#90939B" }}>Forgot Password?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#2EAEBE" }}> Recover here</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.singUP}>
        <Text style={{ color: "#90939B" }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register Page")}>
          <Text style={{ color: "#2EAEBE" }}> SignUp here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginPage;
