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
import moment from 'moment';
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
    this.navParams = this.props.navigation.state.params.data;
    //console.log(this.navParams);
    this.state = {
      name: this.navParams ? this.navParams.name : '',
      riverName: this.navParams ? this.navParams.riverName : '',
      passCard: this.navParams ? this.navParams.passCard : '',
      lnumber: this.navParams ? this.navParams.lnumber.toString() : '',
      address: this.navParams ? this.navParams.address : '',
      timeLimitStart: this.navParams ? (this.navParams.timeLimitStart) : '',
      timeLimitEnd: this.navParams ? (this.navParams.timeLimitEnd) : '',
      typeShip: this.navParams ? this.navParams.typeShip : '',
      workPower: this.navParams ? this.navParams.workPower.toString() : '',
      owner: this.navParams ? this.navParams.owner : '',
      coordinate: this.navParams ? this.navParams.coordinate : '',
      money: this.navParams ? this.navParams.money.toString() : '',
      supervision: this.navParams ? this.navParams.supervision : '',//监管
      mistake: this.navParams ? this.navParams.mistake : false,
      dutyPersonName: this.navParams ? this.navParams.dutyPersonName : '',
      phone: this.navParams ? this.navParams.phone : ''
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
                value={this.state.name}
                onChangeText={(text) => { this.setState({ name: text }) }}
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
                value={this.state.riverName}
                onChangeText={(text) => { this.setState({ riverName: text }) }}
              />
              <Fumi
                label={'许可证编号'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.passCard}
                onChangeText={(text) => { this.setState({ passCard: text }) }}
              />
              <Fumi
                label={'许可采量（万吨/m³）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.lnumber}
                onChangeText={(text) => { this.setState({ lnumber: text }) }}
              />
              <Fumi
                label={'许可具体地点'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.address}
                onChangeText={(text) => { this.setState({ address: text }) }}
              />
              <View>
                <Text style={styles.limitTitle}>许可期限</Text>
                <View style={styles.limitSelect}>
                  <DatePicker
                    style={{ width: 180, marginTop: 6, marginRight: 10, }}
                    date={this.state.timeLimitStart ? moment(this.state.timeLimitStart) : ''}
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
                    date={this.state.timeLimitEnd ? moment(this.state.timeLimitEnd) : ''}
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
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.typeShip}
                onChangeText={(text) => { this.setState({ typeShip: text }) }}
              />
              <Fumi
                label={'采砂功率（KW）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.workPower}
                onChangeText={(text) => { this.setState({ workPower: text }) }}
              />
              <Fumi
                label={'采砂业主'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.owner}
                onChangeText={(text) => { this.setState({ owner: text }) }}
              />
              <Fumi
                label={'坐标'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.coordinate}
                onChangeText={(text) => { this.setState({ coordinate: text }) }}
              />
              <Fumi
                label={'砂石资源矿业权出让收益征收（万元）'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.money}
                onChangeText={(text) => { this.setState({ money: text }) }}
              />
              <Fumi
                label={'现场监管单位'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.supervision}
                onChangeText={(text) => { this.setState({ supervision: text }) }}
              />
              <View style={styles.switchWrap}>
                <Text style={styles.labelTxt}>采砂业主有无违规采砂行为</Text>
                <Switch
                  onValueChange={this._toggleSwitch}
                  value={this.state.mistake}
                />
                <Text style={styles.labelTxt}>
                  {this.state.mistake === false ? '无' : '有'}
                </Text>
              </View>
              <Fumi
                label={'现场监管责任人'}
                labelStyle={{ color: '#a3a3a3' }}
                inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
                iconClass={FontAwesomeIcon}
                iconName={'university'}
                iconColor={'#0079cc'}
                iconSize={15}
                value={this.state.dutyPersonName}
                onChangeText={(text) => { this.setState({ dutyPersonName: text }) }}
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