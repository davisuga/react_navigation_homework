import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
const LandingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing Page</Text>
      <Button onPress={() => navigation.navigate("Sign In")} title="Sign In!" />
    </View>
  );
};
export default LandingScreen;
