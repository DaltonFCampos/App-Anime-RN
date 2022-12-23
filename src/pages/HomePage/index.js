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
import VerticalCard from "../../components/VerticalCard";

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
        initialNumToRender={5}
        // Render Horizontal
        renderSectionHeader={({ section }) => (
          <View>
            <Text style={styles.title}>
              {section.title} {">>>"}
            </Text>
            {section.horizontal && (
              <FlatList
                data={section.data}
                horizontal
                renderItem={_renderitem}
              />
            )}
          </View>
        )}
        // Render Vertical
        renderItem={({ item, section }) => {
          if (section.horizontal) {
            return null;
          }
          return (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <VerticalCard item={item} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const _renderitem = ({ item }) => <VerticalCard item={item} />;

export default HomePage;
