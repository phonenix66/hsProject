import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Image, Alert } from 'react-native';
import { fetchRequest } from '../../services/httpServices';
import moment from 'moment';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Loading } from '../../base/Loading';
import PageListView from 'react-native-page-listview';
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
    this.state = {
      data: [],
      total: 0,
      moneyAll: 0,
      showAction: false,
      selectItem: null
    }
  }

  componentDidMount() {
    /* fetchRequest('api/statisticsList', 'POST')
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
        callBack(res.body);
      }).catch(err => {
        console.log(err);
      }) */
  }

  showActionSelect = (item) => {
    console.log(item);
    this.setState(prevState => {
      return {
        selectItem: item,
        showAction: !prevState.showAction
      }
    })
  }
  _setIndex = (item, index) => {
    return item.index.toString()
  }
  transDetails = (item) => {
    console.log(item);
    if (!item) return;
    this.props.navigation.navigate('Details', {
      data: item
    });
  }
  transNewSite = (flag) => {
    this.props.navigation.navigate('NewSite', {
      getSaveData: this.getSaveData.bind(this),
      data: !flag ? this.state.selectItem : null
    });
  }
  deleteItem = () => {
    if (this.state.selectItem && this.state.showAction) {
      const itemId = this.state.selectItem.id;
      Alert.alert(
        '提示',
        '确定要删除此项许可',
        [
          {
            text: '取消', onPress: () => { },
            text: '确定', onPress: () => {
              Loading.show();
              fetchRequest('api/deleteItem', 'POST', { id: itemId })
                .then(res => {
                  Loading.hidden();
                  console.log(res);
                }).catch(err => {
                  console.log(err);
                })
            }
          }
        ]
      )
    }
  }
  /*保存返回调用*/
  getSaveData(value) {
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
  resetActionButton = () => {
    this.setState(prevState => {
      if (prevState.showAction) {
        return {
          selectItem: null,
          showAction: false
        }
      }
    })
  }
  _renderList = (item, index) => {
    return (
      <TouchableOpacity onPress={() => this.showActionSelect(item)}>
        <View style={[styles.top, styles.itemBg, (this.state.selectItem && this.state.selectItem.id === item.id) ? styles.selected : null]}>
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
            <Text style={styles.bItem}>{moment(item.timeLimitStart).format('YYYY-MM-DD') || ''}</Text>
            <Text style={styles.bItem}>
              {'至' + moment(item.timeLimitEnd).format('YYYY-MM-DD') || ''}
            </Text>
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
  _refresh = (callBack) => {
    fetchRequest('api/statisticsList', 'POST', {
      page: 1,
      name: 'admin'
    })
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
        callBack(res.body);
      }).catch(err => {
        console.log(err);
      })
  }
  _loadMore = (page = 2, callBack) => {
    fetchRequest('api/statisticsList', 'POST', {
      page: page,
      name: 'admin'
    }).then(res => {
      if (res.status === 0) {
        let total = 0, moneyAll = 0;
        res.body.forEach(item => {
          total += item.lnumber;
          moneyAll += item.money;
        })
        callBack(res.body);
        this.setState(prevState => {
          return {
            data: prevState.data.concat(res.body),
            total: prevState.total + total,
            moneyAll: prevState.moneyAll + moneyAll
          }
        })
      }

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
          {/* <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={this._renderList}
            keyExtractor={this._setIndex} removeClippedSubviews disableVirtualization>
          </FlatList> */}
          <PageListView
            pageLen={15}
            extraData={this.state}
            renderRow={this._renderList}
            refresh={this._refresh}
            loadMore={this._loadMore}
          ></PageListView>
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
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)"
          size={30} active={this.state.showAction}
          resetToken={() => this.resetActionButton()}
          position="right"
          onReset={() => this.resetActionButton()}
          offsetX={10} offsetY={26} spacing={6}
        >
          <ActionButton.Item buttonColor='#00BFFF' onPress={() => this.transNewSite(true)}>
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' onPress={() => this.transNewSite(false)}>
            <Icon name="md-create" style={styles.actionButtonIcon}></Icon>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3CB371'
            onPress={() => this.transDetails(this.state.selectItem)}>
            <Icon name="md-eye" style={styles.actionButtonIcon}></Icon>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FF0000' onPress={this.deleteItem}>
            <Icon name="md-trash" style={styles.actionButtonIcon}></Icon>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' onPress={() => { }}>
            <Icon name="md-download" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
    backgroundColor: '#e0ebfd'
  },
  textIndex: {
    flex: 1
  },
  textWrap: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#bfd6ff',
  },
  topItem: {
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
  },
  actionButtonIcon: {
    fontSize: 14,
    height: 16,
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
    borderColor: '#e2e2e2'
  },
  bItem: {
    fontSize: 10,
    color: '#3f3f3f'
  },
  textBlue: {
    color: '#0366d6'
  },
  selected: {
    backgroundColor: '#dcdcdc'
  },
  itemBg: {
    backgroundColor: '#fff'
  }
})
