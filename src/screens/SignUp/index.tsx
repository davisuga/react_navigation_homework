import React, { useState } from "react";
import styles from "./styles";
import { View, Text, TextInput } from "react-native";
import Button from "../../components/Button";

const SignIn = ({ navigation, onSignUp }: any) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="sign up" onPress={() => onSignUp()} />
    </View>
  );
};
export default SignIn;
