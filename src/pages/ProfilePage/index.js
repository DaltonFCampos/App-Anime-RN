import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons/";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfilePage({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function logout() {
    try {
      await AsyncStorage.removeItem("@User1");
      await AsyncStorage.removeItem("@Password1");
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Login Page");
  }

  async function getData() {
    //Busca o valor no asyncStorage
    const asyncUser = await AsyncStorage.getItem("@User1");
    const asyncPassword = await AsyncStorage.getItem("@Password1");
    if (asyncUser && asyncPassword) {
      setUser(asyncUser);
      setPassword(asyncPassword);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.icon}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="pencil-circle"
              size={50}
              color={"#2EAEBE"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.image}>
          <Image
            style={styles.logo}
            source={require("../../assets/imgs/Profile-icon.jpg")}
          />
        </View>

        <View style={styles.info}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 20 }}>
            Radamantthys
          </Text>
          <Text style={{ color: "#90939B", fontSize: 16 }}>{user}</Text>
        </View>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity>
          <View style={styles.menuButton}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              Anime List
            </Text>
            <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.menuButton}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              Watched
            </Text>
            <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.menuButton}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              My Review
            </Text>
            <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.menuButton}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              Settings
            </Text>
            <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "50%",
            height: 50,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
          onPress={() => {
            logout();
          }}
        >
          <Text style={{ color: "#2EAEBE", fontWeight: "bold", fontSize: 22 }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ProfilePage;
