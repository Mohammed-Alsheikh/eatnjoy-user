import React, {useEffect} from 'react';
import {View} from 'react-native';
import Profile from './header';
import Form from './form';

export default ({navigation, user, setUser}) => {
  return (
    <View style={{flex: 1}}>
      <Profile user={user} />
      <Form user={user} setUser={setUser} navigation={navigation} />
    </View>
  );
};
