import { Entypo } from "@expo/vector-icons/";
import React, { useState } from "react";
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

function LoginPage({ navigation }) {
  const [user, setUser] = useState("");
  const [PassWord, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleSignin = () => {
    signInWithEmailAndPassword(Auth, user, PassWord)
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
          placeholder="User-ID"
          placeholderTextColor={"#90939B"}
          value={user}
          onChangeText={(text) => setUser(text)}
        />

        <TextInput
          style={Styles.loginInput}
          placeholder="PassWord"
          placeholderTextColor={"#90939B"}
          autoCapitalize="none"
          secureTextEntry={passwordHidden}
          value={PassWord}
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
          handleSignin();
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
