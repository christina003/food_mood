import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

export default function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logoNew = require("./logoNew.jpg");
  const icons = require("./icons.jpg");

  const validate = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    reg.test(email)
      ? handleLogin()
      : Alert.alert("Invalid Email", "Please Enter Valid Email");
  };

  return (
    <View style={styles.container}>
      <Image source={logoNew} style={styles.image}></Image>
      <StatusBar style="auto" />
      <View style={{ paddingLeft: 9 }}>
        <Image source={icons} style={styles.icons}></Image>
      </View>
      <View style={styles.inputEmail}>
        <TextInput
          style={styles.texts}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputPassword}>
        <TextInput
          style={styles.texts}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="black"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.login}
        onPress={() => {
          validate(email);
        }}
      >
        <Text style={styles.loginButtonText}>L O G I N</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 20,
    marginTop: 40,
  },
  inputEmail: {
    backgroundColor: "#fdc000",
    borderRadius: 30,
    width: "80%",
    height: 40,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  inputPassword: {
    backgroundColor: "#fdc000",
    borderRadius: 30,
    width: "80%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  texts: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  loginButtonText: {
    height: 20,
    fontWeight: "bold",
  },
  login: {
    width: "60%",
    borderRadius: 25,
    height: 40,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5f9d",
  },
  signUp: {
    width: "60%",
    borderRadius: 25,
    height: 40,
    marginTop: 80,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbfbfb",
  },
  buttonText: {
    height: 20,
    fontWeight: "bold",
  },
  icons: {
    height: 105,
    width: 400,
    marginBottom: 15,
  },
});
