import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import style4 from './style4'
import searchData from '../../../assets/feed/searchData'
import Icon from 'react-native-vector-icons/Entypo';

const DestinationSearch = () => {
    const [inputText, setInputText] = useState("")
  

  return (
    <View style={style4.container}>
     {/* input type component */}
     <TextInput style={style4.inputText}
     placeholder="where are you going"
     value={inputText}
     onChangeText={(text)=>setInputText(text)}
     />

     {/* list of destination */}
     <FlatList
     data={searchData}
     renderItem={({item})=>
    <View style={style4.row}>
        <View style={style4.iconContainer}>
        <Icon name="location-pin" size={35}  />
        </View>

        <Text style={style4.locationText}>{item.description}</Text>

    </View>
    }
     />
    </View>
  )
}

export default DestinationSearch

