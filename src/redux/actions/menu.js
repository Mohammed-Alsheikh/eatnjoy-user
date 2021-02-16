import ACTION_TYPES from '../constants';
import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const getMenu = dispatch => () => {
  const Menu = Parse.Object.extend('Menu');
  const query = new Parse.Query(Menu);

  return query
    .find()
    .then(menus => {
      dispatch({
        type: ACTION_TYPES.SET_MENU,
        payload: menus.map(menu => {
          return {
            name: menu.get('name'),
            submenu: {},
          };
        }),
      });
      menus.forEach((menu, i) => {
        menu
          .relation('submenu')
          .query()
          .each(submenu => {
            dispatch({
              type: ACTION_TYPES.SET_SUBMENU,
              payload: {
                index: i,
                item: {[submenu.get('name')]: []},
              },
            });

            submenu
              .relation('meals')
              .query()
              .each(meal => {
                dispatch({
                  type: ACTION_TYPES.SET_MEAL,
                  payload: {
                    index: i,
                    submenu: submenu.get('name'),
                    item: meal,
                  },
                });
              });
          });
      });
    })
    .catch(e => reactotron.log(e));
};
