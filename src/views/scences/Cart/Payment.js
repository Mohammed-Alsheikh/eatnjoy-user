import React, {useState, Fragment} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Title, TextInput} from 'react-native-paper';
import Colors, {width} from '../../styles';

const SHIPPING = require('../../assets/img/shipping.png');
const COIN = require('../../assets/img/coin.png');

const Switch = ({state, setState}) => {
  return (
    <View style={styles.switch}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={state ? styles.button : styles.buttonActive}
        onPress={() => setState(false)}>
        <Text style={styles.tt}>{'Money Transfer'}</Text>
        <Image
          source={SHIPPING}
          resizeMethod="resize"
          resizeMode="contain"
          style={{width: 32, height: 32}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={!state ? styles.button : styles.buttonActive}
        onPress={() => setState(true)}>
        <Text style={styles.tt}>{'Pay at Pickup'}</Text>
        <Image
          source={COIN}
          resizeMethod="resize"
          resizeMode="contain"
          style={{width: 32, height: 32}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ({nextStep}) => {
  const [payment, setPayment] = useState(true);

  return (
    <Fragment>
      <Switch state={payment} setState={setPayment} />

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>{'Number:'}</Text>
          <Text style={styles.val}>{'2222 2222 22'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{'Name:'}</Text>
          <Text style={styles.val}>{'MyName'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{'Bank:'}</Text>
          <Text style={styles.val}>{'CASD'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{'Bank Branch:'}</Text>
          <Text style={styles.val}>{'ETL'}</Text>
        </View>
        <View style={styles.div} />
        <View style={styles.row}>
          <Text style={styles.text}>{'Content:'}</Text>
          <Text style={styles.val}>{'#47123'}</Text>
        </View>
        <TouchableOpacity
          style={{alignSelf: 'center', marginVertical: 12}}
          onPress={nextStep}>
          <Title style={{fontSize: 18, color: Colors.primary, lineHeight: 18}}>
            NEXT
          </Title>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const WIDTH = width - 24;
const SWITCH_WIDTH = width - 50;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: WIDTH,
    marginHorizontal: 12,
    borderRadius: 8,
    padding: 12,
    margin: 12,
  },
  switch: {
    width: SWITCH_WIDTH,
    height: 60,
    marginHorizontal: 25,
    marginTop: 12,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  buttonActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.primary,
  },
  tt: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 25,
    color: '#fff',
    marginRight: 8,
  },
  div: {
    alignSelf: 'stretch',
    marginVertical: 4,
    height: 1.2,
    borderRadius: 1,
    backgroundColor: '#fff',
  },
  row: {
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
  val: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
  },
});
