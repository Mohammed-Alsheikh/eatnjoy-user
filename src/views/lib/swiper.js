/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Title, Text} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Colors, {height, width} from '../styles';
import reactotron from 'reactotron-react-native';
import strings from '../../localization';

const BASKET = require('../assets/img/basket.png');

const BetterSwiper = ({items, addToCart, lang}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          top: 0,
          left: 0,
          position: 'absolute',
          zIndex: 2,
          width,
          backgroundColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          paddingBottom: 4,
        }}>
        <Title style={{color: '#fff', marginTop: 6}}>{strings.BestMeals}</Title>
      </View>
      <Swiper
        loadMinimalLoader
        containerStyle={{flex: 1}}
        showsButtons={true}
        autoplay={false}
        showsPagination={true}
        buttonWrapperStyle={styles.swiperButton}
        nextButton={
          <View style={{backgroundColor: '#DBD1C7', borderRadius: 100}}>
            <Icon
              name="navigate-next"
              style={{
                fontSize: 30,
                color: Colors.primary,
              }}
            />
          </View>
        }
        prevButton={
          <View style={{backgroundColor: '#DBD1C7', borderRadius: 100}}>
            <Icon
              name="navigate-before"
              style={{
                fontSize: 30,
                color: Colors.primary,
              }}
            />
          </View>
        }
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination}>
        {items.map(item => (
          <View style={{flex: 1}}>
            <Image
              source={{uri: item.get('image').url()}}
              resizeMode="cover"
              resizeMethod="resize"
              style={{flex: 1}}
            />
            <View style={styles.footer}>
              <TouchableOpacity
                onPress={() => addToCart(item)}
                style={{flex: 1, alignItems: 'flex-start'}}>
                <Icon
                  name="add-circle-outline"
                  style={{fontSize: 32, color: '#000'}}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Title>{`${item.get('price')} QR `}</Title>
                <Image
                  source={BASKET}
                  resizeMode="contain"
                  resizeMethod="resize"
                  style={{width: 38, height: 38}}
                />
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                  style={{width: '100%', textAlign: 'right', fontSize: 16}}
                  numberOfLines={2}>
                  {item.get(lang === 'ar' ? 'nameAr' : 'name')}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 2.6,
    width: null,
    marginVertical: 18,
  },
  swiperButton: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#DBD1C7',
    height: 40,
    width,
  },
  dot: {
    backgroundColor: 'rgba(100,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  pagination: {
    bottom: 48,
  },
});

export default BetterSwiper;
