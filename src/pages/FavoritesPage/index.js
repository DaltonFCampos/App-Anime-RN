import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./style";

function FavoritesPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
        Essa é a Pagina de Favoritos {"\n\n"} Em Breve...
      </Text>
    </SafeAreaView>
  );
}

export default FavoritesPage;
