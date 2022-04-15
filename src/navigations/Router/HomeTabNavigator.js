import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../components/Home/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DestinationSearch from '../../screens/Destinationsearch';
import Post from '../../components/Post/index';
import GuestScreen from '../../screens/GuestScreen';



const HomeTabNavigator = () => {


const Tab = createBottomTabNavigator();

  return (
  
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:"#f15454"
    }}>

      <Tab.Screen name="Explore" component={HomeScreen} options={{
        tabBarIcon:({color})=>{
         return <AntDesign name="search1" size={23} color={color} />
        }

      }} />
      <Tab.Screen name="Saved" component={DestinationSearch} options={{
        tabBarIcon:({color})=>{
         return <Icon name="heart-o" size={23} color={color} />
        }

      }} />
      <Tab.Screen name="AirBnb" component={Post} options={{
        tabBarIcon:({color})=>{
         return <FontAwesome5 name="airbnb" size={23} color={color} />
        }

      }} />
      <Tab.Screen name="Messages" component={GuestScreen} options={{
        tabBarIcon:({color})=>{
         return <Feather name="message-square" size={23} color={color} />
        }

      }} />
      <Tab.Screen name="Profile" component={HomeScreen} options={{
        tabBarIcon:({color})=>{
         return <EvilIcon name="user" size={35} color={color} />
        }

      }} />
   
    </Tab.Navigator>

  )
}

export default HomeTabNavigator

