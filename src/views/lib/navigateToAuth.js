import {SwitchActions} from 'react-navigation';

export const navigateToAuth = navigation => {
  navigation.dispatch(SwitchActions.jumpTo({routeName: 'Auth'}));
};
