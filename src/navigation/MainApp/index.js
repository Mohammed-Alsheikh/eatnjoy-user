import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from '../../views/scences/home/Component'
import AuthScreen from '../../views/scences/Auth';
import RegisterScreen from '../../views/scences/Auth/createAccount/CreateAccount'
import AboutScreen from '../../views/scences/about/About'
import SignScreen from "../../views/scences/Auth/signIn/SignIn";
import  DrawerScreen from '../../views/scences/Auth/Component'

import DrawerNavigation from './DrawerNavigation';

const RouteConfigs = {
    Auth: {
        screen: AuthScreen,
        navigationOptions: () => {
            return ({
                header: (null)
            })
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: () => {
            return ({
                header: (null)
            })
        }
    },
    SignIn: {
        screen: SignScreen,
        navigationOptions: () => {
            return ({
                header: (null)
            })
        }
    }, 
};


const StackNavigatorConfig = {
    headerLayoutPreset: 'center',
    initialRouteName: "Auth",
};

const MainApp = createStackNavigator(RouteConfigs, StackNavigatorConfig)

export default DrawerNavigation;