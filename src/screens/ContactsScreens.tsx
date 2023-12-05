import React from 'react';
import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json'

import ContactListItem from '../components/ContactListItem';

// import { Container } from './styles';

const ContactsScreen: React.FC = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => <ContactListItem user={item.user} />}
            style={{ backgroundColor: 'white' }}
        />
    )
}

export default ContactsScreen;