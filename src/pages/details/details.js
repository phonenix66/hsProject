import React from 'react';
import { View, Text, StyleSheet, Button, BackHandler, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import moment from 'moment';
const width = Dimensions.get('window').width;

export default class DetailsScreen extends React.Component {
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
            <Image source={require('../../assets/img/back.png')} style={{ width: 20, height: 20 }} />
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
            <Text style={[styles.text, styles.txtRight]}>采砂项目名称</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.sandpro_name}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>河流名称</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.river_name}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>许可证编号</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.permissionCard_no}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>许可采量（万吨/m³）</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.liscense_production}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>许可具体地点</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.perm_place}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>许可期限</Text>
            {/* <Text style={[styles.text, styles.txtLeft]}>{moment(data.timeLimitStart).format('YYYY-MM-DD') + ' 至 ' + moment(data.timeLimitEnd).format('YYYY-MM-DD')}</Text> */}
            <Text style={[styles.text, styles.txtLeft]}>{data.liscense_period}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>许可船舶</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.ship_name}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>采砂功率（KW）</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.sand_extraction_power}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>采砂业主</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.liscense_person}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>坐标</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.coordinates}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>砂石资源矿业权出让收益征收（万元）</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.benifit}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>现场监管单位（自动）</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.department}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>采砂业主有无违规采砂行为</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.mistake ? '有' : '无'}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>现场监管责任人（人名及电话）</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.person}：{data.phone}</Text>
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
