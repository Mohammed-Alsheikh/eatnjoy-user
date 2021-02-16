import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Image from 'react-native-fast-image';
import CustomDrawer from './Drawer';

const RouteConfigs = {
  // Auth: {
  //   screen: AuthStack,
  //   navigationOptions: () => {
  //     return {
  //       drawerIcon: () => (
  //         <Image
  //           source={require('../../views/assets/logo/list.png')}
  //           style={styles.image}
  //         />
  //       ),
  //       drawerLabel: () => <Text style={styles.detailsText}>My Orders</Text>,
  //       header: null,
  //     };
  //   },
  // },
  Home: {
    screen: AboutScreen,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Image
            source={require('../../views/assets/logo/help.png')}
            style={styles.image}
          />
        ),
        drawerLabel: () => <Text style={styles.detailsText}>About</Text>,
        header: null,
      };
    },
  },
  LogOut: {
    screen: SignScreen,
    navigationOptions: () => {
      return {
        drawerIcon: () => (
          <Image
            source={require('../../views/assets/logo/logout.png')}
            style={styles.logOutImage}
          />
        ),
        drawerLabel: () => (
          <Text style={styles.logOutText} onPress={this._loginHandler}>
            LogOut
          </Text>
        ),
        header: null,
      };
    },
  },
};

const DrawerConfig = {
  drawerPosition: 'left',
  drawerType: 'front', //back - slide - front
  initialRouteName: 'Home',
  // hideStatusBar: 'statusBarAnimation',
  keyboardDismissMode: 'on-drag',
  overlayColor: 1,
  order: ['Home'],
  contentComponent: props => <CustomDrawer {...props} />,
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
    fontSize: 16,
    margin: 10,
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
  