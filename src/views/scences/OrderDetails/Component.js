import React, {useEffect, useState} from 'react';
import {Content, Container} from 'native-base';
import {ImageBackground, StyleSheet, FlatList, View} from 'react-native';
import {Appbar, Title, Button} from 'react-native-paper';
import Item from './Item';
import reactotron from 'reactotron-react-native';
import Steps from './Steps';
import Data from './Data';
import moment from 'moment/src/moment';
import Colors from '../../styles';
import {ROUTS} from '../../../constants';

const BACKG = require('../../assets/img/home.jpg');

const getStep = x => {
  switch (x) {
    case 'pending':
      return 1;
    case 'kitchen':
      return 2;
    case 'delivery':
      return 3;
    default:
      return 3;
  }
};

export default ({navigation}) => {
  const Order = navigation.getParam('order');
  const Status = navigation.getParam('status');

  const prepTime = Order.get('prepTime');

  const [items, setItems] = useState([]);

  const openMap = () => {
    navigation.push(ROUTS.Tracking, {Order});
  };

  useEffect(() => {
    Order.get('items')
      .query()
      .find()
      .then(r => setItems(r));
  }, [Order]);

  return (
    <Container>
      {reactotron.log(Order, Status)}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Orders" />
      </Appbar.Header>
      <ImageBackground source={BACKG} style={styles.background}>
        <Content>
          <Steps
            active={getStep(Status)}
            prepTime={Status === 'kitchen' ? prepTime : undefined}
          />
          <Data
            id={Order.id}
            date={moment(Order.createdAt).format('D-M-YYYY')}
            total={Order.get('price')}
          />
          <FlatList
            data={items}
            renderItem={({item}) => <Item item={item} />}
          />
        </Content>
        {Status === 'delivery' && (
          <Button
            icon="room"
            onPress={openMap}
            mode="contained"
            style={{alignSelf: 'center', marginVertical: 18}}>
            {'go to map'}
          </Button>
        )}
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
