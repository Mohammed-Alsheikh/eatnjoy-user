import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Image from 'react-native-fast-image';
import {TextInput, Button} from 'react-native-paper';
import {Container, Content} from 'native-base';
import Colors, {width} from '../../styles';
import ImagePicker from 'react-native-image-picker';
import {updateUser} from './actions';
import {Snack} from '../../lib';
import {useSnack} from '../../hooks';
import {LoginAlert} from '../../lib';
import {ROUTS} from '../../../constants';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const BACKG = require('../../assets/img/home.jpg');

export default ({setUser, user, navigation}) => {
  const [firstName, setFirstname] = useState(user?.firstName || '');
  const [surName, setSurName] = useState(user?.surName || '');
  const [phone, setPhone] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [image, setImage] = useState(user?.image);
  const [avatar, setAvatar] = useState(user?.image);
  const SnackHook = useSnack();

  useEffect(() => {
    if (!user) {
      LoginAlert(navigation);
    }
  }, [navigation, user]);

  const submit = async () => {
    if (!user) {
      LoginAlert(navigation);
      return;
    }
    try {
      const res = await updateUser(
        firstName,
        surName,
        phone,
        email,
        image,
        user.id,
      );
      setUser(res);
      SnackHook.onShow();
      SnackHook.setMessage('Updated Successfully');
    } catch (ex) {
      SnackHook.onShow();
      SnackHook.setMessage('Error');
      console.log(ex);
    }
  };

  const changeAvatar = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        setImage(response);
        setAvatar(response.uri);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0} // adjust the value here if you need more padding
      style={{flex: 1}}
      behavior="padding">
      <ImageBackground source={BACKG} style={styles.background}>
        <View style={styles.textContainer}>
          <TextInput
            mode="flat"
            placeholder="First Name"
            style={styles.textInput}
            value={firstName}
            onChange={val => setFirstname(val)}
          />
          <TextInput
            mode="flat"
            placeholder="Last Name"
            style={styles.textInput}
            value={surName}
            onChange={val => setSurName(val)}
          />
          <TextInput
            mode="flat"
            placeholder="Phone Number"
            style={styles.textInput}
            value={phone}
            onChange={val => setPhone(val)}
          />
          <TextInput
            mode="flat"
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChange={val => setEmail(val)}
          />
        </View>
        <Button
          onPress={submit}
          icon="send"
          mode="contained"
          style={{alignSelf: 'center', paddingHorizontal: 32}}>
          {'Submit'}
        </Button>
      </ImageBackground>
      <TouchableOpacity
        onPress={changeAvatar}
        style={{
          position: 'absolute',
          top: -80,
          left: width / 2 - 80,
          padding: 4,
          backgroundColor: Colors.primary,
          borderRadius: 100,
          zIndex: 1000,
        }}>
        <Image
          source={{uri: avatar}}
          resizeMode="cover"
          resizeMethod="resize"
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
          }}
        />
      </TouchableOpacity>
      <Snack {...SnackHook}>{SnackHook.message}</Snack>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 46,
    paddingBottom: 42,
    justifyContent: 'space-between',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textInput: {
    //height: 60,
    alignSelf: 'stretch',
    marginHorizontal: 12,
    marginVertical: 12,
    backgroundColor: 'transparent',
  },
});
