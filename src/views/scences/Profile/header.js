import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {width} from '../../styles';
import ImagePicker from 'react-native-image-picker';

const BACK = require('../../assets/img/header.jpg');
const BASKET = require('../../assets/logo/basket-2.png');

const PICK = () => {
  var options = {
    title: 'Select Image',
    // customButtons: [
    //   {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    // ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, response => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      let source = response;
      this.setState({
        filePath: source,
      });
    }
  });
};
export default ({}) => {
  return (
    <View>
      <ImageBackground
        source={BACK}
        resizeMethod="resize"
        resizeMode="cover"
        style={styles.background}
      />
      {/* <TouchableOpacity onPress={PICK} style={styles.avatar}>
        <Image
          source={BASKET}
          resizeMethod="resize"
          resizeMode="cover"
          style={styles.picker}
        />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: null,
    height: 220,
  },
  basket: {
    width: 55,
    height: 55,
  },
  avatar: {
    position: 'absolute',
    zIndex: 1,
    width: 160,
    height: 160,
    borderRadius: 80,
    bottom: -80,
    left: width / 2 - 80,
  },
  picker: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
  },
});
