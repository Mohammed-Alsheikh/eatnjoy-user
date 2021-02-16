import Types from '../../../redux/constants';
import reactotron from 'reactotron-react-native';

export const setAddressInfo = payload => dispatch =>
  dispatch({type: Types.SET_ADDRESS_INFO, payload});
