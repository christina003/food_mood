import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function RestaurantSwiper({
  restaurant,
  willLike,
  willDislike,
}) {
  return (
    <View>
      <Image
        source={{ uri: restaurant.image_url }}
        style={styles.image}
      ></Image>
      {willLike && (
        <View style={styles.likeContainer}>
          <Text style={{ fontSize: 50, color: "green", fontWeight: "bold" }}>
            YUM
          </Text>
        </View>
      )}
      {willDislike && (
        <View style={styles.dislikeContainer}>
          <Text
            style={{
              fontSize: 30,
              color: "red",
              fontWeight: "bold",
            }}
          >
            MAYBE LATER
          </Text>
        </View>
      )}
      <View style={styles.text}>
        <View style={styles.rowText}>
          <Text style={[styles.name, styles.textShadows]}>
            {restaurant.name}
          </Text>
          <View style={styles.distanceContainer}>
            <FontAwesome
              name="map-marker"
              style={[styles.marker, styles.textShadows]}
            ></FontAwesome>
            <Text style={[styles.distance, styles.textShadows]}>
              {Math.round(restaurant.distance / 1000) + "mi"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const boxContainerStyle = {
  position: "absolute",
  top: "50%",
  paddingTop: 35,
  paddingBottom: 35,
  paddingLeft: 50,
  paddingRight: 50,
  borderWidth: 5,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    resizeMode: "cover",
    paddingLeft: 10,
    borderRadius: 25,
  },
  text: {
    position: "absolute",
    bottom: 15,
    left: 15,
  },
  rowText: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  distanceContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 5,
  },
  distance: {
    color: "black",
    fontWeight: "bold",
    fontSize: 26,
  },
  marker: {
    fontSize: 30,
    color: "black",
    paddingRight: 5,
  },
  textShadows: {
    textShadowColor: "white",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  likeContainer: {
    ...boxContainerStyle,
    left: 50,
    borderColor: "green",
  },
  dislikeContainer: {
    ...boxContainerStyle,
    right: 50,
    borderColor: "red",
  },
});
