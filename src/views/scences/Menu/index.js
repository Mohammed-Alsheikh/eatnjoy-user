import Component from './Component';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  menu: state.menu.value,
  lang: state.lang.value,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
