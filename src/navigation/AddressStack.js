import {createStackNavigator} from 'react-navigation-stack';
import AddressScreen from '../views/scences/AddressDrawer';
import MapSelectScreen from '../views/scences/MapDrawer';
import {ROUTS} from '../constants';

export default createStackNavigator(
  {
    [ROUTS.AddressD]: {
      screen: AddressScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTS.MapSelectD]: {
      screen: MapSelectScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
  },
  {
    initialRouteName: ROUTS.MapSelectD,
  },
);
