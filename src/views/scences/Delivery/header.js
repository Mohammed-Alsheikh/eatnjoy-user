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

export default ({navigation}) => {
  const _loginHandler = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTS.Home,
        params: {},
      }),
    );
  };
  return (
    <Fragment>
      <View style={styles.container1}>
        <TouchableOpacity onPress={_loginHandler}>
          <Icon name="arrow-back" style={styles.icon} />
        </TouchableOpacity>
        <Title style={styles.title1}>EDIT ADDRESSES</Title>
      </View>
      <View style={styles.container2}>
        <Title style={styles.title2}>Delivery Addresses</Title>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    backgroundColor: '#C5B499',
    height: 60,
  },
  icon: {
    fontSize: 34,
    color: 'black',
    margin: 14,
  },
  title1: {
    alignSelf: 'center',
    marginHorizontal: 60,
    fontSize: 22,
  },
  title2: {
    fontSize: 22,
    alignSelf: 'center',
    padding: 6,
  },
  container2: {
    backgroundColor: '#847763',
    height: 50,
  },
});
