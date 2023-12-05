import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ChatScreen from '../screens/ChatScreen';
import MainTabNavigator from './MainTabNavigator';
import ContactsScreen from '../screens/ContactsScreens';


export type RootStackParamList = {
    Home: undefined
    Chat: { id: string, name: string }
    Contacts: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()


const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "whitesmoke" } }}>
                <Stack.Screen name='Home' component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name='Chat' component={ChatScreen} />
                <Stack.Screen name='Contacts' component={ContactsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;