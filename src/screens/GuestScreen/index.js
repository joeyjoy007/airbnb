import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import style5 from './style5';

const GuestScreen = ({navigation}) => {

  const [adults, setAdults] = useState(0)
  const [childrens, setChildrens] = useState(0)
  const [infants, setInfants] = useState(0)

  return (
    <View style={{height:"100%",justifyContent:"space-between"}}>
      <View>
      <View
        style={style5.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 of above</Text>
        </View>

        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Pressable
            onPress={() => setAdults(Math.max(0,adults-1))}
            style={style5.button}>
            <Text style={{fontSize:20,color:"#474747"}}>-</Text>
          </Pressable>
          <Text style={{paddingHorizontal:20,fontSize:16}}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults+1)}
            style={style5.button}>
            <Text style={{fontSize:20,color:"#474747"}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={style5.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Childrens</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
        </View>

        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Pressable
            onPress={() => setChildrens(Math.max(0,childrens-1))}
            style={style5.button}>
            <Text style={{fontSize:20,color:"#474747"}}>-</Text>
          </Pressable>
          <Text style={{paddingHorizontal:20,fontSize:16}}>{adults}</Text>
          <Pressable
            onPress={() => setChildrens(childrens+1)}
            style={style5.button}>
            <Text style={{fontSize:20,color:"#474747"}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={style5.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: '#8d8d8d'}}>Under 2</Text>
        </View>

        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Pressable
            onPress={() => setInfants(Math.max(0,infants-1))}
            style={style5.button}>
            <Text style={{fontSize:20,color:"#474747"}}>-</Text>
          </Pressable>
          <Text style={{paddingHorizontal:20,fontSize:16}}>{adults}</Text>
          <Pressable
            onPress={() => setInfants(infants+1)}
            style={style5.button}>
            <Text style={{fontSize:20,color:"#474747"}}>+</Text>
          </Pressable>
        </View>
      </View>
      </View>

      <View>
        <Pressable style={{
          marginBottom:20,
          backgroundColor:"#f15454",
          alignItems:"center",
          justifyContent:"center",
          height:50,
          marginHorizontal:20,
          borderRadius:10
        }}
        onPress={()=>navigation.navigate('HomeTabNavigator',{
          screen:"Explore",
          params:{
            screen:"Post Screen"
          }
        })}
        >
          <Text style={{fontSize:20,color:"white",fontWeight:"bold"}}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestScreen;
