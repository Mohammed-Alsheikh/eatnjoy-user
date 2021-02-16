import {Alert} from 'react-native';
import {navigateToAuth} from './navigateToAuth';
import {ROUTS} from '../../constants';

export default navigation => {
  Alert.alert(
    'You must be loged in',
    '',
    [
      {
        text: 'Login',
        onPress: () => {
          navigateToAuth(navigation);
        },
      },
      {
        text: 'Cancel',
        onPress: () => {
          navigation.navigate(ROUTS.Home);
        },
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};
