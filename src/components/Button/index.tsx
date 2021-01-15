import React from "react";

import styles from "./styles";
import { TouchableOpacity, Text } from "react-native";
const Button = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={[styles.buttonText, props.textStyle]}>
        {props.children}
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
