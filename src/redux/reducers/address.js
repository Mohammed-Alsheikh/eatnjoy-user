import ACTION_TYPES from '../constants';

const initialState = {
  location: undefined,
  addressInfo: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCATION:
      return Object.assign({}, state, {
        location: action.payload,
      });
    case ACTION_TYPES.SET_ADDRESS_INFO:
      return Object.assign({}, state, {
        addressInfo: action.payload,
      });
    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
