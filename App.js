import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/components/Home';
import Post from './src/components/Post';
import Data from './assets/feed/feed'
import SearchResult from './src/screens/searchResults';
import DestinationSearch from './src/screens/Destinationsearch';
import GuestScreen from './src/screens/GuestScreen';
import Router from './src/navigations/Router/Router';



const App = () => {



  return (
<Router/>
  )
}

export default App

