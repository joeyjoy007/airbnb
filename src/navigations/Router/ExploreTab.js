import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../components/Home';
import Post from '../../components/Post';

const ExploreTab = () => {
    const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator  >
      <Stack.Screen name="Home screen" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Post Screen" options={{title:"Search your destination"}} component={Post} />
   
    </Stack.Navigator>
  )
}

export default ExploreTab

