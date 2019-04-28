import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Account from '../screens/Account';

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Account: {
      screen: Account,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(RNApp);
