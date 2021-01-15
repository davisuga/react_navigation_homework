import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import styles from "./styles";

const LandingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Forget Screen</Text>
    </View>
  );
};
export default LandingScreen;
