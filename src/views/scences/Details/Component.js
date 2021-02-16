/* eslint-disable react-native/no-inline-styles */
import React, {useState, Fragment, useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Alert,
  SafeAreaView,
} from 'react-native';
import {HeaderSwiper} from '../../lib';
import {width, height} from '../../styles';
import {Title, Paragraph, TextInput, Button} from 'react-native-paper';
import {Container, Content} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../styles';
import reactotron from 'reactotron-react-native';
import {Snack, navigateToAuth} from '../../lib';
import {useSnack} from '../../hooks';

const HOME = require('../../assets/img/home.jpg');

const Head = ({price, name}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Title style={{flex: 1}}>{name}</Title>
      <Title
        style={{
          fontSize: 24,
          color: Colors.primary,
        }}>{`${price} QR`}</Title>
      <Title />
    </View>
  );
};

const Body = ({title, description}) => {
  return (
    <View style={{marginVertical: 8}}>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </View>
  );
};

const Extras = ({extras, setExtras}) => {
  return (
    <Fragment>
      <TextInput
        style={{backgroundColor: '#00000022', marginTop: 24, marginBottom: 12}}
        label="Add Extras ?"
        numberOfLines={4}
        multiline={true}
        value={extras}
        onChangeText={val => setExtras(val)}
      />
    </Fragment>
  );
};

export default ({navigation, addToCart, lang, user}) => {
  const {meals, menuName} = navigation.state.params;
  const index = navigation.getParam('index', 0);

  const [current, setCurrent] = useState(index);
  const [extras, setExtras] = useState('');

  const SnackHook = useSnack();

  const submit = () => {
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
            onPress: () => {},
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else {
      addToCart({
        meal: meals[current],
        notes: extras,
        quantity: 1,
      });
      SnackHook.onShow();
      SnackHook.setMessage('Meal added to cart');
    }
  };

  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={HOME}
        resizeMethod="resize"
        resizeMode="cover"
        style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <HeaderSwiper
            items={meals}
            setCurrent={setCurrent}
            index={index}
            back={() => navigation.goBack()}
          />
          <Content style={styles.content}>
            <Head name={menuName} price={meals[current].get('price')} />
            <Body
              description={meals[current].get(
                lang === 'ar' ? 'descriptionAr' : 'description',
              )}
              title={meals[current].get(lang === 'ar' ? 'nameAr' : 'name')}
            />
            <Extras extras={extras} setExtras={setExtras} />
            <Button
              icon="shopping-cart"
              mode="contained"
              style={{
                marginVertical: 12,
                alignSelf: 'center',
                paddingHorizontal: 32,
              }}
              onPress={submit}>
              {'add to cart'}
            </Button>
          </Content>
          <Snack {...SnackHook}>{SnackHook.message}</Snack>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  content: {
    paddingLeft: 12,
    paddingRight: 24,
    paddingVertical: 12,
  },
});
