/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {height} from '../styles';
import {DrawerActions} from 'react-navigation-drawer';
import {StackActions} from 'react-navigation';
import {Text} from 'react-native-paper';
import Colors from '../styles';

const BASKET = require('../assets/img/basket.png');
const LOGO = require('../assets/logo/LOGO.png');
const HEADER = require('../assets/img/header.jpg');
import {ROUTS} from '../../constants';
import {connect} from 'react-redux';

const Header = ({navigation, cart, back}) => {
  const navigateToCart = () => {
    navigation.push(ROUTS.CartStack);
  };

  return (
    <SafeAreaView>
      <Image
        source={HEADER}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.container}>
        <Image
          source={LOGO}
          resizeMode="cover"
          resizeMethod="resize"
          style={styles.Logo}
        />
        {back ? (
          <TouchableOpacity onPress={back} style={styles.menuButton}>
            <Icon name="chevron-left" style={{fontSize: 40, color: '#fff'}} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={styles.menuButton}>
            <Icon name="menu" style={{fontSize: 32, color: '#fff'}} />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={navigateToCart} style={styles.cartButton}>
          {cart.value.length ? (
            <View
              style={{
                backgroundColor: Colors.primary,
                padding: 4,
                borderRadius: 100,
                position: 'absolute',
                zIndex: 2,
                right: 0,
                top: 0,
              }}>
              <Text style={{color: '#fff'}}>{cart.value.length}</Text>
            </View>
          ) : null}
          <Image
            source={BASKET}
            resizeMode="cover"
            resizeMethod="resize"
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
      </Image>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 4,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  cartButton: {
    position: 'absolute',
    right: 18,
    top: 18,
  },
});

export default connect(state => ({cart: state.cart}))(Header);
