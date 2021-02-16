import ACTION_TYPES from '../constants';

const initialState = {
  user: undefined,
  payroll: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case ACTION_TYPES.SET_PAYROLL:
      return Object.assign({}, state, {
        payroll: action.payload,
      });
    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
