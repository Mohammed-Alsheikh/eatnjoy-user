import Component from './Component';
import {connect} from 'react-redux';
import {addToCart} from '../../../redux/actions';

const mapStateToProps = state => ({
  lang: state.lang.value,
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
  addToCart: meal => dispatch(addToCart(meal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
