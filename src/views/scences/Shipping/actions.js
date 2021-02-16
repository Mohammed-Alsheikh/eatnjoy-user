import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const incMeal = (id, q) => {
  const Meal = Parse.Object.extend('Meal');
  const query = new Parse.Query(Meal);

  query.get(id).then(object => {
    object.increment('timesOrdered', q);
    object.save().then(response => {}, error => {});
  });
};

export const addCartItem = ({meal, quantity, notes}) => {
  const CartItem = Parse.Object.extend('CartItem');
  const cartItemObj = new CartItem();

  incMeal(meal.id, quantity);

  cartItemObj.set('meal', {
    __type: 'Pointer',
    className: 'Meal',
    objectId: meal.id,
  });
  cartItemObj.set('notes', notes);
  cartItemObj.set('quantity', quantity);

  return cartItemObj.save();
};

export const submitOrder = async ({
  price,
  cartItems,
  location,
  addressInfo,
}) => {
  const user = await Parse.User.currentAsync();

  const Order = Parse.Object.extend('Order');
  const orderObj = new Order();

  orderObj.set('client', user);
  orderObj.set('price', price);
  orderObj.set('location', location);
  orderObj.set('addressInfo', addressInfo);

  orderObj.set('status', 'pending');

  const items = orderObj.relation('items');
  for (let i = 0; i < cartItems.length; i++) {
    items.add(cartItems[i]);
  }

  const res = await orderObj.save();

  reactotron.log({res});
};
