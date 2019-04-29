// import NavigationStack from './NavigationStack';
//
// const AppNavigator = NavigationStack;
//
// export default AppNavigator;

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login';

const RootStack = createStackNavigator(
  {
    Login: { screen: Login },
  }, {
    initialRouteName: 'Login'
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
