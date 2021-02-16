import React, {useState} from 'react';
import {Parse} from 'parse/react-native';
import {Content} from 'native-base';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Button, TextInput, Caption, Text} from 'react-native-paper';
import Colors, {width, height} from '../../styles';
import {Snack} from '../../lib';
import {useSnack} from '../../hooks';
import {StackActions} from 'react-navigation';
import reactotron from 'reactotron-react-native';
import {SwitchActions} from 'react-navigation';
import {setUser} from '../../../redux/actions';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const REGISTER = require('../../assets/img/register.jpg');
const LOGO = require('../../assets/logo/LOGO.png');
const FACEBOOK = require('../../assets/logo/facebook.png');
const INSTAGRAM = require('../../assets/logo/instagram.png');

export default connect(
  null,
  {setUser},
)(({navigation, setUser}) => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const SnackHook = useSnack();

  const _loginHandler = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: 'login',
        params: {},
      }),
    );
  };

  const Register = () => {
    const user = new Parse.User();
    user.set('username', phone);
    user.set('firstName', firstName);
    user.set('surName', secondName);
    user.set('email', email);
    user.set('password', password);

    user
      .signUp()
      .then(user => {
        setUser(user);
        navigation.dispatch(SwitchActions.jumpTo({routeName: 'App'}));
      })
      .catch(error => {
        SnackHook.onShow();
        SnackHook.setMessage(error.message);
      });
  };

  const _handleFBPress = () => Linking.openURL('http://facebook.com');
  const _handleInstaPress = () => Linking.openURL('http://instagram.com');

  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={REGISTER}
        style={{width, height, paddingTop: 32}}
        resizeMode="cover"
        resizeMethod="resize">
        <Image
          source={LOGO}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 200, height: 200, alignSelf: 'center'}}
        />

        <Content>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              label="First name"
              style={{flex: 1, margin: 12, backgroundColor: 'trasperent'}}
              value={firstName}
              onChangeText={val => setFirstName(val)}
            />
            <TextInput
              label="Second name"
              style={{flex: 1, margin: 12, backgroundColor: 'trasperent'}}
              value={secondName}
              onChangeText={val => setSecondName(val)}
            />
          </View>

          <TextInput
            label="Email"
            style={{margin: 12, backgroundColor: 'trasperent'}}
            value={email}
            onChangeText={val => setEmail(val)}
          />

          <TextInput
            label="Phone"
            style={{margin: 12, backgroundColor: 'trasperent'}}
            value={phone}
            onChangeText={val => setPhone(val)}
          />

          <TextInput
            label="Password"
            style={{margin: 12, backgroundColor: 'trasperent'}}
            value={password}
            secureTextEntry
            onChangeText={val => setPassword(val)}
          />

          <Button onPress={Register}>{'Create Account'}</Button>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Caption>{'Or continue with'}</Caption>

          <View style={{flexDirection: 'row', marginVertical: 8}}>
            <TouchableOpacity onPress={_handleFBPress}>
              <Image
                source={FACEBOOK}
                style={{width: 32, height: 32, marginHorizontal: 6}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={_handleInstaPress}>
              <Image
                source={INSTAGRAM}
                style={{width: 32, height: 32, marginHorizontal: 6}}
              />
            </TouchableOpacity>
          </View> */}

            <View style={{flexDirection: 'row'}}>
              <Caption>{'Have an account?'}</Caption>
              <TouchableOpacity onPress={_loginHandler}>
                <Text style={{color: Colors.primary}}>{'  Sign In'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
        <Snack {...SnackHook}>{SnackHook.message}</Snack>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
});
