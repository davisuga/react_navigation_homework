import React, { useState } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";

const SignIn = ({ navigation, onSignIn }: any) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        placeholder="email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        value={password}
        onChangeText={(text) => setpassword(text)}
      />
      <Button onPress={() => onSignIn()}>SIGN IN</Button>
      <Text style={styles.text}>OR</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("Sign Up")}
      />
      <Button
        title="Go to Password Forget"
        onPress={() => navigation.navigate("Password Forget")}
      />
    </View>
  );
};
export default SignIn;
