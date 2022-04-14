import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Data from '../../../assets/feed/feed'
import Post from '../../components/Post/index'


const SearchResult = () => {
  return (
    <View>
     <FlatList
     data={Data}
     renderItem={({item})=><Post post={item}/>}
     />
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({})