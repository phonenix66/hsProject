import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
export default class CaseListPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '案件查询',
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
            <Image source={require('../../../assets/img/back.png')} style={{ width: 20, height: 20 }} />
          </View>
        </TouchableOpacity>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>1</Text>
        </View>
        <View style={styles.wrapper}>
          <Text>2</Text>
        </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
  }
})