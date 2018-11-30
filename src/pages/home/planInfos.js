import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, BackHandler, TouchableOpacity, Image } from 'react-native';

const width = Dimensions.get('window').width;
export default class PlanInfosPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.planName,
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
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.pop();
      return true;
    });
  }
  render() {
    let data = this.state.data;
    const coordinates = data.coordinates.split(',');
    const coordPlaceAction = new Map([
      [1, ['北京54']],
      [2, ['西安80']],
      [3, ['大地2000']],
      [4, ['WGS-84']]
    ]);
    const result = [];
    for (let i = 0, len = coordinates.length; i < len; i += 2) {
      result.push(coordinates.slice(i, i + 2));
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>所在县(市)区</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.city}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>可采区名称</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.gathername}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>年控制开采量</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.yeargathernum}({data.yeargatherNumType === 1 ? '万吨' : 'm³'})</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>开采控制高程</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.elevation}(米)</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>控制作业时间</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.day}(天)</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>船舶（机具）控制数量艘（辆）</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.boatnum}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>开采方式</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.style === 1 ? '水采' : '旱采'}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>坐标系</Text>
            <Text style={[styles.text, styles.txtLeft]}>{coordPlaceAction.get(data.coordPlace)}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.coorsWrap, styles.txtRight]}>坐标</Text>
            <View style={styles.coorsWrap}>
              {
                result.map((item, index) => {
                  return <Text style={styles.coorsStyle} key={index}>{item.join(',')}</Text>
                })
              }
            </View>
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
    fontSize: 10
  },
  txtLeft: {
    textAlign: 'left',
    paddingLeft: 12,
  },
  coorsWrap: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#e2e2e2',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    paddingRight: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
  coorsStyle: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 10
  }
})