import React, {Fragment} from 'react';
import {View} from 'react-native';
import Verify from './verify';

export default ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Verify navigation={navigation} />
    </View>
  );
};
