import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Button, Appbar} from 'react-native-paper';

const BACKG = require('../../assets/img/home.jpg');

export default ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{zIndex: 12}}>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="My Notifications" />
      </Appbar.Header>
      <ImageBackground
        source={BACKG}
        resizeMethod="resize"
        resizeMode="cover"
        style={{flex: 1}}
      />
    </View>
  );
};
