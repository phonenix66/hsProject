import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
  TextInput, PixelRatio, ImageBackground, AsyncStorage
} from 'react-native';
import Orientation from 'react-native-orientation';
import { Toast } from '../../base/Toast';
import { Loading } from '../../base/Loading';
import { fetchRequest } from '../../services/httpServices';

import Button from '../../base/Button';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showCancel: false,
      storage: null
    }
  }
  componentWillMount() {
    Orientation.lockToLandscape();
  }
  componentDidMount() {
    this.directToLogin();
  }
  directToLogin = async () => {
    const value = await AsyncStorage.getItem('userInfo');
    if (!value) return false;
    const userData = JSON.parse(value);
    if (userData.username && userData.password) {
      this.setState({ showCancel: true });
    }
  }
  login = () => {
    if (!this.state.username || !this.state.password) {
      Toast.show('用户名或者密码不能为空');
      return;
    }
    Loading.show();
    fetchRequest('rest/login', 'POST', {
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      //console.log(res);
      if (res.status === 0) {
        Loading.hidden();
        this._storeData(res).then((value) => {
          console.log(value, 123);
        });
        this.setState({ showCancel: true });
      } else {
        Loading.hidden();
        Toast.show('登录失败');
      }
    }).catch(err => {
      console.log(err);
    })
  }
  _storeData = async (res) => {
    const { employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyId, admindivname, roleid } = res;
    try {
      const va = await AsyncStorage.setItem("userInfo", JSON.stringify({ employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyId, admindivname, roleid, username: this.state.username, password: this.state.password }));

    } catch (error) {
      console.log(error);
    }
  }
  toA = async () => {
    try {
      const value = await AsyncStorage.getItem('userInfo');
      console.log(value);
      if (value) {
        this.props.navigation.navigate('HomeNav');
      }
    } catch (error) {
      console.log(error);
    }
  }
  toB = async () => {
    try {
      const value = await AsyncStorage.getItem('userInfo');
      if (!value) return;
      console.log("b", value);
      this.props.navigation.navigate('Main');
    } catch (error) {
      console.log(error);
    }
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem('userInfo').then(() => {
        this.setState({
          showCancel: false,
          username: '',
          password: ''
        });
      });
    } catch (error) {
      console.log(error);
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
            <Text style={styles.title}>湖北省河道采砂管理信息系统</Text>
            <View>
              <TextInput style={[styles.input, styles.username]}
                placeholder="请输入用户名"
                numberOfLines={1}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ username: text })} />
            </View>
            <View style={{ height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4' }} />
            <View>
              <TextInput style={[styles.input, styles.password]}
                placeholder="密码" password={true}
                numberOfLines={1}
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={{ color: '#fff', fontSize: 13 }}>登录</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )
    } else {
      return (
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={styles.container}>
          <View style={styles.inner}>
            <Text style={styles.title}>入口选择</Text>
          </View>
          <View style={styles.inner}>
            <Button text="湖北省河道采砂规划与许可后项目监管信息系统" onPress={this.toA}></Button>
          </View>
          <View style={styles.inner}>
            <Button text="湖北省河道采砂违法案件管理系统" onPress={this.toB}></Button>
          </View>
          <View style={styles.inner}>
            <Button text="退出系统" onPress={this.logout}></Button>
          </View>
        </ImageBackground>
      );
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
  },
  inner: {
    width: '50%',
    marginTop: 20
  },
  title: {
    fontSize: 15,
    color: '#0d6ba9',
    marginTop: -50,
    marginBottom: 30,
    textAlign: 'center'
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