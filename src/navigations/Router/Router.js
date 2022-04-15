import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationSearch from '../../screens/Destinationsearch';
import HomeScreen from '../../components/Home';
import GuestScreen from '../../screens/GuestScreen';
import HomeTabNavigator from './HomeTabNavigator';


const Router = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeTabNavigator' >
      <Stack.Screen name="HomeTabNavigator" options={{headerShown:false}} component={HomeTabNavigator} />
      <Stack.Screen name="Destination Search" options={{title:"Search your destination"}} component={DestinationSearch} />
      <Stack.Screen name="Guests" options={{title:"How many people"}} component={GuestScreen} />
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Router

