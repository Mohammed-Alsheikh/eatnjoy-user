import React, {Fragment} from 'react';
import {View} from 'react-native';
import Delivery from './delivery';
import Header from './header';

export default ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <Delivery />
    </View>
  );
};
