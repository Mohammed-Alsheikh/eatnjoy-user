import React from 'react';
import {ImageBackground, View, SafeAreaView} from 'react-native';
import Steps from './Step';
import Form from './Form';
import Colors, {width, height} from '../../styles';
import {Button} from 'react-native-paper';
import {ROUTS} from '../../../constants';
import {Snack} from '../../lib';
import {useSnack} from '../../hooks';
import {SwitchActions} from 'react-navigation';
import reactotron from 'reactotron-react-native';

const BACK_GROUND = require('../../assets/img/home.jpg');

export default ({cart, navigation, addressInfo, location, ClearCart}) => {
  const totalPrice = cart.value.reduce(
    (total, item) => total + item.quantity * item.meal.get('price'),
    0,
  );

  const SnackHook = useSnack();

  const validate = () => {
    reactotron.log(addressInfo, location);
    if (!addressInfo || !location) {
      SnackHook.onShow();
      SnackHook.setMessage('Please set your location info!');
      return false;
    } else {
      return true;
    }
  };

  return (
    <ImageBackground
      source={BACK_GROUND}
      resizeMethod="resize"
      resizeMode="cover"
      style={{width, height, flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Steps active={2} goBack={() => navigation.pop()} />
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Button
            onPress={() => {
              navigation.push(ROUTS.MapSelect, {
                cart: true,
                from: ROUTS.Shipping,
              });
            }}
            icon="bookmark"
            mode="contained"
            color={Colors.primary}
            style={{margin: 32, marginTop: 42}}>
            {'Change My Address'}
          </Button>
          <Form
            nextStep={() => {
              navigation.navigate(ROUTS.Finalize);
            }}
            validate={validate}
            addressInfo={addressInfo}
            location={location}
            ClearCart={ClearCart}
            price={totalPrice}
            cart={cart.value}
          />
        </View>
        <Snack {...SnackHook}>{SnackHook.message}</Snack>
      </SafeAreaView>
    </ImageBackground>
  );
};
