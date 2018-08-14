import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
import { fetchRequest } from '../../services/httpServices';
import moment from 'moment';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '2018年河道采砂许可项目统计表（统计时段：XXX年X月至XXX年X月）',
    headerTitleStyle: {
      fontSize: 10,
      color: '#fff',
      alignSelf: 'center',
      textAlign: 'center',
      width: '100%'

    },
    headerStyle: {
      backgroundColor: '#0079cc',
      height: 30
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      moneyAll: 0
    }
  }
  componentDidMount() {
    fetchRequest('api/statisticsList', 'POST')
      .then(res => {
        this.setState({ data: res.body });
        let total = 0, moneyAll = 0;
        res.body.forEach(item => {
          total += item.lnumber;
          moneyAll += item.money;
        })
        this.setState({
          total: total,
          moneyAll: moneyAll
        })
      }).catch(err => {
        console.log(err);
      })
  }
  _renderList = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.transDetails({ item })}>
        <View style={styles.top}>
          <View style={[styles.textWrap, styles.textIndex, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.index}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.name}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.lnumber}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{moment(item.timeLimit).format('YYYY-MM-DD')}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.typeShip}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.owner}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.money}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  _setIndex = (item, index) => {
    return item.index.toString()
  }
  transDetails = (item) => {
    this.props.navigation.navigate('Details', {
      data: item
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={[styles.textWrap, styles.textIndex]}>
            <Text style={styles.topItem}>序号</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>采砂项目名称</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>许可采量（万吨/m³）</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>许可期限</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>许可船舶</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>采砂业主</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>砂石资源矿业权出让收益征收（万元）</Text>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderList}
            keyExtractor={this._setIndex}>
          </FlatList>
        </View>
        <View style={styles.footer}>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 3 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>许可采量（万吨/m³）总值</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 2 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>{this.state.total}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 6 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>砂石资源矿业权出让收益征收（万元）总值</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 2 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>{this.state.moneyAll.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textIndex: {
    flex: 1
  },
  textWrap: {
    flex: 2,
    //height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ebfd',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#bfd6ff',
  },
  topItem: {
    //flex: 1,
    //width: '100%',
    fontSize: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  footer: {
    height: 40,
    flexDirection: 'row',
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1,
  },
  textViewWrap: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#fff'
  },
  bItem: {
    fontSize: 10,
    color: '#3f3f3f'
  },
  textBlue: {
    color: '#0366d6'
  }
})
