import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const updateUser = async (
  firstName,
  surName,
  phone,
  email,
  image,
  id,
) => {
  const User = new Parse.User();
  const query = new Parse.Query(User);

  const user = await query.get(id);
  console.log({firstName});
  console.log({surName});
  user.set('username', String(phone));
  user.set('email', String(email));
  user.set('firstName', String(firstName));
  user.set('surName', String(surName));
  if (image.fileName && image.data) {
    user.set('image', new Parse.File(image.fileName, {base64: image.data}));
  }
  console.log('saving');
  return user.save();
};

export const getTypes = async () => {
  const Menu = Parse.Object.extend('Menu');
  const query = new Parse.Query(Menu);

  return query.find();
};
