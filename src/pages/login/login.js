import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, PixelRatio, ImageBackground } from 'react-native';
import Orientation from 'react-native-orientation';
import { Toast } from '../../base/Toast';
import { fetchRequest } from '../../services/httpServices';
import axios from 'axios';
export default class Login extends Component {
  componentDidMount() {
    Orientation.lockToLandscape();
  }
  login = () => {
    if (!this.state.username || !this.state.password) {
      Toast.show('用户名或者密码不能为空');
    }
    fetch('http://10.6.181.71:8000/api/loginService')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        //return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
    /* fetch("https://api.douban.com/v2/book/1220562")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      }) */
    /* fetchRequest('api/loginService', 'GET').then(res => {
      if (res.status) {
        console.log(res.statusInfo.message);
      }
    }) */
  }
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      showCancel: false
    }
  }
  render() {
    return this._renderCance();
  }
  _renderCance = () => {
    if (!this.state.showCancel) {
      return (
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={styles.container}>
          <View style={styles.inner}>
            <Text style={styles.title}>湖北省河道采砂违法案件管理信息系统</Text>
            <View>
              <TextInput style={[styles.input, styles.username]}
                placeholder="请输入用户名"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ username: text })} />
            </View>
            <View style={{ height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4' }} />
            <View>
              <TextInput style={[styles.input, styles.password]}
                placeholder="密码" password={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({ password })}></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={{ color: '#fff', fontSize: 14 }}>登录</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    //resizeMode: Image.resizeMode.cover
  },
  inner: {

  },
  title: {
    fontSize: 15,
    color: '#0d6ba9',
    marginTop: -50,
    marginBottom: 30,
  },
  input: {
    borderColor: '#19a2f3',
    fontSize: 10,
    height: 36,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  username: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  password: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  button: {
    paddingVertical: 6,
    backgroundColor: '#17a2f3',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  }
});