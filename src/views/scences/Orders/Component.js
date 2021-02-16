import React, {useEffect, useState} from 'react';
import {Content, Container} from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import styled from 'styled-components';
import {fetchOrders} from './actions';
import Item from './Item';
import reactotron from 'reactotron-react-native';
import {ROUTS} from '../../../constants';
import {navigateToAuth} from '../../lib';

import strings from '../../../localization';

const BACKG = require('../../assets/img/home.jpg');

export default ({navigation, lang, user}) => {
  const [orders, setOrders] = useState([]);
  const [isRefreshing, setRefreshStatus] = useState(true);

  const fetchOrdersList = () => {
    setRefreshStatus(true);
    fetchOrders().then(res => {
      setOrders(res);
      setRefreshStatus(false);
    });
  };

  const openMap = Order => {
    navigation.push(ROUTS.Tracking, {Order});
  };

  useEffect(() => {
    if (!user) {
      Alert.alert(
        'You must be loged in',
        '',
        [
          {
            text: 'Login',
            onPress: () => {
              navigateToAuth(navigation);
            },
          },
          {
            text: 'Cancel',
            onPress: () => {
              navigation.navigate(ROUTS.Home);
            },
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else {
      fetchOrdersList();
    }
  }, [navigation, user]);

  const goToDetails = (order, e) => {
    navigation.push(ROUTS.OrdersDetails, {order, status: e});
  };

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate(ROUTS.Home)} />
        <Appbar.Content
          title={strings.MyOrders}
          titleStyle={{alignSelf: 'center', marginLeft: -62}}
        />
      </Appbar.Header>
      <ImageBackground source={BACKG} style={styles.background}>
        <FlatList
          data={orders}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={fetchOrdersList}
            />
          }
          renderItem={({item}) => (
            <Item
              item={item}
              onPress={e => goToDetails(item, e)}
              openMap={() => openMap(item)}
            />
          )}
        />
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
