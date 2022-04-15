import {ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style1 from './style1';
import wallPaper from '../../../assets/images/wallpaper.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
 
  return (
    <View>
      <Pressable
        style={style1.searchButton}
        onPress={() => console.warn('explore button clicked')}>
        <Icon name="search" size={25} color="#f15454" />
        <Text style={style1.searchButtonText}>Where are you going ?</Text>
      </Pressable>
      
      <ImageBackground source={wallPaper} style={style1.image}>
        <Text style={style1.title}>Go Near</Text>

        <Pressable
          style={style1.button}
          onPress={() => console.warn('explore button clicked')}>
          <Text style={style1.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
