import {createStackNavigator} from 'react-navigation-stack';
import OrdersScreen from '../views/scences/Orders';
import OrderDetailsScreen from '../views/scences/OrderDetails';
import Tracking from '../views/scences/Tracking';
import {ROUTS} from '../constants';

const routes = {
  [ROUTS.Orders]: {
    screen: OrdersScreen,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  [ROUTS.OrdersDetails]: {
    screen: OrderDetailsScreen,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  [ROUTS.Tracking]: {
    screen: Tracking,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
};

const config = {
  initialRouteName: ROUTS.Orders,
};

const OrdersStack = createStackNavigator(routes, config);

export default OrdersStack;
