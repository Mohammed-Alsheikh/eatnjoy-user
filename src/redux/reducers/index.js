import {combineReducers} from 'redux';
import app from './app';
import menu from './menu';
import cart from './cart';
import address from './address';
import lang from './lang';

export default combineReducers({
  app,
  address,
  lang,
  menu,
  cart,
});
