/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Title, Divider} from 'react-native-paper';
import Colors from '../../styles';
import moment from 'moment/src/moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PEDNING = require('../../assets/online-order.png');
const DELIVERY = require('../../assets/delivery.png');
const KITCHEN = require('../../assets/board.png');
const LOGO = require('../../assets/logo/LOGO.png');

const stImg = type => {
  switch (type) {
    case 'pending':
      return LOGO;
    case 'kitchen':
      return LOGO;
    case 'delivery':
      return LOGO;
    default:
      return LOGO;
  }
};

function Cf(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const St = x => {
  switch (x) {
    case 'accepted':
      return '#b7e778';
    case 'pending':
      return '#f9f8eb';
    case 'rejected':
      return '#ea5e5e';
    case 'kitchen':
      return '#ff8364';
    case 'delivery':
      return Colors.primary;
    default:
      return 'white';
  }
};

export default ({item, onPress, openMap}) => {
  const status = item.get('status');
  const since = moment(item.createdAt).fromNow();

  return (
    <Container activeOpacity={0.6}>
      <View style={{flexDirection: 'row', flex: 1, padding: 14}}>
        <Image
          source={stImg(status)}
          resizeMethod="resize"
          resizeMode="cover"
          style={{width: 77, height: 77, marginRight: 14}}
        />
        <View style={{flex: 1}}>
          <Title style={{fontSize: 18, color: Colors.primary}}>
            {Cf(status)}
          </Title>
          <Text>{since}</Text>
          <Text>{`Order ID: ${item.id}`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            onPress(status);
          }}
          style={{alignSelf: 'center'}}>
          <Icon name="chevron-right" style={{fontSize: 38, color: 'white'}} />
        </TouchableOpacity>
      </View>
      {status === 'delivery' && (
        <TouchableOpacity
          onPress={openMap}
          style={{
            alignSelf: 'stretch',
            padding: 4,
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="room"
              style={{fontSize: 24, color: Colors.primary, marginRight: 6}}
            />
            <Text style={{color: 'white', textAlign: 'center'}}>
              {'Track Order'}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </Container>
  );
};

const Container = styled.View`
  margin: 6px 16px 6px 16px;
  background-color: rgba(0, 0, 0, 0.1);
`;
