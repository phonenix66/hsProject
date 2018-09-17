import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NineListView } from './NineListView';
import Orientation from 'react-native-orientation';
const dataSource = require('./data.json');

const width = Dimensions.get('window').width;

export default class MainPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '河道采砂违法案件管理系统',
      headerStyle: {
        backgroundColor: '#0079cc',
        height: 30
      },
      headerTitleStyle: {
        fontSize: 10,
        color: '#fff',
        width: width - 150,
        textAlign: 'center'
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
    Orientation.lockToPortrait();
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