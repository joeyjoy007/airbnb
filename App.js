import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/components/Home';
import Post from './src/components/Post';


const App = () => {
  return (
    <View>
     
      {/* <Icon name="home" size={30} color="#900" /> */}
      {/* <HomeScreen/> */}
      <Post/>
      
    </View>
  )
}

export default App

