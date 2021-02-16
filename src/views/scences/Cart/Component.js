/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useState, useEffect} from 'react';
import {Content} from 'native-base';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {Text, Title, Paragraph, Button} from 'react-native-paper';
import Colors, {width, height} from '../../styles';
import Steps from './Steps';
import Card from './Card';
import Payroll from './Payroll';
import reactotron from 'reactotron-react-native';
import {ROUTS} from '../../../constants';

const SUC = require('../../assets/img/suc.png');
const BACK_GROUND = require('../../assets/img/home.jpg');

const List = ({items, lang}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item, index}) => (
        <Card lang={lang} key={index} id={index} {...item} />
      )}
    />
  );
};

export default ({navigation, cart, lang, user}) => {
  const [step, setStep] = useState(1);

  const totalPrice = cart.value.reduce(
    (total, item) => total + item.quantity * item.meal.get('price'),
    0,
  );

  return (
    <ImageBackground
      source={BACK_GROUND}
      resizeMethod="resize"
      resizeMode="cover"
      style={{width, height, flex: 1, paddingVertical: 22}}>
      <SafeAreaView style={{flex: 1}}>
        {cart?.value?.length ? (
          <React.Fragment>
            <Steps
              active={step}
              goBack={() => navigation.navigate(ROUTS.Home)}
            />
            <List lang={lang} items={cart.value} />
            <Payroll
              total={totalPrice}
              nextStep={() => navigation.push(ROUTS.Shipping)}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Steps
              active={step}
              goBack={() => navigation.navigate(ROUTS.Home)}
            />
            <View
              style={{
                flex: 0.8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/logo/LOGO.png')}
                style={{width: 200, height: 200, marginBottom: 24}}
              />
              <Title style={{color: Colors.primary}}>
                {'Your cart is empty'}
              </Title>
              <Paragraph style={{color: Colors.primary + 'dd'}}>
                {'Add items from the menu to place your order.'}
              </Paragraph>
            </View>
          </React.Fragment>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
