import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, FlatList, Image } from 'react-native';
import { fetchRequest } from '../../services/httpServices';
import moment from 'moment';
import ActionButton from 'react-native-action-button';
/* import Icon from 'C:/Users/zyp-l/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-native-vector-icons/Ionicons'; */
import Icon from 'react-native-vector-icons/Ionicons';
import { Loading } from '../../base/Loading';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
    //this.props.navigation.state.
    this.state = {
      data: [],
      total: 0,
      moneyAll: 0
    }
  }

  /* goback() {
    const { navigate, goBack, state } = this.props.navigation;
    state.params.callback();
    this.props.navigation.goBack();
  } */

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
            <Text style={styles.bItem}>{item.index || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.name || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.lnumber || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.timeLimit || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.typeShip || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.owner || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.money || ''}</Text>
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
  transNewSite = () => {
    this.props.navigation.navigate('NewSite', {
      getSaveData: this.getSaveData.bind(this)
    });
  }
  /*保存返回调用*/
  getSaveData(value) {
    //console.log(value);
    /* this.setState(function (prevState, props) {
      let [...prevData] = prevState.data;
      prevData.push(value);
      console.log(prevData);
      return {
        data: []
      }
    }) */
    Loading.show();
    fetchRequest('api/statisticsList', 'POST')
      .then(res => {
        Loading.hidden();
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
      })
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
            keyExtractor={this._setIndex} removeClippedSubviews disableVirtualization>
          </FlatList>
          {/* Rest of the app comes ABOVE the action button component !*/}
          <ActionButton buttonColor="rgba(231,76,60,1)"
            size={34} active={false} position="right" offsetX={10} offsetY={20}>
            <ActionButton.Item buttonColor='#9b59b6' onPress={this.transNewSite}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' onPress={() => { }}>
              <Icon name="md-download" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
        <View style={styles.footer}>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 3 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>许可采量（万吨/m³）总值</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 2 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>{this.state.total || 0}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 6 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>砂石资源矿业权出让收益征收（万元）总值</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap, { flex: 2 }]}>
            <Text style={[styles.bItem, styles.textBlue]}>{this.state.moneyAll.toFixed(2) || 0}</Text>
          </View>
        </View>
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
  actionArea: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 330,
    height: 330,
    borderRadius: 15,
    backgroundColor: 'red'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
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
