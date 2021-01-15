import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
const Home = ({ navigation, route }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello </Text>
    </View>
  );
};
export default Home;
