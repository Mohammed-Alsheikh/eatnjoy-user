import React, {useState, useEffect} from 'react';
import {Content} from 'native-base';
import {StyleSheet, ImageBackground} from 'react-native';
import {List, Divider} from 'react-native-paper';
import Colors from '../../styles';
import {HeaderFooter, Header} from '../../lib';
import {StackActions} from 'react-navigation';
import _ from 'lodash';
import Meal from './Meal';
import {fetchMenu} from './actions';
import {Activity} from '../../lib';

import items from './mock';
import reactotron from 'reactotron-react-native';

const HOME = require('../../assets/img/home.jpg');

const ListItem = ({item, navigateToMeal, lang}) => {
  const [expanded, setExpanded] = useState(false);
  const [meals, setMeals] = useState(null);

  const onPress = index =>
    navigateToMeal(
      item.get(lang === 'ar' ? 'title_ar' : 'title'),
      meals,
      index,
    );

  useEffect(() => {
    item
      .relation('meals')
      .query()
      .find()
      .then(res => setMeals(res));
  }, [item]);

  if (!meals || meals?.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <List.Accordion
        title={item.get(lang === 'ar' ? 'title_ar' : 'title')}
        titleStyle={{alignSelf: 'center', fontSize: 18}}
        expanded={expanded}
        color={Colors.primary}
        style={{backgroundColor: '#D2C4AC99'}}
        onPress={() => setExpanded(!expanded)}>
        {meals &&
          meals.map((meal, index) => {
            return (
              <Meal
                lang={lang}
                index={index}
                meal={meal}
                onPress={() => onPress(index)}
              />
            );
          })}
      </List.Accordion>
      <Divider style={{height: 2}} />
    </React.Fragment>
  );
};

const RenderMenu = ({menu, navigateToMeal, lang}) => {
  return menu.map(item => (
    <ListItem lang={lang} item={item} navigateToMeal={navigateToMeal} />
  ));
};

export default ({navigation, lang}) => {
  const [menu, setMenu] = useState(null);
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

  useEffect(() => {
    (async () => {
      const result = await fetchMenu();
      setMenu(result);
    })();
  }, []);

  if (!menu) {
    return <Activity />;
  }

  return (
    <ImageBackground
      source={HOME}
      resizeMethod="resize"
      resizeMode="cover"
      style={styles.container}>
      <Header navigation={navigation} back={() => navigation.goBack()} />
      <HeaderFooter />
      <Content>
        <RenderMenu lang={lang} menu={menu} navigateToMeal={navigateToMeal} />
      </Content>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
