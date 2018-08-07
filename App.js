import React from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './src/pages/home/home';
import { DetailsScreen } from './src/pages/details/details';
import Login from './src/pages/login/login';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }
  render() {
    return <Login />;
  }
  componentDidMount() {
    this.setState({ num: 1 }, () => {
      console.log(this.state.num);
    })
  }
}
