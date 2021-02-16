/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useState} from 'react';
import {Content} from 'native-base';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {Text, Title, Paragraph, Button} from 'react-native-paper';
import {StackActions} from 'react-navigation';
import Colors, {width, height} from '../../styles';
import Steps from './Steps';
import Card from './Card';
import Payroll from './Payroll';
import Form from './Form';
import Payment from './Payment';
import reactotron from 'reactotron-react-native';

const SUC = require('../../assets/img/suc.png');
const BACK_GROUND = require('../../assets/img/home.jpg');

const List = ({items}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item, index}) => <Card key={index} id={index} {...item} />}
    />
  );
};

export default ({navigation, cart}) => {
  const [step, setStep] = useState(1);

  const totalPrice = cart.value.reduce(
    (total, item) => total + item.quantity * item.meal.get('price'),
    0,
  );

  switch (step) {
    case 1:
      return (
        <ImageBackground
          source={BACK_GROUND}
          resizeMethod="resize"
          resizeMode="cover"
          style={{width, height, flex: 1}}>
          <Steps active={step} />
          <List items={cart.value} />
          <Payroll total={totalPrice} nextStep={() => setStep(2)} />
        </ImageBackground>
      );
    case 2:
      return (
        <ImageBackground
          source={BACK_GROUND}
          resizeMethod="resize"
          resizeMode="cover"
          style={{width, height, flex: 1}}>
          <Steps active={step} />
          <Form
            nextStep={() => setStep(3)}
            price={totalPrice}
            cart={cart.value}
          />
        </ImageBackground>
      );
    case 8:
      return (
        <ImageBackground
          source={BACK_GROUND}
          resizeMethod="resize"
          resizeMode="cover"
          style={{width, height, flex: 1}}>
          <Steps active={step} />
          <Payment nextStep={() => setStep(4)} />
        </ImageBackground>
      );
    case 3:
      return (
        <ImageBackground
          source={BACK_GROUND}
          resizeMethod="resize"
          resizeMode="cover"
          style={{width, height, flex: 1}}>
          <Steps active={step} />
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{fontSize: 24, color: Colors.primary}}>
              {'Order Submited!'}
            </Title>
            <Image
              source={SUC}
              resizeMode="contain"
              resizeMethod="resize"
              style={{width: 200, height: 200, marginTop: 24}}
            />
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
                width: 100,
                height: 40,
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
              }}
              onPress={() => navigation.dispatch(StackActions.popToTop())}>
              <Title style={{color: '#fff'}}>OK</Title>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    default:
      return null;
  }
};
