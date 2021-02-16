import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors, {height} from '../styles';
import reactotron from 'reactotron-react-native';

export default ({items, setCurrent, index, back}) => {
  return (
    <View style={styles.container}>
      <Swiper
        index={index}
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
        paginationStyle={styles.pagination}
        onIndexChanged={index => setCurrent(index)}>
        {items.map(item => (
          <Image source={{uri: item.get('image').url()}} style={{flex: 1}} />
        ))}
      </Swiper>
      <TouchableOpacity
        onPress={back}
        style={{position: 'absolute', left: 16, top: 16}}>
        <Icon
          name="chevron-left"
          style={{fontSize: 42, color: Colors.primary}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 2.3,
    width: null,
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
    bottom: 10,
  },
});
