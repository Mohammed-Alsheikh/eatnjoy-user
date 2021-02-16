import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Title, TextInput} from 'react-native-paper';
import Colors, {width} from '../../styles';
import {connect} from 'react-redux';
import {setUser, addToCart} from '../../../redux/actions';
import {addCartItem, submitOrder} from './actions';
import reactotron from 'reactotron-react-native';

const Form = ({
  nextStep,
  setUser,
  cart,
  price,
  validate,
  addressInfo,
  location,
  ClearCart,
}) => {
  const submit = async () => {
    // setUser({name, phone, email, address});
    if (!validate()) {
      return;
    }

    let promises = [];
    for (let i = 0; i < cart.length; i++) {
      const {meal, notes, quantity} = cart[i];
      promises.push(
        addCartItem({
          meal,
          notes,
          quantity,
        }),
      );
    }

    const cartItems = await Promise.all(promises);
    await submitOrder({cartItems, price, location, addressInfo});
    ClearCart();
    nextStep();
    return;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginVertical: 8,
          backgroundColor: Colors.primary,
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 6,
        }}
        onPress={submit}>
        <Title style={{fontSize: 20, color: 'white', lineHeight: 22}}>
          {'Submit Order'}
        </Title>
      </TouchableOpacity>
    </View>
  );
};

const WIDTH = width - 24;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: WIDTH,
    marginHorizontal: 12,
    borderRadius: 8,
    margin: 12,
  },
});

export default connect(
  null,
  dispatch => ({
    setUser: user => setUser(dispatch, user),
  }),
)(Form);
