import React, { Component } from 'react'
import { View, StyleSheet, Text, Picker, TouchableOpacity, TextInput, PixelRatio } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
export default class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: this.props.isModalVisible,
      searchName: this.props.searchName,
      mode: 1,
      smallApplyDate: '',
      bigApplyDate: ''
    }
  }
  render() {
    return (
      <Modal isVisible={this.props.isModalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>输入查询条件</Text>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.searchBox}>
              <View style={styles.boxInput}>
                <View style={styles.boxInputHeader}>
                  <View style={styles.viewForText}>
                    <Text style={styles.topTxt}>搜索查询</Text>
                  </View>
                  <View style={styles.viewForTextInput}>
                    <TextInput style={styles.topInput}
                      underlineColorAndroid='transparent'
                      onChangeText={(text) => this.setState({ searchName: text })} />
                  </View>

                </View>
              </View>
              <View style={{ height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4' }} />
              <View style={styles.boxTime}>
                <View style={styles.viewForBoxTime}>
                  <View style={styles.pickerBox}>
                    <Picker
                      selectedValue={this.state.mode}
                      style={{ height: 50, width: '100%' }}
                      onValueChange={(itemValue, itemIndex) => this.setState({ mode: itemValue })}>
                      <Picker.Item label="上报日期" value="1" />
                      <Picker.Item label="查获日期" value="2" />
                      <Picker.Item label="结案日期" value="3" />
                    </Picker>
                  </View>
                  <View style={styles.timeBox}>
                    <DatePicker
                      style={{ width: '100%', marginTop: 6, marginRight: 0, }}
                      date={this.state.smallApplyDate}
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
                          justifyContent: 'center'
                        }
                      }}
                      onDateChange={(date) => { this._smallApplyDate(date) }}
                    />
                  </View>
                  <View style={styles.timeBox}>
                    <DatePicker
                      style={{ width: '100%', marginTop: 6, marginRight: 0, }}
                      date={this.state.bigApplyDate}
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
                          justifyContent: 'center',
                          alignContent: 'center',
                        },
                        dateText: {
                          textAlign: 'center'
                        }
                      }}
                      onDateChange={(date) => { this._bigApplyDate(date) }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.modalFooter}>
            <View style={styles.modalWrapper}>
              <TouchableOpacity onPress={this._toggleModal}
                style={[styles.modalFooterButton, styles.modalRightLine]}>
                <View style={{ padding: 5 }}>
                  <Text>取消</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._searchOptions} style={styles.modalFooterButton}>
                <View style={{ padding: 5 }}>
                  <Text>查询</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
  _toggleModal = () => {
    this.props._toggleModal({ flag: false });
  }
  _smallApplyDate = (date) => {
    this.setState({
      smallApplyDate: date
    })
    this.props._smallApplyDate(date);
  }
  _bigApplyDate = (date) => {
    this.setState({
      bigApplyDate: date
    })
    this.props._bigApplyDate(date)
  }
  _searchOptions = () => {
    console.log({ ...this.state })
    this.props._toggleModal({ flag: true, ...this.state });
  }
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalHeader: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalTitle: {
    fontSize: 14,
  },
  modalBody: {
    padding: 10,
  },
  modalFooter: {
    height: 35,
    width: '100%'
  },
  modalWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  modalRightLine: {
    borderRightWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalFooterButton: {
    flex: 1,
    borderTopWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  boxInput: {
    height: 40,
    marginBottom: 10,
  },
  boxInputHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  viewForText: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  topTxt: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)'
  },
  topInput: {
    paddingLeft: 10,
  },
  viewForTextInput: {
    flex: 4,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0.5,
    borderRadius: 4
  },
  boxTime: {
    height: 50,
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  viewForBoxTime: {
    flex: 1,
    flexDirection: 'row',
  },
  pickerBox: {
    flex: 2
  },
  timeBox: {
    flex: 3
  }
})