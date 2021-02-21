import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MatchItem from "./MatchItem";

export default function Matches({ matches, handleMatchDelete }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={{ fontSize: 16 }}>MATCHES</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item._id.toString()}
        data={matches}
        renderItem={({ item }) => (
          <MatchItem
            name={item.name}
            handleMatchDelete={handleMatchDelete}
            id={item._id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f2f2f7",
    height: 30,
    justifyContent: "center",
  },
});
