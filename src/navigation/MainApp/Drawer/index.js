/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Content, Container} from 'native-base';
import {Text, Title} from 'react-native-paper';
import Image from 'react-native-fast-image';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {height} from '../../../views/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions';
import {SwitchActions} from 'react-navigation';
import reactotron from 'reactotron-react-native';
import strings from '../../../localization';

const CustomDrawer = props => {
  const {logout, navigation, user, lang, setAr, setEn} = props;

  return (
    <Container>
      <ImageBackground
        source={require('../../../views/assets/img/drawer.jpg')}
        style={styles.header}
        resizeMode="cover"
        resizeMethod="resize">
        <Title style={{fontSize: 26, color: '#BBAA8E'}}>
          {user?.username || ''}
        </Title>
        <Text style={{color: '#BBAA8E'}}>{user?.email || ''}</Text>
      </ImageBackground>
      <ImageBackground
        source={require('../../../views/assets/img/register.jpg')}
        style={styles.background}>
        <Content>
          <DrawerNavigatorItems {...props} />
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Image
              source={require('../../../views/assets/img/Screenshot.png')}
              style={styles.image}
            />
            <View style={{marginTop: 12}}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    strings.PickLanguage,
                    '',
                    [
                      {
                        text: strings.English,
                        onPress: () => {
                          strings.setLanguage('en');
                          setEn();
                        },
                      },
                      {
                        text: strings.Arabic,
                        onPress: () => {
                          strings.setLanguage('ar');
                          setAr();
                        },
                      },
                      {
                        text: strings.OK,
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                      },
                    ],
                    {cancelable: false},
                  );
                }}
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 12,
                  marginBottom: 12,
                  alignItems: 'center',
                }}>
                <Icon
                  name="translate"
                  style={{
                    color: '#680014',
                    fontSize: 28,
                    marginRight: 14,
                    width: 32,
                  }}
                />
                <Text style={{color: '#000', fontSize: 18}}>
                  {strings.Language}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    strings.LogOut,
                    '',
                    [
                      {
                        text: strings.OK,
                        onPress: () =>
                          logout() &&
                          navigation.dispatch(
                            SwitchActions.jumpTo({routeName: 'Auth'}),
                          ),
                      },
                      {
                        text: strings.Cancel,
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                      },
                    ],
                    {cancelable: false},
                  );
                }}
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 12,
                  alignItems: 'center',
                }}>
                <Icon
                  name="input"
                  style={{
                    color: '#680014',
                    fontSize: 32,
                    marginRight: 14,
                    width: 32,
                  }}
                />
                <Text style={{color: '#000', fontSize: 18}}>
                  {strings.LogOut}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  );
};

// drawerIcon: () => (
//   <Icon
//     name="translate"
//     style={{fontSize: 28, color: Colors.primary}}
//   />
// ),
// drawerLabel: () => (
//   <Text style={styles.detailsText}>{strings.Language}</Text>
// ),

const styles = StyleSheet.create({
  header: {
    width: null,
    height: 160,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  background: {
    width: null,
    height,
    justifyContent: 'space-between',
  },
  detailText: {
    fontSize: 22,
    fontWeight: '800',
    margin: 8,
  },
  image: {
    width: '100%',
    height: 160,
  },
});

const setAr = () => dispatch => dispatch({type: 'SET_AR'});
const setEn = () => dispatch => dispatch({type: 'SET_EN'});

export default connect(
  state => ({user: state.app.user, lang: state.lang.value}),
  {logout, setAr, setEn},
)(CustomDrawer);
