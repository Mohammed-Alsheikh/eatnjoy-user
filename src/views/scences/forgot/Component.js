import React, {Fragment} from 'react';
import {View} from 'react-native';
import Forgot from './forgot';

export default ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Forgot navigation={navigation} />
    </View>
  );
};
