import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import style4 from './style4'
import searchData from '../../../assets/feed/searchData'
import Icon from 'react-native-vector-icons/Entypo';
import GooglePlacesAutocomplete from 'react-native-google-places-autocomplete'

const DestinationSearch = ({navigation}) => {
    const [inputText, setInputText] = useState("")
  

  return (
    <View style={style4.container}>
     {/* input type component */}


     {/* <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    /> */}

     <TextInput style={style4.inputText}
     placeholder="where are you going"
     value={inputText}
     onChangeText={(text)=>setInputText(text)}
     />

     {/* list of destination */}
     <FlatList
     data={searchData}
     renderItem={({item})=>
    <Pressable onPress={()=>navigation.navigate('Guests')} style={style4.row}>
        <View style={style4.iconContainer}>
        <Icon name="location-pin" size={35}  />
        </View>

        <Text style={style4.locationText}>{item.description}</Text>

    </Pressable>
    }
     />
    </View>
  )
}

export default DestinationSearch

