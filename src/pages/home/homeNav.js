import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NineListView } from '../anjian/NineListView';
import Orientation from 'react-native-orientation';
const dataSource = require('./data.json');

export default class HomeNavPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '湖北省河道采砂规划与许可后项目监管信息系统',
      headerTitleStyle: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'center',
      },
      headerStyle: {
        backgroundColor: '#0079cc',
        height: 30
      },
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.pop() }}>
          <View style={styles.backsty}>
            <Image source={require('../../assets/img/back.png')} style={{ width: 20, height: 20 }} />
          </View>
        </TouchableOpacity>
      )
    }
  }
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("main-----横批切换");
    Orientation.lockToLandscape();
  }
  render() {
    console.log(dataSource);
    return (
      <View>
        <NineListView data={dataSource.data} navigation={this.props.navigation}></NineListView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backsty: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  imgStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
})