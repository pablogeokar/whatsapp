import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, FlatList } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native'
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";


const ChatScreen: React.FC = () => {
  const route = useRoute<any>()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [route.params.name])

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.bg}
    // >
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message key={item.id} message={item} />}
        style={styles.list}
        inverted
      />
      <InputBox />
    </ImageBackground>
    //</KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
