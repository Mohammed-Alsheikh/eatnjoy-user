import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Title} from 'react-native-paper';
import Colors, {width} from '../../styles';
import {connect} from 'react-redux';
import {setPayroll} from '../../../redux/actions';
import reactotron from 'reactotron-react-native';

const Payroll = ({nextStep, total, setPayroll}) => {
  const chipping = 5;

  const submit = () => {
    if (total === 0) {
      return;
    }

    setPayroll(total + chipping);
    nextStep();
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{'Sub total:'}</Text>
        <Text style={styles.val}>{`${total} QR`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{'Shipping fee:'}</Text>
        <Text style={styles.val}>{`${chipping} QR`}</Text>
      </View>
      <View style={styles.div} />
      <View style={styles.row}>
        <Text style={styles.text}>{'Total:'}</Text>
        <Text style={styles.val}>{`${total + chipping} QR`}</Text>
      </View>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={submit}>
        <Title style={{fontSize: 18, color: Colors.primary, lineHeight: 18}}>
          {'NEXT'}
        </Title>
      </TouchableOpacity>
    </View>
  );
};

const WIDTH = width - 24;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 12,
    width: WIDTH,
    marginHorizontal: 12,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  div: {
    alignSelf: 'stretch',
    marginVertical: 4,
    height: 1.2,
    borderRadius: 1,
    backgroundColor: '#fff',
  },
  row: {
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
  val: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
  },
});

export default connect(
  null,
  dispatch => ({
    setPayroll: payroll => setPayroll(dispatch, payroll),
  }),
)(Payroll);
