import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function MatchItem({ name, id, handleMatchDelete }) {
  const checkDelete = () => {
    Alert.alert(`Are you sure you want to remove ${name}?`, "", [
      { text: "Yes", onPress: () => handleMatchDelete(id) },
      { text: "Cancel", onPress: () => {} },
    ]);
  };

  const onRightSwipe = () => {
    return (
      <TouchableOpacity onPress={checkDelete}>
        <View style={styles.deleteContainer}>
          <Text style={styles.deleteText}>Delete</Text>
          <View style={styles.itemLine}></View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={onRightSwipe}>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{name}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    marginBottom: 5,
    justifyContent: "center",
  },
  item: {
    padding: 20,
    backgroundColor: "#ff5f9d",
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 60,
    marginBottom: 5,
    marginTop: 5,
  },
});
