import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DialogInput from "react-native-dialog-input";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function Profile({
  handleLogout,
  handleLocationChange,
  location,
}) {
  const [showLocationDialog, setShowLocationDialog] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ACCOUNT SETTINGS</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailHeader}>Phone Number</Text>
        <View style={styles.details}>
          <Text style={styles.text}>19161123333</Text>
          <FontAwesome
            name="chevron-right"
            size={15}
            color="#c4c4c6"
          ></FontAwesome>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailHeader}>Email</Text>
        <View style={styles.details}>
          <Text style={styles.text}>test@gmail.com</Text>
          <FontAwesome
            name="chevron-right"
            size={15}
            color="#c4c4c6"
          ></FontAwesome>
        </View>
      </View>
      <Text style={styles.header}>GROUPS</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailHeader}>Group 1</Text>
        <View style={styles.details}>
          <Text style={styles.text}>Family</Text>
          <FontAwesome
            name="chevron-right"
            size={15}
            color="#c4c4c6"
          ></FontAwesome>
        </View>
      </View>
      <Text style={styles.header}>DISCOVERY</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailHeader}>Location</Text>
        <TouchableOpacity
          onPress={() => {
            setShowLocationDialog(true);
          }}
        >
          <DialogInput
            isDialogVisible={showLocationDialog}
            title={"Update Location"}
            message={"Please enter location: "}
            submitInput={(inputText) => {
              handleLocationChange(inputText);
              setShowLocationDialog(false);
            }}
            closeDialog={() => {
              setShowLocationDialog(false);
            }}
          ></DialogInput>
          <View style={styles.details}>
            <Text style={styles.text}>{location}</Text>
            <FontAwesome
              name="chevron-right"
              size={15}
              color="#c4c4c6"
            ></FontAwesome>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}></View>
      <TouchableOpacity onPress={handleLogout} style={styles.signOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f7",
    height: "100%",
  },
  header: {
    backgroundColor: "#f2f2f7",
    padding: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 15,
    backgroundColor: "#ffffff",
    height: 55,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f2f2f7",
  },
  detailHeader: {
    fontSize: 18,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    paddingRight: 10,
    color: "#7f7f7f",
  },
  signOut: {
    alignItems: "center",
    paddingTop: 20,
    height: 55,
    backgroundColor: "#ffffff",
  },
  signOutText: {
    fontSize: 17,
  },
});
