import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Title,
  Paragraph,
  TextInput,
  Button,
  RadioButton,
} from 'react-native-paper';
import {Content} from 'native-base';
import {useTextInput} from '../../hooks';

const BACK = require('../../assets/img/home.jpg');

export default ({}) => {
  const phone = useTextInput('');
  const address = useTextInput('');
  const zone = useTextInput('');
  const street = useTextInput('');
  const house = useTextInput('');
  const office = useTextInput('');
  const floor = useTextInput('');
  const instruction = useTextInput('');

  return (
    <Content>
      <ImageBackground source={BACK} style={styles.background}>
        <View>
          <TextInput
            {...phone}
            mode="flat"
            placeholder="Phone Number"
            style={styles.textInput}
          />
          <TextInput
            {...address}
            mode="flat"
            placeholder="Address Name"
            style={styles.textInput}
          />
          <TextInput
            {...zone}
            mode="flat"
            placeholder="Please Enter Zone (Optional)"
            style={styles.textInput}
          />
          <TextInput
            {...street}
            mode="flat"
            placeholder="Please Enter Street"
            style={styles.textInput}
          />
          <TextInput
            {...house}
            mode="flat"
            placeholder="House"
            style={styles.textInput}
          />
          <TextInput
            {...office}
            mode="flat"
            placeholder="Apartment/Office Name"
            style={styles.textInput}
          />
          <TextInput
            {...floor}
            mode="flat"
            placeholder="Floor (Optional)"
            style={styles.textInput}
          />
          <TextInput
            {...instruction}
            mode="flat"
            placeholder="Delivery Instruction (Optional)"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Button
            mode="outlined"
            backgroundColor="#690D12"
            style={styles.button}>
            <Text style={styles.text}>Save Addresses</Text>
          </Button>
        </TouchableOpacity>
      </ImageBackground>
    </Content>
  );
};

const styles = StyleSheet.create({
  background: {
    width: null,
    height: 800,
  },
  container: {},
  textInput: {
    width: 360,
    height: 60,
    margin: 12,
    backgroundColor: 'transparent',
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#690D12',
    alignSelf: 'center',
    borderRadius: 18,
    marginTop: 12,
  },
  text: {
    fontSize: 18,
  },
});
