import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/components/Home';
import Post from './src/components/Post';
import Data from './assets/feed/feed'
import SearchResult from './src/screens/searchResults';


const App = () => {

  const post = Data[0]

  return (
    <View>
     
      {/* <Icon name="home" size={30} color="#900" /> */}
      {/* <HomeScreen/> */}
      {/* <Post post={post}/> */}
      {<SearchResult/>}
      
    </View>
  )
}

export default App

