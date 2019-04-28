import React, {Component} from 'react';
import {View} from 'react-native';
import Navigator from './navigation';

interface Props {}
class App extends Component<Props> {
  render() {
    return (
      <View>
        <Navigator />
      </View>
    );
  }
}

export default App;
