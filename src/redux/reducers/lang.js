import ACTION_TYPES from '../constants';

const initialState = {
  value: 'en',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_AR':
      return Object.assign({}, state, {
        value: 'ar',
      });
    case 'SET_EN':
      return Object.assign({}, state, {
        value: 'en',
      });

    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
