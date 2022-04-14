import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import style2 from './style2';
import {imageAddress} from '../../../assets/images/imageaddress/ImageAddress';

const Post = () => {
  return (
    <View style={style2.container}>
      {/* image */}
      <Image style={style2.image} source={{uri: imageAddress}} />

      {/* bed abd bedroom */}
      <Text style={style2.bedrooms}>1 bed 1 bedroom</Text>

      {/* description */}
      <Text style={style2.description} numberOfLines={2}>
        The definition of a description is a statement that gives details about
        someone or something. An example of description is a story about the
        places visited on a family trip. noun. 15.
      </Text>

      {/* old and new price */}
      <Text style={style2.prices}>
      <Text style={style2.oldPrice}>$36 </Text>
      <Text style={style2.newPrice}> $30</Text>
     / night
      </Text>
      

      {/* total price */}
      <Text style={style2.totalPrice}>$250 total</Text>
    </View>
  );
};

export default Post;
