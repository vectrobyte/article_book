import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Account from '../screens/Account';
import ForgotPassword from '../screens/ForgotPassword';

const NavigationStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Dashboard: {
      screen: Dashboard,
    },
    Account: {
      screen: Account,
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(NavigationStack);
