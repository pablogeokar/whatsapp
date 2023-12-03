import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';


export type RootStackParamList = {
    Chats: undefined
    Chat: { id: string, name: string }

};

const Stack = createNativeStackNavigator<RootStackParamList>()


const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Chats'>
                <Stack.Screen name='Chats' component={ChatsScreen} />
                <Stack.Screen name='Chat' component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;