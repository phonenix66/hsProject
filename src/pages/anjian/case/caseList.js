import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet, Image, Dimensions,
  FlatList, Alert
} from 'react-native';
import { fetchRequest } from '../../../services/httpServices';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Loading } from '../../../base/Loading';
import PageListView from 'react-native-page-listview';

const width = Dimensions.get('window').width;
export default class CaseListPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '案件上报',
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
      data: [],
      selectItem: null,
      showAction: false
    }
  }
  componentDidMount() {
    const serviceName = 'api/statisticsList';
    fetchRequest(serviceName, 'POST', { ...this.state })
      .then(res => {
        this.setState({
          data: res.body
        })
      })
  }
  pageToEdit = (flag) => {
    if (flag) {
      this.props.navigation.navigate('NewCase')
    } else {
      if (!this.state.selectItem) {
        this.alertTips();
        return;
      }
      this.props.navigation.navigate('NewCase', {
        data: this.state.selectItem
      })
    }
  }
  alertTips() {
    Alert.alert(
      '提示',
      '请先选择一条案件',
      [
        { text: '确定', onPress: () => { } }
      ]);
  }
  pageToDetail = () => {
    if (!this.state.selectItem) {
      this.alertTips();
      return;
    }
    this.props.navigation.navigate('CaseDetails', {
      data: this.state.selectItem
    })
  }
  deleteItem = () => {
    if (!this.state.selectItem) {
      this.alertTips();
      return;
    }
    const itemId = this.state.selectItem.id;
    Alert.alert(
      '提示',
      '确定要删除此项许可',
      [
        { text: '取消', onPress: () => { }, style: 'cancel' },
        {
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
  showActionSelect = (item) => {
    this.setState(prevState => {
      return {
        selectItem: item,
        showAction: !prevState.showAction
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
            <Text style={styles.topItem}>填报单位</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>查获地点（水域）</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>违法类别</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>业主姓名</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>采(运)砂总量(吨) </Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>罚款数额(万元)</Text>
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
        <ActionButton buttonColor="rgba(231,76,60,1)"
          size={30} active={this.state.showAction} position="right"
          offsetX={10} offsetY={20} spacing={6}
          resetToken={() => this.resetActionButton()}
          onReset={() => this.resetActionButton()}>
          <ActionButton.Item buttonColor='#00BFFF' onPress={() => { this.pageToEdit(true) }}>
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' onPress={() => { this.pageToEdit(false) }}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3CB371' onPress={this.pageToDetail}>
            <Icon name="md-eye" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FF0000' onPress={this.deleteItem}>
            <Icon name="md-trash" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FFA500' onPress={() => { }}>
            <Icon name="md-arrow-round-up" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' onPress={() => { }}>
            <Icon name="md-download" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
  _renderList = (item, index) => {
    return (
      <TouchableOpacity onPress={() => { this.showActionSelect(item) }}>
        <View style={[styles.top, styles.itemBg, (this.state.showAction && this.state.selectItem.id === item.id) ? styles.selected : null]}>
          <View style={[styles.textWrap, styles.textIndex, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.index || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.name || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.address || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.timeLimitStart || ''}</Text>
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
    this.props.navigation.navigate('NewCase', {
      data: item
    })
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
        callBack(res.body);
        this.setState(prevState => {
          return {
            data: prevState.data.concat(res.body),
          }
        })
      }

    })
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
  },
  top: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#e0ebfd',
  },
  textIndex: {
    flex: 1
  },
  textWrap: {
    flex: 2,
    //height: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
  textViewWrap: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e2e2e2'
  },
  bItem: {
    fontSize: 10,
    color: '#3f3f3f'
  },
  selected: {
    backgroundColor: '#dcdcdc'
  },
  itemBg: {
    backgroundColor: '#fff'
  }
})