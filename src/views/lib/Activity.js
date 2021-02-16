import React from 'react';
import {ImageBackground, Image} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Colors from '../styles';

const BACKG = require('../assets/img/home.jpg');
const LOGO = require('../assets/logo/LOGO.png');

export default ({logo}) => {
  return (
    <ImageBackground
      source={BACKG}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {logo ? (
        <Image
          source={LOGO}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 250, height: 250}}
        />
      ) : (
        <ActivityIndicator
          animating={true}
          color={Colors.primary}
          size="large"
        />
)}
    </ImageBackground>
  );
};
