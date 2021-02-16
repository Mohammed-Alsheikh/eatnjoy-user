import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const fetchOrders = async () => {
  const user = await Parse.User.currentAsync();

  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  query.equalTo('client', {
    __type: 'Pointer',
    className: '_User',
    objectId: user.id,
  });

  query.descending('createdAt');

  query.include('driver');

  return query.find();
};
