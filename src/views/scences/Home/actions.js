import {Parse} from 'parse/react-native';

export const getBest = () => {
  const Meal = Parse.Object.extend('Meal');
  const query = new Parse.Query(Meal);

  query.descending('timesOrdered');

  query.limit(5);

  return query.find();
};
