import React, {Fragment, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Title, Text, Paragraph} from 'react-native-paper';

const ACTIVE = require('../../assets/img/checked.png');

const Step = ({active, children}) => {
  if (active >= children) {
    return (
      <Image
        source={ACTIVE}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.step}
      />
    );
  }

  return (
    <View style={styles.step}>
      <Text style={{fontWeight: '500', fontSize: 18, color: '#fff'}}>
        {children}
      </Text>
    </View>
  );
};

export default ({active}) => {
  const [middle, setMiddle] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={{color: '#fff', lineHeight: 42, fontSize: 24}}>
          {'My Cart'}
        </Title>
      </View>
      <View
        style={styles.body}
        onLayout={e => setMiddle(e.nativeEvent.layout.height / 2)}>
        <View style={{...styles.line, top: middle}} />
        {['1', '2', '3'].map((step, index) => (
          <Step active={active}>{step}</Step>
        ))}
      </View>
      <View style={styles.text}>
        {['Preview', 'Shipping', 'Complete'].map(e => (
          <Text style={{color: '#fff'}}>{e}</Text>
        ))}
      </View>
    </View>
  );
};

const stepSize = 30;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 24,
    marginBottom: 0,
  },
  header: {
    backgroundColor: '#8B7C67',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  step: {
    backgroundColor: '#C4C5C9',
    width: stepSize,
    height: stepSize,
    borderRadius: stepSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#C4C5C9',
    height: 2,
    width: '100%',
    position: 'absolute',
    marginHorizontal: 24,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 24,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
