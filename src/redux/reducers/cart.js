import ACTION_TYPES from '../constants';
import reactotron from 'reactotron-react-native';

const initialState = {
  value: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return Object.assign({}, state, {
        value: action.payload,
      });
    case ACTION_TYPES.UPDATE_ITEM_QUANTITY:
      return Object.assign({}, state, {
        value: action.payload,
      });
    case ACTION_TYPES.DELETE_CARD_ITEM:
      return Object.assign({}, state, {
        value: action.payload,
      });
    case ACTION_TYPES.CLEAR_CART:
      return initialState;
    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
