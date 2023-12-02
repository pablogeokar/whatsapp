import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

// import { Container } from './styles';

const InputBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />

      {/* Text Input */}
      <TextInput placeholder="type your message" style={styles.input} />

      <MaterialIcons name="send" size={24} color="white" style={styles.send} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
  },
  send: {},
});

export default InputBox;
