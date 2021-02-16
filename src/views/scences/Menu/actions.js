import {Parse} from 'parse/react-native';

export const fetchMenu = async () => {
  const Menu = Parse.Object.extend('Menu');
  const query = new Parse.Query(Menu);

  return query.find();
};
