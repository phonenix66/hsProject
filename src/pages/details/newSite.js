import React, { Component } from 'react'
import {
  View, ScrollView, Text, Image, StyleSheet,
  Dimensions, BackHandler, TouchableOpacity, Switch
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import CheckBox from 'react-native-checkbox-heaven';
import Button from '../../base/Button';
import { Loading } from '../../base/Loading';
import { fetchRequest } from '../../services/httpServices';
import DatePicker from 'react-native-datepicker';
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
    this.state = {
      name: '',
      riverName: '',
      passCard: '',
      lnumber: '',
      address: '',
      timeLimitStart: '',
      timeLimitEnd: '',
      typeShip: '',
      workPower: '',
      owner: '',
      coordinate: '',
      money: '',
      supervision: '',//监管
      mistake: 0,
      dutyPersonName: '',
      phone: '',
      //data: this.props.navigation.state.params.data
    }
    //console.log(this.props.navigation.state.params.data);
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.pop();
      return true;
    });
  }
  _toggleSwitch = () => {
    if (this.state.mistake === 0) {
      this.setState({ mistake: 1 })
    } else {
      this.setState({ mistake: 0 })
    }
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
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ name: text }) }}
              />
              <Fumi
                style={styles.input}
                label={'河流名称'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                onChangeText={(text) => { this.setState({ riverName: text }) }}
              />
              <Fumi
                label={'许可证编号'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ passCard: text }) }}
              />
              <Fumi
                label={'许可采量（万吨/m³）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ lnumber: text }) }}
              />
              <Fumi
                label={'许可具体地点'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ address: text }) }}
              />
              {/* <Fumi
                label={'许可期限'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
              /> */}
              <View>
                <Text style={styles.limitTitle}>许可期限</Text>
                <View style={styles.limitSelect}>
                  <DatePicker
                    style={{ width: 180, marginTop: 6, marginRight: 10, }}
                    date={this.state.timeLimitStart}
                    mode="date"
                    androidMode="spinner"
                    placeholder="许可期限开始"
                    format="YYYY-MM-DD"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    customStyles={{
                      dateInput: {
                        marginLeft: 0,
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: '#a3a3a3'
                      }
                    }}
                    onDateChange={(date) => { this.setState({ timeLimitStart: date }) }}
                  />
                  <DatePicker
                    style={{ width: 180, marginTop: 6, marginRight: 10, }}
                    date={this.state.timeLimitEnd}
                    mode="date"
                    androidMode="spinner"
                    placeholder="许可期限结束"
                    format="YYYY-MM-DD"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    customStyles={{
                      dateInput: {
                        marginLeft: 0,
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: '#a3a3a3'
                      }
                    }}
                    onDateChange={(date) => { this.setState({ timeLimitEnd: date }) }}
                  />
                </View>

              </View>

              <Fumi
                label={'许可船舶'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ typeShip: text }) }}
              />
              <Fumi
                label={'采砂功率（KW）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ workPower: text }) }}
              />
              <Fumi
                label={'采砂业主'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ owner: text }) }}
              />
              <Fumi
                label={'坐标'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ coordinate: text }) }}
              />
              <Fumi
                label={'砂石资源矿业权出让收益征收（万元）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ money: text }) }}
              />
              <Fumi
                label={'现场监管单位'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ supervision: text }) }}
              />
              {/* <Fumi
                label={'采砂业主有无违规采砂行为'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ mistake: text }) }}
              /> */}
              <View style={styles.switchWrap}>
                <Text style={styles.labelTxt}>采砂业主有无违规采砂行为</Text>
                <Switch
                  onValueChange={this._toggleSwitch}
                  value={this.state.mistake === 0 ? false : true}
                />
                <Text style={styles.labelTxt}>
                  {this.state.mistake === 0 ? '无' : '有'}
                </Text>
              </View>
              <Fumi
                label={'现场监管责任人'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                onChangeText={(text) => { this.setState({ dutyPersonName: text }) }}
              />
              <Fumi
                label={'现场监管责任人电话'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#0079cc', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
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
  saveHandle = () => {
    Loading.show();
    fetchRequest('api/saveData', 'POST', { ...this.state }).then((res) => {
      if (res.status === 0) {
        Loading.hidden();
        this.props.navigation.state.params.getSaveData({ ...this.state });
        this.props.navigation.goBack();
      }
    }).catch(err => {
      console.log(err);
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
  limitSelect: {
    flex: 1,
    flexDirection: 'row',
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
  }
}) 