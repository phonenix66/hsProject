import React from 'react';
import { View, Text, StyleSheet, Button, BackHandler, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import moment from 'moment';
const width = Dimensions.get('window').width;

export default class CaseDetailsPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.data.name,
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
      data: this.props.navigation.state.params.data
    }
    console.log(this.props.navigation.state.params.data);
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.pop();
      return true;
    });
  }

  render() {
    let data = this.state.data;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>填报单位</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.name}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>查获日期</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.riverName}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>查获地点(水域)</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.passCard}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>船名/船号</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.lnumber}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>查获船舶(机具)类型</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.address}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>违法类别</Text>
            <Text style={[styles.text, styles.txtLeft]}>{moment(data.timeLimitStart).format('YYYY-MM-DD') + ' 至 ' + moment(data.timeLimitEnd).format('YYYY-MM-DD')}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>业主姓名</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.typeShip}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>身份证号</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.workPower}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>采(运)砂总量(吨) </Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.owner}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>没收违法所得数额(万元) </Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.coordinate}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>是否拆除和没收采砂机具</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.money}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>罚款数额(万元)</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.supervision}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>是否没收采砂船舶</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.mistake ? '有' : '无'}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>结案日期</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.name}：{data.phone}</Text>
          </View>
        </ScrollView>
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
    backgroundColor: '#fff'
  },
  lineItem: {
    flex: 1,
    flexDirection: 'row',

  },
  text: {
    flex: 1,
    lineHeight: 34,
    borderRightWidth: 1,
    borderRightColor: '#e2e2e2',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    height: 34,
    fontSize: 10
  },
  txtRight: {
    textAlign: 'right',
    paddingRight: 12,
  },
  txtLeft: {
    textAlign: 'left',
    paddingLeft: 12,
  }
})
