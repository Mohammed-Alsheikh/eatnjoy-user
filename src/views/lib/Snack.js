import React from 'react';
import {Snackbar, Text} from 'react-native-paper';
import reactotron from 'reactotron-react-native';
import Colors from '../styles';

export default ({visible, onDismiss, children}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      style={{backgroundColor: '#fff'}}>
      <Text>{children}</Text>
    </Snackbar>
  );
};
