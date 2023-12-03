import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

// import { Container } from './styles';

const InputBox: React.FC = () => {

  const [newMessage, setNewMessage] = useState('')

  const onSend = () => {
    console.warn('Sending a new message:', newMessage)
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />

      {/* Text Input */}
      <TextInput value={newMessage} onChangeText={setNewMessage} placeholder="type your message" style={styles.input} multiline />

      <MaterialIcons onPress={onSend} name="send" size={20} color="white" style={styles.send} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,

  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default InputBox;
