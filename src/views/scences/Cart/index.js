import Component from './Component';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  cart: state.cart,
  lang: state.lang.value,
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
