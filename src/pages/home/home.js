import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
import { fetchRequest } from '../../services/httpServices';
import moment from 'moment';
const width = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '2018年河道采砂许可项目统计表（统计时段：XXX年X月至XXX年X月）',
    headerTitleStyle: {
      fontSize: 10,
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#0079cc',
      height: 30
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetchRequest('api/statisticsList', 'POST')
      .then(res => {
        this.setState({ data: res.body })
      }).catch(err => {
        console.log(err);
      })
  }
  _renderList = ({ item }) => {
    return (
      <View style={styles.wrap}>
        <Text style={styles.bItem}>{item.name}</Text>
        <Text style={styles.bItem}>{item.lnumber}</Text>
        <Text style={styles.bItem}>{moment(item.timeLimit).format('YYYY-MM-DD')}</Text>
        <Text style={styles.bItem}>{item.typeShip}</Text>
        <Text style={styles.bItem}>{item.owner}</Text>
      </View>
    )
  }
  _setIndex = (item, index) => {
    return item.index.toString()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topItem}>采砂项目名称</Text>
          <Text style={styles.topItem}>许可采量（万吨/m³）</Text>
          <Text style={styles.topItem}>许可期限</Text>
          <Text style={styles.topItem}>许可船舶</Text>
          <Text style={styles.topItem}>采砂业主</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderList}
            keyExtractor={this._setIndex}>
          </FlatList>
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
    height: 40
  },
  topItem: {
    flex: 1,
    backgroundColor: '#e0ebfd',
    fontSize: 10,
    borderBottomWidth: 1,
    color: '#0e6aab',
    borderRightWidth: 1,
    borderColor: '#bfd6ff',
    textAlign: 'center',
    lineHeight: 40
  },
  body: {
    flex: 1,
  },
  bItem: {
    flex: 1,
    fontSize: 10,
    borderBottomWidth: 1,
    color: '#3f3f3f',
    borderRightWidth: 1,
    borderColor: '#e2e2e2',
    textAlign: 'center',
    lineHeight: 40
  },
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  }
})
