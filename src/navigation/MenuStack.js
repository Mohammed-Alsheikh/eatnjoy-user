import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/scences/Home';
import Menu from '../views/scences/Menu';
import Details from '../views/scences/Details';
import CartStack from './CartStack';
import {ROUTS} from '../constants';

const routes = {
  Home: {
    screen: Home,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  Menu: {
    screen: Menu,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  Details: {
    screen: Details,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  [ROUTS.CartStack]: {
    screen: CartStack,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
};

const config = {
  headerLayoutPreset: 'center',
  initialRouteName: 'Home',
};

const MenuStack = createStackNavigator(routes, config);

export default MenuStack;
