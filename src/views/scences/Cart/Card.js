/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Title} from 'react-native-paper';
import Colors, {width} from '../../styles';
import {connect} from 'react-redux';
import {UpdateMealQuantity, DeleteCartItem} from '../../../redux/actions';
import reactotron from 'reactotron-react-native';

const Component = ({
  meal,
  notes,
  quantity,
  id,
  UpdateMealQuantity,
  DeleteCartItem,
  lang,
}) => {
  reactotron.logImportant({meal})
  const [qt, setQt] = useState(quantity);

  const inc = () => {
    if (qt < 64) {
      setQt(qt + 1);
      UpdateMealQuantity(id, qt + 1);
    } else {
      setQt(qt);
    }
  };
  const dec = () => {
    if (qt > 1) {
      setQt(qt - 1);
      UpdateMealQuantity(id, qt - 1);
    } else {
      DeleteCartItem(id);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: meal.get('image').url()}}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.image}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{width: '65%'}}>
          <Title
            numberOfLines={1}
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 18,
              marginBottom: 6,
            }}>
            {meal.get(lang === 'ar' ? 'nameAR' : 'name')}
          </Title>
          <Text
            numberOfLines={2}
            style={{color: '#fff', fontSize: 14, lineHeight: 16}}>
            {meal.get(lang === 'ar' ? 'descriptionAr' : 'description')}
          </Text>
          <Title
            style={{
              color: Colors.primary,
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 20,
              bottom: 0,
              position: 'absolute',
            }}>
            {`${meal.get('price')} QR`}
          </Title>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={dec}>
            <Icon
              name="remove"
              style={{fontSize: 24, color: 'rgba(0,0,0,0.4)'}}
            />
          </TouchableOpacity>
          <Text style={{marginHorizontal: 4, color: '#fff', fontSize: 16}}>
            {qt}
          </Text>
          <TouchableOpacity onPress={inc}>
            <Icon name="add" style={{fontSize: 24, color: 'rgba(0,0,0,0.4)'}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HEIGHT = 128;
const IMAGE_SIZE = HEIGHT - 28;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: width - 44,
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 22,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    borderRadius: 4,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 4,
    marginRight: 12,
  },
});

export default connect(
  null,
  dispatch => ({
    UpdateMealQuantity: (index, quantity) =>
      dispatch(UpdateMealQuantity(index, quantity)),
    DeleteCartItem: index => dispatch(DeleteCartItem(index)),
  }),
)(Component);
