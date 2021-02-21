import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function FooterBar({ handleLikeButton, handleDislikeButton }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDislikeButton}>
        <FontAwesome5 name="times" size={40}></FontAwesome5>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLikeButton}>
        <FontAwesome name="heart" size={40} color="black"></FontAwesome>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 15,
    backgroundColor: "#fdc000",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
