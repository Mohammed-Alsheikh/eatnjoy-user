import Types from '../../../redux/constants';
import reactotron from 'reactotron-react-native';

export const setLocation = payload => dispatch => {
  dispatch({type: Types.SET_LOCATION, payload});
};
