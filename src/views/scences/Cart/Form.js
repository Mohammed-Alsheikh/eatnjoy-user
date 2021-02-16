import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Title, TextInput} from 'react-native-paper';
import Colors, {width} from '../../styles';
import {connect} from 'react-redux';
import {setUser, addToCart} from '../../../redux/actions';
import {addCartItem, submitOrder} from './actions';
import reactotron from 'reactotron-react-native';

const Form = ({nextStep, setUser, cart, price}) => {
  const [name, setName] = useState('Joe Norman');
  const [phone, setPhone] = useState('445566781');
  const [email, setEmail] = useState('myemail@gmail.com');
  const [address, setAddress] = useState('168 Street, Before the Corner');

  const submit = async () => {
    setUser({name, phone, email, address});

    let promises = [];
    for (let i = 0; i < cart.length; i++) {
      const {meal, notes, quantity} = cart[i];
      promises.push(
        addCartItem({
          meal,
          notes,
          quantity,
        }),
      );
    }

    const cartItems = await Promise.all(promises);
    await submitOrder({cartItems, price});
    return;
    nextStep();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Your name"
        style={{margin: 12, backgroundColor: 'trasperent'}}
        value={name}
        onChangeText={val => setName(val)}
      />
      <TextInput
        label="Phone number"
        style={{margin: 12, backgroundColor: 'trasperent'}}
        value={phone}
        onChangeText={val => setPhone(val)}
      />
      <TextInput
        label="Email"
        style={{margin: 12, backgroundColor: 'trasperent'}}
        value={email}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        label="Address"
        style={{margin: 12, backgroundColor: 'trasperent'}}
        value={address}
        onChangeText={val => setAddress(val)}
      />
      <TouchableOpacity
        style={{alignSelf: 'center', marginVertical: 8}}
        onPress={submit}>
        <Title style={{fontSize: 18, color: Colors.primary, lineHeight: 18}}>
          NEXT
        </Title>
      </TouchableOpacity>
    </View>
  );
};

const WIDTH = width - 24;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: WIDTH,
    marginHorizontal: 12,
    borderRadius: 8,
    padding: 12,
    margin: 12,
  },
});

export default connect(
  null,
  dispatch => ({
    setUser: user => setUser(dispatch, user),
  }),
)(Form);
