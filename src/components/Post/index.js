import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import style2 from './style2';
import {imageAddress} from '../../../assets/images/imageaddress/ImageAddress';
import post from '../../../assets/feed/feed'

const Post = () => {
  return (
    <View style={style2.container}>
      {/* image */}
      <Image style={style2.image} source={{uri: post.image}} />

      {/* bed abd bedroom */}
      <Text style={style2.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

      {/* description */}
      <Text style={style2.description} numberOfLines={2}>
        {post.description}
      </Text>

      {/* old and new price */}
      <Text style={style2.prices}>
      <Text style={style2.oldPrice}>${post.oldPrice} </Text>
      <Text style={style2.newPrice}> ${post.newPrice}</Text>
     / night
      </Text>
      

      {/* total price */}
      <Text style={style2.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
