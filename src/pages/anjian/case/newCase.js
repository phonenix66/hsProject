import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, Picker } from 'react-native';
import Orientation from 'react-native-orientation';
import DatePicker from 'react-native-datepicker';
import Button from '../../../base/Button';
import { fetchRequest } from '../../../services/httpServices';

const width = Dimensions.get('window').width;

export default class NewCasePage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '采砂违法信息录入',
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
  constructor(props) {
    super(props);
    this.state = {
      seizedDate: '',
      closeDate: '',
      name: '',
      type: 0,
      confiscationEquipment: 1,
      confiscationShip: 1,
      weight: '',
      seizedPlace: '',
      shipNo: '',
      status: 0
    }
  }
  componentDidMount() {
    Orientation.lockToLandscape();
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.boxer}>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>查获日期</Text>
                </View>
                <View style={styles.wrInput}>
                  <DatePicker
                    style={{ width: '100%', marginTop: 6, marginRight: 0, }}
                    date={this.state.seizedDate}
                    mode="date"
                    androidMode="spinner"
                    placeholder=" "
                    format="YYYY-MM-DD"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    customStyles={{
                      dateInput: {
                        marginLeft: 0,
                        borderWidth: 0,
                        paddingLeft: 10,
                        borderBottomWidth: 0,
                        alignItems: 'flex-start'
                      }
                    }}
                    onDateChange={(date) => { this.setState({ seizedDate: date }) }}
                  />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>结案日期</Text>
                </View>
                <View style={styles.wrInput}>
                  <DatePicker
                    style={{ width: '100%', marginTop: 6, marginRight: 0, }}
                    date={this.state.closeDate}
                    mode="date"
                    androidMode="spinner"
                    format="YYYY-MM-DD"
                    placeholder=" "
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    customStyles={{
                      dateInput: {
                        marginLeft: 0,
                        borderWidth: 0,
                        paddingLeft: 10,
                        borderBottomWidth: 0,
                        alignItems: 'flex-start'
                      }
                    }}
                    onDateChange={(date) => { this.setState({ closeDate: date }) }}
                  />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>业主姓名</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ name: text })} />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>类型</Text>
                </View>
                <View style={styles.wrInput}>
                  <Picker
                    selectedValue={this.state.type}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                    <Picker.Item label="请选择" value="0" />
                    <Picker.Item label="自采自运式采砂船" value="2" />
                    <Picker.Item label="小型吸砂船" value="3" />
                    <Picker.Item label="采砂工程船（链斗、抓斗）" value="4" />
                    <Picker.Item label="吸砂王" value="5" />
                    <Picker.Item label="钻探泵" value="6" />
                    <Picker.Item label="吹砂平台" value="7" />
                    <Picker.Item label="吊机" value="8" />
                    <Picker.Item label="挖机" value="9" />
                    <Picker.Item label="运砂船" value="10" />
                  </Picker>
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>是否拆除和没收采砂机具</Text>
                </View>
                <View style={styles.wrInput}>
                  <Picker selectedValue={this.state.confiscationEquipment}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ confiscationEquipment: itemValue })}>
                    <Picker.Item label="是" value="1" />
                    <Picker.Item label="否" value="0" />
                  </Picker>
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>罚款数额(万元)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ fineAmount: text })}
                    underlineColorAndroid='transparent'
                    keyboardType="numeric" />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>采(运)砂总量(吨)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ weight: text })}
                    underlineColorAndroid='transparent'
                    keyboardType="numeric" />
                </View>
              </View>
            </View>
            <View style={styles.boxer}>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>查获地点(水域)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ seizedPlace: text })}
                    underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>船名船号</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ shipNo: text })}
                    underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>身份证号</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ code: text })}
                    underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>违法类型</Text>
                </View>
                <View style={styles.wrInput}>
                  <Picker selectedValue={this.state.status}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}>
                    <Picker.Item label="请选择" value="0" />
                    <Picker.Item label="违法采砂" value="12" />
                    <Picker.Item label="违法运砂" value="13" />
                    <Picker.Item label="未按指定地点集中停靠" value="14" />
                  </Picker>
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>是否没收采砂船舶</Text>
                </View>
                <View style={styles.wrInput}>
                  <Picker selectedValue={this.state.confiscationShip}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ confiscationShip: itemValue })}>
                    <Picker.Item label="是" value="1" />
                    <Picker.Item label="否" value="0" />
                  </Picker>
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>没收违法所得数额(万元)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ seizureAmount: text })}
                    keyboardType="numeric"
                    underlineColorAndroid='transparent' />
                </View>
              </View>
            </View>

          </View>
          <View style={styles.subBtn}>
            <Button text="提交" onPress={this._saveData}></Button>
          </View>
        </View>
      </ScrollView>
    )
  }
  _saveData = () => {
    console.log({ ...this.state });
    fetchRequest('api/saveData', 'POST', { ...this.state })
      .then((res) => {
        console.log(res);
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
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    //flexDirection: 'row',
  },
  boxer: {
    flex: 1,
  },
  itemWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
  },
  wrLabel: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 15,
    //alignItems: 'center',
    //backgroundColor: 'red'
  },
  wrInput: {
    flex: 4,
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 15,
  },
  input: {
    //borderBottomWidth: 0,
    paddingLeft: 10
  },
  subBtn: {
    width: width - 200,
    marginLeft: 100,
    marginTop: 10,
    marginBottom: 20,
  },
})
