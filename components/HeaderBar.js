import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeaderBar({ handleModuleChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handleModuleChange("swiping");
        }}
      >
        <FontAwesome5 name="hamburger" size={40}></FontAwesome5>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleModuleChange("matches");
        }}
      >
        <FontAwesome5 name="user-friends" size={40}></FontAwesome5>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleModuleChange("profile");
        }}
      >
        <FontAwesome5 name="user-cog" size={39}></FontAwesome5>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fdc000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.15,
    elevation: 9,
  },
});
