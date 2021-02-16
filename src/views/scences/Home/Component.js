import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import {HeaderFooter, Header, MealSwiper} from '../../lib';
import {width, height} from '../../styles';
import {StackActions} from 'react-navigation';
import reactotron from 'reactotron-react-native';
import {getBest} from './actions';
import {Snack, Activity} from '../../lib';
import {useSnack} from '../../hooks';
import strings from '../../../localization';

const HOME = require('../../assets/img/home.jpg');

export default ({navigation, lang}) => {
  // const Message = navigation.getParam('message', undefined);
  const [loading, setLoading] = useState(true);
  const [best, setBest] = useState(null);

  const navigateToMenu = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: 'Menu',
        params: {},
      }),
    );
  };

  useEffect(() => {
    strings.setLanguage(lang);
    getBest().then(r => {
      setBest(r);
      setLoading(false);
    });
  }, [lang]);

  const navigateToMeal = (menuName, meals, index) => {
    navigation.dispatch(
      StackActions.push({
        routeName: 'Details',
        params: {
          meals,
          menuName,
          index,
        },
      }),
    );
  };

  const SnackHook = useSnack();

  if (loading) {
    return <Activity logo />;
  }

  return (
    <ImageBackground
      source={HOME}
      resizeMethod="resize"
      resizeMode="cover"
      style={styles.container}>
      <Header navigation={navigation} />
      <HeaderFooter navigateToMenu={navigateToMenu} navigateToMeal={() => {}} />
      {best && (
        <MealSwiper
          lang={lang}
          items={best}
          addToCart={meal => navigateToMeal('Top Meals', [meal], 0)}
        />
      )}

      <Image
        source={{uri: 'https://picsum.photos/id/102/4320/3240'}}
        resizeMode="cover"
        resizeMethod="resize"
        style={{width, height: height / 4.3, position: 'absolute', bottom: 0}}
      />
      <Snack {...SnackHook}>{SnackHook.message}</Snack>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
});
