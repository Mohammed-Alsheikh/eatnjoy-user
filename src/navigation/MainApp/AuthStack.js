import {createStackNavigator} from 'react-navigation-stack';

import RegisterScreen from '../../views/scences/Auth/createAccount/CreateAccount';
import SignScreen from '../../views/scences/Auth/signIn/SignIn';
import AboutScreen from '../../views/scences/about/About';
import CustomDrawer from '../MainApp/Drawer/index';

const RouteConfigs = {
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  SignIn: {
    screen: SignScreen,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  About: {
    screen: AboutScreen,
    navigationOption: () => {
      return {
        header: null,
      };
    },
  },
  Drawer: {
    screen: CustomDrawer,
    navigationOption: () => {
      return {
        header: null,
      };
    },
  },
};

const StackNavigatorConfig = {
  headerLayoutPreset: 'center',
  initialRouteName: 'Register',
};

const AuthStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default AuthStack;
