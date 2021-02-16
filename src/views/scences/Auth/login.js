import React, {useState, useEffect} from 'react';
import {Parse} from 'parse/react-native';
import {ImageBackground, Image, TouchableOpacity, View} from 'react-native';
import {Button, TextInput, Text, Caption, Title} from 'react-native-paper';
import {width, height} from '../../styles';
import {SwitchActions} from 'react-navigation';
import reactotron from 'reactotron-react-native';
import {ROUTS} from '../../../constants';
import {connect} from 'react-redux';
import {setUser} from '../../../redux/actions';
import {Snack, Activity} from '../../lib';
import {useSnack} from '../../hooks';
import Colors from '../../styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const timeout = s => {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
};

const REGISTER = require('../../assets/img/register.jpg');
const LOGO = require('../../assets/logo/LOGO.png');

export default connect(
  state => ({user: state.app.user}),
  {setUser},
)(({navigation, setUser, user}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const SnackHook = useSnack();

  useEffect(() => {
    timeout(2).then(() => {
      if (user) {
        navigation.dispatch(SwitchActions.jumpTo({routeName: 'App'}));
      } else {
        setLoading(false);
      }
    });
  }, [user, navigation]);

  if (loading) {
    return <Activity logo />;
  }

  const Login = () => {
    Parse.User.logIn(phone, password)
      .then(user => {
        setUser(user);
        navigation.dispatch(SwitchActions.jumpTo({routeName: 'App'}));
      })
      .catch(error => {
        SnackHook.onShow();
        SnackHook.setMessage(error.message);
      });
  };

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
          style={{width: 350, height: 350, alignSelf: 'center'}}
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

        <Button onPress={Login}>{'Login'}</Button>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Caption>{"Don't Have an account?"}</Caption>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTS.register)}>
            <Text style={{color: Colors.primary}}>{'  Sign Up'}</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => navigation.navigate(ROUTS.Forgot)}>
        <Text>Forgot Password</Text>
      </TouchableOpacity> */}
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 12}}
          onPress={() =>
            navigation.dispatch(SwitchActions.jumpTo({routeName: 'App'}))
          }>
          <Title style={{color: Colors.primary}}>{'Skip to menu'}</Title>
        </TouchableOpacity>

        <Snack {...SnackHook}>{SnackHook.message}</Snack>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
});
