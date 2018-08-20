import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, TextInput } from 'react-native';
import Orientation from 'react-native-orientation';
import DatePicker from 'react-native-datepicker';

import Button from '../../../base/Button';
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
      huntTime: ''
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
                    style={{ width: 280, marginTop: 6, marginRight: 10, }}
                    date={this.state.huntTime}
                    mode="date"
                    androidMode="spinner"
                    format="YYYY-MM-DD"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    customStyles={{
                      /* dateIcon: {
                        position: 'absolute',
                        right: 4,
                        top: 4,
                        marginLeft: 0
                      }, */
                      dateInput: {
                        marginLeft: 0,
                        borderWidth: 0,
                        borderBottomWidth: 0,
                        alignItems: 'flex-start'
                      }
                    }}
                    onDateChange={(date) => { this.setState({ timeLimitEnd: date }) }}
                  />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>结案日期</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>业主姓名</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>类型</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>是否拆除和没收采砂机具</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>罚款数额(万元)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>采(运)砂总量(吨)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
            </View>
            <View style={styles.boxer}>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>查获地点(水域)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>船名船号</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>身份证号</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>违法类型</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>是否没收采砂船舶</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>
                <View style={styles.wrLabel}>
                  <Text>没收违法所得数额(万元)</Text>
                </View>
                <View style={styles.wrInput}>
                  <TextInput style={styles.input} underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.itemWrap}>

              </View>
            </View>

          </View>
          <View style={styles.subBtn}>
            <Button text="提交"></Button>
          </View>
        </View>
      </ScrollView>
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
  },
  subBtn: {
    width: width - 200,
    marginLeft: 100
  },
})
