import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import AddressScreen from '../views/scences/Address';
import MapSelectScreen from '../views/scences/MapSelect';
import CartScreen from '../views/scences/Cart';
import ShippingScreen from '../views/scences/Shipping';
import FinalizeScreen from '../views/scences/Finalize';

import {ROUTS} from '../constants';

const Stack = createStackNavigator(
  {
    [ROUTS.CartScreen]: {
      screen: CartScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.Shipping]: {
      screen: ShippingScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.Address]: {
      screen: AddressScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.MapSelect]: {
      screen: MapSelectScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
  },
  {
    initialRouteName: ROUTS.CartScreen,
  },
);

export default createSwitchNavigator(
  {
    [ROUTS.Cart]: {
      screen: Stack,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.Finalize]: {
      screen: FinalizeScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
  },
  {
    initialRouteName: ROUTS.Cart,
  },
);
