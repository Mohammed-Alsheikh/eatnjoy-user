import React, {Fragment, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  Title,
  Paragraph,
  Button,
  Text,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CodeInput from 'react-native-confirmation-code-field';

const BACKG = require('../../assets/img/home.jpg');


export default ({navigation}) => {
  return (
    <View>
      <ImageBackground source={BACKG} style={styles.background}>
        <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back" style={styles.icon} />
        </TouchableOpacity>
        <Title style={styles.title}>Verify your Mobile</Title>
        <Paragraph style={styles.paragraph}>
          Introducing Yoinia,thousand receips 963949029598 your number ?
        </Paragraph>
        <View style={styles.codeInput}>
          <CodeInput
            size={44}
            codeLength={6}
            codeInputStyle={{borderWidth: 0, backgroundColor: '#000'}}
            containerStyle={{marginTop: 300}}
            // inactiveColor='rgba(49, 180, 4, 1.3)'
            activeColor="#455157"
          />
          <Text style={styles.textdigit}>Enter 6-digit code</Text>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <Button mode="contained" style={styles.button}>
            <Text style={styles.textButton}> Verify </Text>
          </Button>
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
    color: '#fff',
    fontSize: 34,
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
  codeInput: {
    padding: 44,
    marginBottom: 44,
  },
  textdigit: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
    margin: 12,
  },
  textButton: {
    fontSize: 20,
    marginTop: 22,
    color: '#fff',
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
});
