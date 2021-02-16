import Component from './Component';
import {connect} from 'react-redux';
import {setUser} from '../../../redux/actions';

export default connect(
  state => ({user: state.app.user}),
  {setUser},
)(Component);
