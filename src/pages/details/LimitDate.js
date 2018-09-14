import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
export default class LimitDateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLimitStart: '',
      timeLimitEnd: ''
    }
  }
  render() {
    const { componentID, num, timeStart, timeEnd } = this.props;
    return (
      <View style={styles.container}>
        <DatePicker
          style={{ width: 180, marginTop: 6, marginRight: 10, }}
          date={timeStart ? moment(timeStart) : ''}
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
          onDateChange={(date) => { this.props.timeStartChange(date, componentID) }}
        />
        <DatePicker
          style={{ width: 180, marginTop: 6, marginRight: 10, }}
          date={timeEnd ? moment(timeEnd) : ''}
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
          onDateChange={(date) => { this.props.timeEndChange(date, componentID) }}
        />
        {(num === 0) ?
          (<TouchableOpacity onPress={this.addComponent}>
            <View style={styles.buttonWrap}>
              <Icon name="md-add" style={[styles.actionButtonIcon, { color: '#cdcdcd' }]}></Icon>
            </View>
          </TouchableOpacity>) : (<TouchableOpacity onPress={() => this.deleteComponent(componentID)}>
            <View style={styles.buttonWrap}>
              <Icon name="md-trash" style={styles.actionButtonIcon}></Icon>
            </View>
          </TouchableOpacity>)
        }

      </View>
    )
  }

  addComponent = () => {
    this.props.addComponent();
  }
  deleteComponent = (componentID) => {
    //console.log(componentID);
    this.props.deleteComponent(componentID)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonWrap: {
    width: 32,
    height: 32,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'white'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 20,
    color: '#FF6347'
  },
})