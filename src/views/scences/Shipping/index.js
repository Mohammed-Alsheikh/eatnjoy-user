import Component from './Component';
import {connect} from 'react-redux';
import {ClearCart} from '../../../redux/actions';

const mapStateToProps = state => ({
  cart: state.cart,
  location: state.address.location,
  addressInfo: state.address.addressInfo,
});

export default connect(
  mapStateToProps,
  {ClearCart},
)(Component);
