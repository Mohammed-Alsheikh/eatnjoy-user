import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const getInititalLocation = id => {
  const Location = Parse.Object.extend('Location');
  const query = new Parse.Query(Location);
  query.equalTo('objectId', id);

  return query.find();
};
