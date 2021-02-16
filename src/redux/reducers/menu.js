import ACTION_TYPES from '../constants';
import reactotron from 'reactotron-react-native';

const initialState = {
  value: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_MENU:
      return Object.assign({}, state, {
        value: action.payload,
      });

    case ACTION_TYPES.SET_SUBMENU:
      let newValue = state.value;
      newValue[action.payload.index].submenu = {
        ...newValue[action.payload.index].submenu,
        ...action.payload.item,
      };
      return Object.assign({}, state, {
        value: newValue,
      });
    case ACTION_TYPES.SET_MEAL:
      const {index, item, submenu} = action.payload;
      let newMeals = state.value;

      newMeals[index].submenu[submenu] = newMeals[index].submenu[
        submenu
      ].concat([item]);
      return Object.assign({}, state, {
        value: newMeals,
      });
    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
