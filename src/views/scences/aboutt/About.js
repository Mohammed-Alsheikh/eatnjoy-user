import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackActions} from 'react-navigation';

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _loginHandler = () => {
    const pushAction = StackActions.push({
      routeName: 'LogOut',
      params: {},
    });

    this.props.navigation.dispatch(pushAction);
  };

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../assets/img/home.jpg')}
            style={styles.background}>
            <Icon
              name="arrow-back"
              style={styles.backIcon}
              onPress={this._loginHandler}
            />
            <Icon name="menu" style={styles.menuIcon} />
            <Image
              source={require('../../assets/logo/LOGO.png')}
              style={styles.logoImage}
            />
            <View>
              <Text style={styles.Text1}> عن كل وتهنى</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.Text2}>
                React component that wraps the platform DrawerLayout (Android
                only). The Drawer (typically used for navigation) is rendered
                with renderNavigationView and direct children are the main view
                (where your content goes). The navigation view is initially not
                visible on the screen, but can be pulled in from the side of the
                window specified by the drawerPosition prop and its width can be
                set by the drawerWidth prop.
              </Text>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  Text1: {
    alignSelf: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },
  Text2: {
    fontSize: 22,
    color: 'white',
    padding: 8,
    margin: 30,
  },
  logoImage: {
    alignSelf: 'center',
    width: '50%',
    maxHeight: '26%',
  },
  backIcon: {
    fontSize: 32,
    color: 'white',
    position: 'absolute',
    left: 12,
    top: 8,
  },
  menuIcon: {
      fontSize:33,
      color:'white',
      position:'absolute',
      right:4
  }
});
