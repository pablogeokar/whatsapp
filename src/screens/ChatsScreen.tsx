import React from "react";
import { FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";

// import { Container } from './styles';

const ChatScreen: React.FC = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} key={item.id} />}
    />
  );
};

export default ChatScreen;
