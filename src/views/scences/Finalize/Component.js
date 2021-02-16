/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useState} from 'react';
import {Content} from 'native-base';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Text, Title, Paragraph, Button} from 'react-native-paper';
import {StackActions} from 'react-navigation';
import Colors, {width, height} from '../../styles';
import Steps from './Steps';
import reactotron from 'reactotron-react-native';
import {ROUTS} from '../../../constants';

const BACK_GROUND = require('../../assets/img/home.jpg');
const SUC = require('../../assets/img/suc.png');

export default ({navigation}) => {
  return (
    <ImageBackground
      source={BACK_GROUND}
      resizeMethod="resize"
      resizeMode="cover"
      style={{width, height, flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Steps active={3} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={SUC}
            resizeMode="contain"
            resizeMethod="resize"
            style={{width: 200, height: 200, marginBottom: 24}}
          />
          <Title style={{fontSize: 24, color: '#666'}}>
            {'Order Submited!'}
          </Title>
        </View>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: 24,
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'stretch',
              backgroundColor: Colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              padding: 5,
            }}
            onPress={() => navigation.navigate(ROUTS.Home)}>
            <Title style={{color: '#fff'}}>{'Ok!'}</Title>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
