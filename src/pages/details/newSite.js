import React, { Component } from 'react'
import {
  View, ScrollView, Text, Image, StyleSheet,
  Dimensions, BackHandler, TouchableOpacity, Switch, Picker, AsyncStorage, Alert
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import Button from '../../base/Button';
import { Loading } from '../../base/Loading';
import { fetchRequest } from '../../services/httpServices';

import LimitDateComponent from './LimitDate';
import CoordinateComponent from './coordinate';

const width = Dimensions.get('window').width;
export default class NewSite extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: '新增采砂河道',
      headerStyle: {
        backgroundColor: '#0079cc',
        height: 30
      },
      headerTitleStyle: {
        fontSize: 10,
        color: '#fff',
        //width: width - 150,
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
    this.navParams = this.props.navigation.state.params.data;
    console.log(this.navParams);

    this.state = {
      sandpro_name: this.navParams ? this.navParams.sandpro_name : '',
      river_name: this.navParams ? this.navParams.river_name : '',
      permissionCard_no: this.navParams ? this.navParams.permissionCard_no + '' : '',
      liscense_production: this.navParams ? (this.navParams.liscense_production + '') : '',
      liscense_production_type: this.navParams ? (this.navParams.liscense_production_type + '') : '1',
      perm_place: this.navParams ? this.navParams.perm_place : '',
      ship_name: this.navParams ? this.navParams.ship_name : '',
      sand_extraction_power: this.navParams ? (this.navParams.sand_extraction_power + '') : '',
      liscense_person: this.navParams ? this.navParams.liscense_person : '',
      coordinates: this.navParams ? this.navParams.coordinates : '',
      benifit: this.navParams ? this.navParams.benifit + '' : '',
      mistake: this.navParams ? this.navParams.mistake : false,
      department: this.navParams ? this.navParams.department : '',
      person: this.navParams ? this.navParams.person : '',
      phone: this.navParams ? this.navParams.phone : '',
      longitude: [],//经度
      latitude: [],//纬度
      liscense_period: '',
      dateComponentArray: [],
      points: [],
      permissionid: this.navParams ? (this.navParams.permissionid + '') : "0" //新增更新id
    }
    if (this.navParams && this.navParams.liscense_period) {
      const liscense_period = this.navParams.liscense_period.split(',');
      this.state.dateComponentArray = liscense_period.map((item, index) => {
        return {
          id: 'component' + index,
          num: index,
          timeStart: item.split('~')[0],
          timeEnd: item.split('~')[1]
        }
      })
    } else {
      this.state.dateComponentArray = [{
        id: "component0",
        num: 0,
        timeStart: '',
        timeEnd: ''
      }]
    }
    if (this.state.coordinates) {
      const coordinates = this.state.coordinates.split(',');
      const longitude = [];
      const latitude = [];
      coordinates.forEach((a, i) => {
        if (i % 2 === 0) {
          longitude.push(a);
        } else {
          latitude.push(a);
        }
      })
      this.state.longitude = longitude;
      this.state.latitude = latitude;
      this.state.points = longitude.map((a, i) => {
        return {
          id: 'point' + i,
          num: i,
          jdlong: a,
          wdlat: latitude[i]
        }
      })
    } else {
      this.state.points = [{
        id: 'point0',
        num: 0,
        jdlong: '',
        wdlat: ''
      }]
    }
    //console.log(this.props.navigation.state.params.data);
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.pop();
      return true;
    });
  }
  _toggleSwitch = () => {
    this.setState(prevState => {
      return {
        mistake: !prevState.mistake
      }
    })
  }
  addSubComponent = () => {
    const dateComponent = this.state.dateComponentArray;
    if (dateComponent.length === 2) {
      alert('最多添加2个许可期限');
      return;
    }
    const newDateComponent = dateComponent.concat({
      id: "component" + (dateComponent.length),
      num: dateComponent.length,
      timeStart: '',
      timeEnd: ''
    })
    this.setState({
      dateComponentArray: newDateComponent
    })
    console.log("父组件回调+++++");
  }
  deleteSubComponent = (componentID) => {
    const dateComponent = this.state.dateComponentArray;
    const newDateComponent = dateComponent.filter(item => {
      return item.id !== componentID;
    })
    this.setState({
      dateComponentArray: newDateComponent
    })
    console.log("父组件-----", componentID);
  }
  timeStartChange = (date, componentID) => {
    const dateComponent = this.state.dateComponentArray;
    dateComponent.forEach(item => {
      if (item.id === componentID) {
        item.timeStart = date;
      }
    })
    this.setState({
      dateComponentArray: dateComponent
    })
  }
  timeEndChange = (date, componentID) => {
    const dateComponent = this.state.dateComponentArray;
    dateComponent.forEach(item => {
      if (item.id === componentID) {
        item.timeEnd = date;
      }
    })
    this.setState({
      dateComponentArray: dateComponent
    })
    console.log(this.state.dateComponentArray);
  }
  addPoint = () => {
    const points = this.state.points;
    const newPoints = points.concat({
      id: "point" + (points.length),
      num: points.length,
      jdlong: '',
      wdlat: ''
    })
    this.setState({
      points: newPoints
    })
  }
  deletePoint = (pointID) => {
    const points = this.state.points;
    const newPoints = points.filter(item => {
      return item.id !== pointID;
    })
    this.setState({
      points: newPoints
    });
  }
  pointJDchange = (text, pointID) => {
    const points = this.state.points;
    points.forEach(item => {
      if (item.id === pointID) {
        item.jdlong = text;
      }
    });
    this.setState({
      points: points
    })
  }
  pointWDchange = (text, pointID) => {
    const points = this.state.points;
    points.forEach(item => {
      if (item.id === pointID) {
        item.wdlat = text;
      }
    });
    this.setState({
      points: points
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.boxer}>
              <Fumi
                label={'采砂项目名称'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.sandpro_name}
                onChangeText={(text) => { this.setState({ sandpro_name: text }) }}
              />
              <Fumi
                style={styles.input}
                label={'河流名称'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.river_name}
                onChangeText={(text) => { this.setState({ river_name: text }) }}
              />
              <Fumi
                label={'许可证编号'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.permissionCard_no}
                onChangeText={(text) => { this.setState({ permissionCard_no: text }) }}
              />
              <Fumi
                keyboardType={'numeric'}
                label={'许可采量'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.liscense_production}
                onChangeText={(text) => { this.setState({ liscense_production: text }) }}
              />
              <View style={styles.pickerWrap}>
                <View style={styles.pickerTxt}>
                  <Text>采砂量单位</Text>
                </View>
                <View style={styles.pickerSelect}>
                  <Picker
                    selectedValue={this.state.liscense_production_type}
                    style={{ height: 40, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ liscense_production_type: itemValue })}>
                    <Picker.Item label="吨" value="1" />
                    <Picker.Item label="立方米" value="0" />
                  </Picker>
                </View>
              </View>
              <Fumi
                label={'许可具体地点'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.perm_place}
                onChangeText={(text) => { this.setState({ perm_place: text }) }}
              />
              <View>
                <Text style={styles.limitTitle}>许可期限</Text>
                {
                  this.state.dateComponentArray.map((item, index) => {
                    return <LimitDateComponent key={index}
                      componentID={item.id}
                      num={item.num}
                      timeStart={item.timeStart}
                      timeEnd={item.timeEnd}
                      timeStartChange={this.timeStartChange}
                      timeEndChange={this.timeEndChange}
                      addComponent={this.addSubComponent}
                      deleteComponent={this.deleteSubComponent} />
                  })
                }
              </View>

              <Fumi
                label={'许可船舶'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.ship_name}
                onChangeText={(text) => { this.setState({ ship_name: text }) }}
              />
              <Fumi
                keyboardType={'numeric'}
                label={'采砂功率（KW）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.sand_extraction_power}
                onChangeText={(text) => { this.setState({ sand_extraction_power: text }) }}
              />
              <Fumi
                label={'采砂业主'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.liscense_person}
                onChangeText={(text) => { this.setState({ liscense_person: text }) }}
              />
              {
                this.state.points.map((a, i) => {
                  return <CoordinateComponent key={i}
                    longitude={a.jdlong}
                    latitude={a.wdlat}
                    pointID={a.id}
                    num={a.num}
                    addComponent={this.addPoint}
                    deleteComponent={this.deletePoint}
                    pointJDchange={this.pointJDchange}
                    pointWDchange={this.pointWDchange}
                  />
                })
              }
              <Fumi
                keyboardType={'numeric'}
                label={'砂石资源矿业权出让收益征收（万元）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.benifit}
                onChangeText={(text) => { this.setState({ benifit: text }) }}
              />
              <Fumi
                label={'现场监管单位'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.department}
                onChangeText={(text) => { this.setState({ department: text }) }}
              />
              {/* <View style={styles.switchWrap}>
                <Text style={styles.labelTxt}>采砂业主有无违规采砂行为</Text>
                <Switch
                  onValueChange={this._toggleSwitch}
                  value={this.state.mistake}
                />
                <Text style={styles.labelTxt}>
                  {this.state.mistake === false ? '无' : '有'}
                </Text>
              </View> */}
              <Fumi
                label={'现场监管责任人'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.person}
                onChangeText={(text) => { this.setState({ person: text }) }}
              />
              <Fumi
                label={'现场监管责任人电话'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.phone}
                onChangeText={(text) => { this.setState({ phone: text }) }}
              />
              <View style={styles.footer}>
                <Button text="提交" onPress={this.saveHandle} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
  validateItem = (data) => {
    const { sandpro_name, river_name, permissionCard_no, liscense_production, perm_place, ship_name, sand_extraction_power, liscense_person, longitude, latitude, person, phone, department, benifit } = data;
    const flag = false;
    if (!sandpro_name) {
      this.alertHadnle('请输入采砂项目名称');
      return flag;
    } else if (!river_name) {
      this.alertHadnle('请输入河流名称');
      return flag;
    } else if (!permissionCard_no) {
      this.alertHadnle('请输入许可证编号');
      return flag;
    } else if (!liscense_production) {
      this.alertHadnle('请输入许可采量');
      return flag;
    } else if (!perm_place) {
      this.alertHadnle('请输入许可具体地点');
      return flag;
    } else if (!ship_name) {
      this.alertHadnle('请输入许可船舶');
      return flag;
    } else if (!sand_extraction_power) {
      this.alertHadnle('请输入采砂功率');
      return flag;
    } else if (!liscense_person) {
      this.alertHadnle('请输入采砂业主');
      return flag;
    } else if (!longitude) {
      this.alertHadnle('请输入经度');
      return flag;
    } else if (!latitude) {
      this.alertHadnle('请输入纬度');
      return flag;
    } else if (!benifit) {
      this.alertHadnle('请输入砂石资源矿业权出让收益');
      return flag;
    } else if (!department) {
      this.alertHadnle('请输入现场监管单位');
      return flag;
    } else if (!person) {
      this.alertHadnle('请输入现场监管责任人');
      return flag;
    } else if (!phone) {
      this.alertHadnle('请输入现场监管责任人电话');
      return flag;
    }
    return true;
  }
  alertHadnle = (text) => {
    Alert.alert(
      '提示',
      text,
      [
        { text: '确定', onPress: () => { } }
      ]);
  }
  saveHandle = () => {
    const { sandpro_name, river_name, permissionCard_no, liscense_production, liscense_production_type, perm_place, ship_name, sand_extraction_power, liscense_person, benifit, department, person, phone, dateComponentArray, coordinates, longitude, latitude, permissionid } = this.state;
    const saveData = {
      sandpro_name,
      river_name,
      permissionCard_no,
      liscense_production: liscense_production,
      liscense_production_type: Number(liscense_production_type),
      perm_place,
      ship_name,
      sand_extraction_power: Number(sand_extraction_power),
      liscense_person,
      benifit,
      department,
      person,
      phone,
      coordinates,
      permissionid
    }

    const flag = this.validateItem(this.state);
    const dateList = dateComponentArray.map(item => {
      if (item.timeStart && item.timeEnd) {
        return item.timeStart + '~' + item.timeEnd
      }
    })
    const pointsList = this.state.points.map(item => {
      if (item.jdlong && item.wdlat) {
        return [item.jdlong, item.wdlat].join(',')
      }
    })
    console.log(pointsList.join(','));
    if (!flag) {
      return;
    }
    if (dateList.length === 0) {
      this.alertHadnle('请输入许可期限');
      return;
    }
    if (pointsList.length === 0) {
      this.alertHadnle('请输入至少一组经纬度');
      return;
    }
    console.log('保存验证', flag, this.state);
    saveData.liscense_period = dateList.join(',');
    saveData.coordinates = pointsList.join(',');
    Loading.show();
    AsyncStorage.getItem('userInfo', (error, result) => {
      Object.assign(saveData, JSON.parse(result));
      fetchRequest('rest/SavePermissionJson', 'POST', saveData).then((res) => {
        if (res.status === 0) {
          Loading.hidden();
          this.props.navigation.state.params.getSaveData(saveData);
          this.props.navigation.goBack();
        }
      }).catch(err => {
        console.log(err);
      })
    })
  }
  transData = (data) => {
    this.setState({
      data: data
    })
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
    backgroundColor: '#fff'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxer: {
    width: '60%',
  },
  footer: {
    marginTop: 12,
    marginBottom: 10,
  },
  limitTitle: {
    marginTop: 6
  },
  pickerWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  pickerTxt: {
    flex: 1
  },
  pickerSelect: {
    flex: 3,
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 6
  },
  switchWrap: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'space-between',
  },
  labelTxt: {
    marginTop: 5,
    marginRight: 12
  },

}) 