import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { http2 } from '../../services/api';


const ProductInfo = ({ onPress,img, title, mr, id,  ml, description }) => {

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.box1, mr && { marginRight: mr }, ml && { marginLeft: ml }]}>
          <Image source={img ? { uri: http2 + img } : images.no_image} style={styles.img1}></Image>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={2} style={styles.text3}>{description}</Text>
    </TouchableOpacity>
  );
};


export default ProductInfo

const styles = StyleSheet.create({
  box1: {
    borderWidth: 1,
    alignItems: 'center',
    borderColor: COLORS.gray20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: SIZES.width * 0.44,
    alignSelf: 'center',
    // marginRight: SIZES.width * 0.03,
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: SIZES.height * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.height * 0.01,
  },
  
 
  img2: {
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.06,
    resizeMode: 'contain',
  },
  
  title: {
    width: SIZES.width * 0.4,
    height: SIZES.height * .045,
    fontSize: SIZES.width * 0.035,
    color: COLORS.black,
    ...FONTS.sixHundred,
    marginBottom: 5,
  }, 
  text3: {
    width: SIZES.width * 0.4,
    height: SIZES.height * .045,
    fontSize: SIZES.width * 0.03,
    color: COLORS.black,
    ...FONTS.fiveHundred,
    marginBottom: 7,
  },
  
 
});
