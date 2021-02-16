import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {iOSUIKit} from 'react-native-typography';
import reactotron from 'reactotron-react-native';
import Colors from '../../styles';

const CLOCK = require('../../assets/img/clock.png');
const PERSON = require('../../assets/img/person.png');
const ADD = require('../../assets/img/add.png');

export default props => {
  const {onPress, meal, index, lang} = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FastImage
          source={{uri: meal.get('image').url()}}
          resizeMode="cover"
          resizeMethod="resize"
          style={styles.image}
        />
        <View style={styles.body}>
          <Text
            numberOfLines={1}
            style={{...iOSUIKit.bodyEmphasized, color: '#000'}}>
            {meal.get(lang === 'ar' ? 'nameAr' : 'name')}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <FastImage
              source={CLOCK}
              resizeMode="contain"
              resizeMethod="resize"
              style={{width: 15, height: 15, alignSelf: 'center'}}
            />
            <Text
              numberOfLines={1}
              style={{
                ...iOSUIKit.body,
                fontSize: 16,
                color: '#fff',
                marginLeft: 4,
              }}>{`${meal.get('prepTime')} min`}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <FastImage
              source={PERSON}
              resizeMode="contain"
              resizeMethod="resize"
              style={{width: 15, height: 15, alignSelf: 'center'}}
            />
            <Text
              numberOfLines={1}
              style={{
                ...iOSUIKit.body,
                fontSize: 16,
                color: '#fff',
                marginLeft: 4,
              }}>{`For ${meal.get('enoughFor')}`}</Text>
          </View>
          <Text
            numberOfLines={1}
            style={[
              iOSUIKit.largeTitleEmphasizedObject,
              {
                fontSize: 20,
                lineHeight: 26,
                color: Colors.primary,
                marginTop: 4,
              },
            ]}>{`${meal.get('price')} QT`}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.right}
          onPress={onPress}>
          <FastImage
            source={ADD}
            resizeMode="contain"
            resizeMethod="resize"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 16,
  },
  container: {
    height: 100,
    marginHorizontal: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  body: {
    flex: 4,
    marginHorizontal: 6,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
