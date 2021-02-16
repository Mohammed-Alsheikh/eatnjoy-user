import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Button, Appbar} from 'react-native-paper';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import PriceMarker from './PriceMarker';
import reactotron from 'reactotron-react-native';
import permision from './permision';
import {connect} from 'react-redux';

import {Activity} from '../../lib';
import {setLocation} from './actions';
import {ROUTS} from '../../../constants';

const {width, height} = Dimensions.get('window');

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
};

const ASPECT_RATIO = width / height;
const LATITUDE = 25.286106;
const LONGITUDE = 51.534817;
const LATITUDE_DELTA = 0.0922 * 10;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function log(eventName, e) {
  reactotron.log(eventName, e.nativeEvent);
}

export default connect(
  state => ({
    location: state.address.location,
    addressInfo: state.address.addressInfo,
  }),
  {setLocation},
)(({navigation, setLocation}) => {
  const [my, setMy] = useState({
    latitude: LATITUDE - SPACE,
    longitude: LONGITUDE - SPACE,
  });

  const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await permision();
      }
      Geolocation.requestAuthorization();
      Geolocation.getCurrentPosition(
        position => {
          setCoordinate({
            ...position.coords,
            latitudeDelta: LATITUDE_DELTA / 12,
            longitudeDelta: LONGITUDE_DELTA / 12,
          });
          setMy({
            ...position.coords,
          });
        },
        err => {},
        GEOLOCATION_OPTIONS,
      );
    })();
  }, []);

  const getMapRegion = () => ({
    latitude: coordinate.latitude,
    longitude: coordinate.longitude,
    latitudeDelta: coordinate.latitudeDelta,
    longitudeDelta: coordinate.longitudeDelta,
  });

  const pickLocation = () => {
    setLocation(my);
    return navigation.push(ROUTS.Address);
  };

  if (!coordinate) {
    return <Activity />;
  }

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{zIndex: 12}}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content
          title="Delivary Location"
          subtitle="Long Press marker to change location "
        />
      </Appbar.Header>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          loadingEnabled
          region={getMapRegion()}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker
            coordinate={coordinate}
            description="Long Press to Change Delivary Location"
            title="Delivary Location"
            onSelect={e => log('onSelect', e)}
            onDrag={e => log('onDrag', e)}
            onDragStart={e => log('onDragStart', e)}
            onDragEnd={e => setMy(e.nativeEvent.coordinate)}
            onPress={e => log('onPress', e)}
            draggable={true}
          />
        </MapView>
        <Button
          icon="near-me"
          mode="contained"
          style={{margin: 24}}
          onPress={pickLocation}>
          {'Pick Location'}
        </Button>
      </View>
    </View>
  );
});

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
