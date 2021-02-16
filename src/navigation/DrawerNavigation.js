import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from './MainApp/Drawer';
import MenuStack from './MenuStack';
import ProfileScreen from '../views/scences/Profile';
import {ROUTS} from '../constants';
import Colors from '../views/styles';
import OrdersStack from './OrdersStack';
import AddressStack from './AddressStack';
import NotificationsScreen from '../views/scences/Notifications';
import LanguagesScreen from '../views/scences/Languages';
import AboutScreen from '../views/scences/About';
import reactotron from 'reactotron-react-native';
import strings from '../localization';

const RouteConfigs = {
  [ROUTS.MenuStack]: {
    screen: MenuStack,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Icon name="home" style={{fontSize: 28, color: Colors.primary}} />
        ),
        drawerLabel: () => (
          <Text style={styles.detailsText}>{strings.Home}</Text>
        ),
        header: null,
      };
    },
  },
  [ROUTS.OrdersStack]: {
    screen: OrdersStack,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Icon name="list" style={{fontSize: 32, color: Colors.primary}} />
        ),
        drawerLabel: () => (
          <Text style={styles.detailsText}>{strings.MyOrders}</Text>
        ),
        header: null,
      };
    },
  },

  [ROUTS.AddressStack]: {
    screen: AddressStack,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Icon name="bookmark" style={{fontSize: 26, color: Colors.primary}} />
        ),
        drawerLabel: () => (
          <Text style={styles.detailsText}>{strings.MyAddress}</Text>
        ),
        header: null,
      };
    },
  },

  [ROUTS.Profile]: {
    screen: ProfileScreen,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Icon name="person" style={{fontSize: 26, color: Colors.primary}} />
        ),
        drawerLabel: () => (
          <Text style={styles.detailsText}>{strings.MyProfile}</Text>
        ),
        header: null,
      };
    },
  },
  [ROUTS.Notifications]: {
    screen: NotificationsScreen,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Icon
            name="notifications"
            style={{fontSize: 28, color: Colors.primary}}
          />
        ),
        drawerLabel: () => (
          <Text style={styles.detailsText}>{strings.Notifications}</Text>
        ),
        header: null,
      };
    },
  },
  [ROUTS.Languages]: {
    screen: LanguagesScreen,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Icon
            name="translate"
            style={{fontSize: 28, color: Colors.primary}}
          />
        ),
        drawerLabel: () => (
          <Text style={styles.detailsText}>{strings.Language}</Text>
        ),
        header: null,
      };
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Icon name="help" style={{fontSize: 26, color: Colors.primary}} />
        ),
        drawerLabel: () => (
          <Text style={styles.detailsText}>{strings.About}</Text>
        ),
        header: null,
      };
    },
  },
};

const DrawerConfig = {
  drawerPosition: 'left',
  drawerType: 'front',
  initialRouteName: ROUTS.MenuStack,
  // initialRouteName: 'MenuStack',
  // hideStatusBar: 'statusBarAnimation',
  keyboardDismissMode: 'on-drag',
  overlayColor: 1,
  order: [
    ROUTS.MenuStack,
    ROUTS.OrdersStack,
    ROUTS.Notifications,
    ROUTS.Profile,
    ROUTS.AddressStack,
    'About',
  ],
  contentComponent: props => <CustomDrawer {...props} />,
  contentOptions: {
    onItemPress: ({route, focused}) => {
      reactotron.log({route});
    },
  },
};

const DrawerNavigation = createDrawerNavigator(RouteConfigs, DrawerConfig);

export default DrawerNavigation;

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    margin: 18,
  },
  detailsText: {
    fontSize: 18,
    margin: 10,
    marginVertical: 14,
  },
  logOutImage: {
    width: 36,
    height: 36,
    position: 'absolute',
    top: 255,
  },
  logOutText: {
    fontSize: 22,
    top: 270,
    color: '#c70d3a',
  },
});
