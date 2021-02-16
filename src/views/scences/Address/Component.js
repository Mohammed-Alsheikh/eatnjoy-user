import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {TextInput, Button, Appbar} from 'react-native-paper';
import {Content, Container} from 'native-base';
import {useTextInput} from '../../hooks';
import {ROUTS} from '../../../constants';
import {connect} from 'react-redux';
import {Snack} from '../../lib';
import {useSnack} from '../../hooks';

import {setAddressInfo} from './actions';
import app from '../../../redux/reducers/app';

const BACK = require('../../assets/img/home.jpg');

const d = x => (x.value === '' ? true : false);

export default connect(
  state => ({
    addressInfo: state.address.addressInfo,
    location: state.address.location,
  }),
  {setAddressInfo},
)(({navigation, location, addressInfo, setAddressInfo}) => {
  const phone = useTextInput(addressInfo?.phone || '');
  const area = useTextInput(addressInfo?.area || '');
  const street = useTextInput(addressInfo?.street || '');
  const building = useTextInput(addressInfo?.building || '');
  const floor = useTextInput(addressInfo?.floor || '');
  const appartment = useTextInput(addressInfo?.appartment || '');
  const additional = useTextInput(addressInfo?.additional || '');

  const SnackHook = useSnack();

  const submit = () => {
    if (!location) {
      SnackHook.onShow();
      SnackHook.setMessage('Please Enter your location');
    }
    if (
      d(phone) ||
      d(area) ||
      d(street) ||
      d(building) ||
      d(floor) ||
      d(appartment)
    ) {
      SnackHook.onShow();
      SnackHook.setMessage('Please Enter your address info');
    } else {
      setAddressInfo({
        area: area.value,
        street: street.value,
        building: building.value,
        floor: floor.value,
        phone: phone.value,
        appartment: appartment.value,
        additional: additional.value,
      });
      return navigation.navigate(ROUTS.Shipping);
    }
  };

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="   My Address" />
      </Appbar.Header>
      <ImageBackground source={BACK} style={styles.background}>
        <Content>
          <Button
            onPress={() => navigation.navigate(ROUTS.MapSelect)}
            icon="my-location"
            mode="outlined"
            style={{margin: 24}}>
            {'Change Location'}
          </Button>
          <View>
            <TextInput
              {...area}
              mode="flat"
              label="Area"
              style={styles.textInput}
            />
            <TextInput
              {...street}
              mode="flat"
              label="Street"
              style={styles.textInput}
            />
            <TextInput
              {...building}
              mode="flat"
              label="Building"
              style={styles.textInput}
            />
            <TextInput
              {...floor}
              mode="flat"
              keyboardType="number-pad"
              label="Floor"
              style={styles.textInput}
            />
            <TextInput
              {...phone}
              mode="flat"
              keyboardType="phone-pad"
              label="Phone Number"
              style={styles.textInput}
            />
            <TextInput
              {...appartment}
              mode="flat"
              label="Appartment No."
              style={styles.textInput}
            />
            <TextInput
              {...additional}
              mode="flat"
              label="Additional Dirictions (optional)"
              style={styles.textInput}
            />
          </View>
          <Button
            onPress={submit}
            mode="contained"
            icon="send"
            style={{width: 200, alignSelf: 'center', margin: 24}}>
            {'Save Address'}
          </Button>
        </Content>
      </ImageBackground>
      <Snack {...SnackHook}>{SnackHook.message}</Snack>
    </Container>
  );
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {},
  textInput: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 8,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 18,
  },
});
