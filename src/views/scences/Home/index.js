import Component from './Component';
import {connect} from 'react-redux';
import {addToCart} from '../../../redux/actions';

const mapStateToProps = state => ({lang: state.lang.value});

export default connect(
  mapStateToProps,
  {addToCart},
)(Component);
