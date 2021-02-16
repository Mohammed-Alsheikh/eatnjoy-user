import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import {RegisterScreen, LoginScreen} from '../views/scences/Auth';
import DrawerNavigation from './DrawerNavigation';
import Forgot from '../views/scences/forgot/Component';
import Verify from '../views/scences/Verify/Component';
import {ROUTS} from '../constants/index';

const AuthStack = () => {
  const routes = {
    [ROUTS.register]: {
      screen: RegisterScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.login]: {
      screen: LoginScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.Forgot]: {
      screen: Forgot,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.Verify]: {
      screen: Verify,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
  };

  const config = {
    headerLayoutPreset: 'center',
    initialRouteName: ROUTS.login,
  };

  return createStackNavigator(routes, config);
};

const AuthSwitch = createSwitchNavigator(
  {
    [ROUTS.Auth]: {screen: AuthStack()},
    [ROUTS.App]: {screen: DrawerNavigation},
  },
  {
    initialRouteName: ROUTS.App,
  },
);

export default AuthSwitch;
