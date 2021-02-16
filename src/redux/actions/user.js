import ACTION_TYPES from '../constants';

export const setUser = user => dispatch => {
  const payload = {
    username: user?.get('username'),
    firstName: user?.get('firstName'),
    surName: user?.get('surName'),
    email: user?.get('email'),
    image: user?.get('image')?.url(),
    id: user.id,
  };

  dispatch({
    type: ACTION_TYPES.SET_USER,
    payload,
  });
};

export const logout = () => dispatch => dispatch({type: ACTION_TYPES.LOGOUT});
