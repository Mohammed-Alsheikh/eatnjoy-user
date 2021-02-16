import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {Title} from 'react-native-paper';
import strings from '../../localization';

import Colors from '../styles';

const DISH = require('../assets/img/dishWhite.png');
const PLATE = require('../assets/img/plateWhite.png');

const HeaderFooter = ({navigateToMenu, navigateToMeal}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...styles.button,
          borderRightWidth: 2,
          borderColor: 'white',
          marginVertical: 12,
        }}
        onPress={navigateToMenu}>
        <Image
          source={PLATE}
          resizeMode="cover"
          resizeMethod="resize"
          style={{width: 32, height: 32, marginHorizontal: 16}}
        />
        <Title style={{color: '#fff'}}>{strings.Menu}</Title>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={navigateToMeal}>
        <Title style={{color: '#fff'}}>{strings.DailyMeal}</Title>
        <Image
          source={DISH}
          resizeMode="cover"
          resizeMethod="resize"
          style={{width: 32, height: 32, marginHorizontal: 16}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: null,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderFooter;
