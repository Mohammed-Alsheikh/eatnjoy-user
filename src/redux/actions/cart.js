import ACTION_TYPES from '../constants';
import reactotron from 'reactotron-react-native';

export const addToCart = meal => (dispatch, getState) => {
  let current = getState().cart.value;

  for (let i = 0; i < current.length; i++) {
    const item = current[i];
    reactotron.logImportant(item.meal, meal);
    if (meal.meal.id === item.meal.id) {
      current[i].quantity++;
      return dispatch({
        type: ACTION_TYPES.ADD_TO_CART,
        payload: current,
      });
    }
  }

  const payload = current.concat([meal]);
  dispatch({
    type: ACTION_TYPES.ADD_TO_CART,
    payload: payload,
  });
};

export const UpdateMealQuantity = (index, quantity) => (dispatch, getState) => {
  let payload = getState().cart.value;
  payload[index].quantity = quantity;

  dispatch({
    type: ACTION_TYPES.UPDATE_ITEM_QUANTITY,
    payload: payload,
  });
};

export const DeleteCartItem = index => (dispatch, getState) => {
  let payload = getState().cart.value;
  payload.splice(index, 1);
  dispatch({
    type: ACTION_TYPES.DELETE_CARD_ITEM,
    payload: payload,
  });
};

export const ClearCart = () => dispatch =>
  dispatch({type: ACTION_TYPES.CLEAR_CART});
