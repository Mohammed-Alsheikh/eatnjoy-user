import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure({host: '192.168.1.180'})
  .use(reactotronRedux()) //  <- here i am!
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

reactotron.clear();

export default reactotron;
