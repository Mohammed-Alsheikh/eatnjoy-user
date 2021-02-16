import React from 'react';
import {ImageBackground, View} from 'react-native';
import {List, Appbar, Divider} from 'react-native-paper';
import Colors from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import strings from '../../../localization';

const BACKG = require('../../assets/img/home.jpg');

export default ({navigation}) => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.lang.value);

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{zIndex: 12}}>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title={strings.Language} />
      </Appbar.Header>
      <ImageBackground
        source={BACKG}
        resizeMethod="resize"
        resizeMode="cover"
        style={{flex: 1}}>
        <List.Item
          style={{backgroundColor: 'rgba(0,0,0,0.1)', marginVertical: 4}}
          title="English - انجليزي"
          titleStyle={{fontSize: 18, color: 'black', alignSelf: 'center'}}
          onPress={() => {
            strings.setLanguage('en');
            dispatch({type: 'SET_EN'});
          }}        />
        <List.Item
          style={{backgroundColor: 'rgba(0,0,0,0.1)', marginVertical: 4}}
          title="Arabic - عربي"
          titleStyle={{fontSize: 18, color: 'black', alignSelf: 'center'}}
          onPress={() => {
            strings.setLanguage('ar');
            dispatch({type: 'SET_AR'});
          }}
        />
      </ImageBackground>
    </View>
  );
};
