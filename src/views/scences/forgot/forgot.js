import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Title, Paragraph, TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackActions} from 'react-navigation';
import {ROUTS} from '../../../constants/index';

const BACK = require('../../assets/img/home.jpg');

export default ({navigation}) => {
  const _loginHandler = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTS.login,
        params: {},
      }),
    );
  };
  const _verifyHandler2 = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTS.Verify,
        params: {},
      }),
    );
  };
  return (
    <View>
      <ImageBackground source={BACK} style={styles.background}>
        <TouchableOpacity onPress={_loginHandler}>
          <Icon name="arrow-back" style={styles.icon} />
        </TouchableOpacity>
        <Title style={styles.title}>Forgot Password</Title>
        <Paragraph style={styles.paragraph}>
          Introducing Yoinia, with more than 6 thousand receips and amazing
          rateb w kza w allah 7yo Introducing Yoinia, with more than
        </Paragraph>
        <TextInput mode="flat" placeholder="Email" style={styles.textInput} />
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={_verifyHandler2}>
          <Button mode="contained" style={styles.button}>
            <Text style={styles.textButton}>Change Password</Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.textResend}>Resend Email</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: null,
    height: 800,
  },
  icon: {
    fontSize: 34,
    color: '#fff',
    margin: 16,
  },
  title: {
    fontSize: 30,
    color: '#3E4D59',
    alignSelf: 'center',
    marginTop: 30,
  },
  paragraph: {
    fontSize: 20,
    color: '#fff',
    margin: 18,
    padding: 18,
    lineHeight: 30,
  },
  textInput: {
    width: 360,
    height: 60,
    margin: 12,
    backgroundColor: 'transparent',
  },
  textButton: {
    fontSize: 20,
    marginTop: 22,
  },
  button: {
    width: 360,
    height: 60,
    backgroundColor: '#690D12',
    borderRadius: 40,
    marginTop: 18,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textResend: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 36,
  },
});
