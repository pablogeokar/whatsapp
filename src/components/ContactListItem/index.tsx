import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type ChatProps = {
  user: {
    image: string;
    name: string;
    status?: string
  };
};

const ContactListItem: React.FC<ChatProps> = ({ user }: ChatProps) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => { }} style={styles.container}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
        </Text>
      </View>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: 'center'
  },
  name: {
    fontWeight: "bold",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  subTitle: {
    color: 'gray'
  }
});

export default ContactListItem;
