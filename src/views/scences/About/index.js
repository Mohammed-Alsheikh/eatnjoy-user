import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {Appbar, Title, Text} from 'react-native-paper';
import Colors from '../../styles';
import {useSelector} from 'react-redux';

import strings from '../../../localization';

const BACKG = require('../../assets/img/home.jpg');

export default ({navigation}) => {
  const lang = useSelector(state => state.lang);

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{zIndex: 12}}>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title={strings.About} />
      </Appbar.Header>
      <ImageBackground
        source={BACKG}
        resizeMethod="resize"
        resizeMode="cover"
        style={{flex: 1}}>
        <Image
          source={require('../../assets/logo/LOGO.png')}
          style={{marginTop: 32, alignSelf: 'center', width: 280, height: 280}}
        />
        <Title style={{color: 'white', alignSelf: 'center', fontSize: 22}}>
          {strings.AboutUs}
        </Title>
        <View style={{alignSelf: 'center', margin: 24}}>
          <Text style={{lineHeight: 22}}>{strings.OurStory}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
