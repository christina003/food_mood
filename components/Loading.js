import React from "react";
import { View, Image, StyleSheet } from "react-native";

const loadingGif = require("./loading.gif");

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image source={loadingGif} style={styles.loader}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 350,
  },
  loader: {
    height: 250,
    width: 250,
  },
});
