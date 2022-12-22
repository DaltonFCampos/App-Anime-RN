import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  FlatList,
  useWindowDimensions,
} from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import Data from "../../data/Database";

function HomePage() {
  const tamanho = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={<Header />}
        style={{ width: tamanho.width }}
        stickySectionHeadersEnabled={false}
        scrollEnabled={true}
        sections={Data}
        renderSectionHeader={({ section }) => (
          <View>
            <Text>{section.title}</Text>
            {section.horizontal && (
              <FlatList
                data={section.data}
                horizontal
                renderItem={({ item }) => {
                  return <ListItem item={item} />;
                }}
              />
            )}
          </View>
        )}
        renderItem={({ item, section }) => {
          if (section.horizontal) {
            return null;
          }
          return <ListItem item={item} />;
        }}
      />
    </SafeAreaView>
  );
}

const ListItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default HomePage;
