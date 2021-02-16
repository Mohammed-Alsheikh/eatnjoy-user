import ACTION_TYPES from '../constants';

export const setPayroll = (dispatch, payroll) => {
  dispatch({
    type: ACTION_TYPES.SET_PAYROLL,
    payload: payroll,
  });
};
