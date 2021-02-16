/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Linking, Image} from 'react-native';
import {Divider, Text, Caption, Appbar} from 'react-native-paper';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import reactotron from 'reactotron-react-native';
import MapViewDirections from 'react-native-maps-directions';
import {Activity} from '../../lib';
import Colors, {width, height} from '../../styles';
import {LATITUDE_DELTA, LONGITUDE_DELTA, API_KEY} from './config';
import {Parse} from 'parse/react-native';
import {getInititalLocation} from './actions';

const DRIVER = require('../../assets/img/driver.png');

const Call = p => Linking.openURL(`tel:${p}`);

export default ({navigation}) => {
  const [coordinate, setCoordinate] = useState(null);
  const [driver, setDriver] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const Order = navigation.getParam('Order');
  const dist = Order.get('location');
  const Driver = Order.get('driver');
  const locationId = Driver.get('location').id;
  const phone = Driver.get('phone');

  useEffect(() => {
    getInititalLocation(locationId).then(r => {
      const temp = {
        longitude: r[0].get('coords').lng,
        latitude: r[0].get('coords').lat,
      };
      setDriver(temp);
    });
    const Location = Parse.Object.extend('Location');
    const query = new Parse.Query(Location);

    query.equalTo('objectId', locationId);

    query
      .subscribe()
      .then(subscription => {
        reactotron.log(subscription);
        subscription.on('update', async object => {
          reactotron.logImportant('updated', object);
          const canWatch = object.get('watch');
          if (!canWatch) {
            Parse.LiveQuery.close();
            navigation.navigate('Home', {
              message: 'Meal Delivered!, Thanks for using our App!',
            });
          }
          const temp = {
            longitude: object.get('coords').lng,
            latitude: object.get('coords').lat,
          };
          setDriver(temp);
        });
      })
      .catch(e => {});
  }, []);

  const getMapRegion = () => ({
    latitude: driver.latitude,
    longitude: driver.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  if (!Order || !driver) {
    return <Activity logo />;
  }

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{zIndex: 3}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Driver Location" />
        <Appbar.Action icon="phone" onPress={() => Call(phone)} />
      </Appbar.Header>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled
          region={getMapRegion()}
          provider={PROVIDER_GOOGLE}>
          <Marker
            pinColor="green"
            coordinate={dist}
            title="Delivary Location"
            key={'123'}
          />
          <Marker coordinate={driver} title="EatnJoy Driver" key={'321'}>
            <Image
              source={DRIVER}
              resizeMethod="resize"
              resizeMode="contain"
              style={{width: 50, height: 50}}
            />
          </Marker>

          <MapViewDirections
            origin={{
              longitude: dist.longitude,
              latitude: dist.latitude,
            }}
            destination={{
              longitude: driver.longitude,
              latitude: driver.latitude,
            }}
            apikey={API_KEY}
            strokeWidth={2.4}
            strokeColor={Colors.primary}
            onReady={result => {
              setDistance(result.distance);
              setDuration(result.duration);
            }}
          />
        </MapView>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            margin: 24,
            padding: 8,
            backgroundColor: 'rgba(0,0,0,0.4)',
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 55,
              padding: 4,
              backgroundColor: Colors.primary,
              marginBottom: 12,
            }}>
            <Image
              source={{uri: Driver.get('image').url()}}
              style={{width: 72, height: 72, borderRadius: 55}}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              alignSelf: 'stretch',
              marginHorizontal: 8,
              height: 1.5,
              borderRadius: 12,
              marginBottom: 4,
            }}
          />
          <Text style={{color: 'black', lineHeight: 20}}>
            {Driver.get('username')}
          </Text>
          <Text style={{color: 'black', lineHeight: 20}}>
            {Driver.get('phone')}
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              alignSelf: 'stretch',
              marginHorizontal: 8,
              height: 1.5,
              borderRadius: 12,
              marginVertical: 8,
            }}
          />
          <Text style={{color: 'black', lineHeight: 20}}>
            {`Duration: ${Math.round(duration)} min`}
          </Text>
          <Text style={{color: 'black', lineHeight: 20}}>
            {`Distance: ${distance} KM`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
