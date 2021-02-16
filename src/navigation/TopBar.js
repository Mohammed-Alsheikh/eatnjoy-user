import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Pending from '../views/scences/myorder/pending';
import OnGoing from '../views/scences/myorder/onGoing';
import Done from '../views/scences/myorder/done';
import {ROUTS} from '../constants/index';

export default createMaterialTopTabNavigator(
  {
    [ROUTS.Pending]: {screen: Pending},
    [ROUTS.OnGoing]: {screen: OnGoing},
    [ROUTS.Done]: {screen: Done},
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
      activeTintColor: '#690014',
      inactiveTintColor: 'black',
      fontSize: 33,

      tabStyle: {
        backgroundColor: '#CEBD9B',
      },
    },
  },
);
