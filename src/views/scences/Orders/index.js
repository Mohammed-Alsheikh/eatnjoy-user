import Component from './Component';
import {connect} from 'react-redux';

export default connect(
  state => ({lang: state.lang, user: state.app.user}),
  null,
)(Component);
