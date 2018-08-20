import React from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { router } from './src/router/config';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const RootStack = createStackNavigator({
  ...router
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }
  render() {
    return <RootStack />;
  }
}
