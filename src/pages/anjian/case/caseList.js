import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet, Image, Dimensions,
  FlatList, Alert, AsyncStorage
} from 'react-native';
import Orientation from 'react-native-orientation';
import { fetchRequest } from '../../../services/httpServices';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Loading } from '../../../base/Loading';
import { Toast } from '../../../base/Toast';
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
        //width: width - 150,
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
    Orientation.lockToLandscape();
    this.state = {
      data: [],
      selectItem: null,
      showAction: false,
      storage: '',
      pageListView: [{
        componentID: "c_0"
      }]
    }
  }
  componentDidMount() {

  }
  pageToEdit = (flag) => {
    if (flag) {
      this.props.navigation.navigate('NewCase', {
        getSaveData: this.getSaveData.bind(this),
        data: null
      })
    } else {
      if (!this.state.selectItem) {
        this.alertTips();
        return;
      }
      this.props.navigation.navigate('NewCase', {
        getSaveData: this.getSaveData.bind(this),
        data: !flag ? this.state.selectItem : null
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
  /* transNewSite = (flag) => {
    this.props.navigation.navigate('NewCase', {
      getSaveData: this.getSaveData.bind(this),
      data: !flag ? this.state.selectItem : null
    });
  } */

  getSaveData(value) {
    this.setState({
      pageListView: []
    })
    this.setState({
      pageListView: [].concat([{ componentID: "c" + parseInt(Math.random() * 1000) }])
    })
    console.log("保存成功了.");
  }
  _reportedData = () => {
    if (!this.state.selectItem) {
      this.alertTips();
      return;
    }
    const reportedFlag = this.state.selectItem.is_reported;
    if (reportedFlag === 1 || reportedFlag === 3) {
      Alert.alert(
        '提示',
        '案件已经上报到' + ((reportedFlag === 1) ? '区' : '市'),
        [
          { text: '确定', onPress: () => { } }
        ]);
      return;
    }
  }
  deleteItem = () => {
    if (!this.state.selectItem) {
      this.alertTips();
      return;
    }
    const caseid = this.state.selectItem.caseid;
    this._retrieveData().then(result => {
      this.setState({
        storage: JSON.parse(result)
      });
      Alert.alert(
        '提示',
        '确定要删除此案件吗?',
        [
          { text: '取消', onPress: () => { }, style: 'cancel' },
          {
            text: '确定', onPress: () => {
              Loading.show();
              fetchRequest('rest/deleteCaseJson', 'POST', { ...this.state.storage, caseid })
                .then(res => {
                  this.setState({
                    pageListView: []
                  });

                  if (res.status === 0) {
                    Toast.show('删除成功');
                    Loading.hidden();
                    this.setState({
                      pageListView: [{
                        componentID: "c_1"
                      }]
                    })
                  }
                }).catch(err => {
                  console.log(err);
                })
            }
          }
        ]
      )
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
  showActionSelect = (item) => {
    console.log("选中案件", item);
    this.setState(prevState => {
      return {
        selectItem: null,
        showAction: !prevState.showAction
      }
    })
    this.setState({
      selectItem: item
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
          {
            this.state.pageListView.map((item, index) => {
              return <PageListView
                key={index}
                componentID={item.componentID}
                pageLen={1500}
                extraData={this.state}
                renderRow={this._renderList}
                refresh={this._refresh}
                loadMore={this._loadMore}
              ></PageListView>
            })
          }

        </View>
        <ActionButton buttonColor="rgba(231,76,60,1)"
          size={40} active={this.state.showAction} position="right"
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
          <ActionButton.Item buttonColor='#FFA500' onPress={this._reportedData}>
            <Icon name="md-arrow-round-up" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          {/* <ActionButton.Item buttonColor='#3498db' onPress={() => { }}>
            <Icon name="md-download" style={styles.actionButtonIcon} />
          </ActionButton.Item> */}
        </ActionButton>
      </View>
    )
  }
  _renderList = (item, index) => {
    return (
      <TouchableOpacity onPressOut={() => this.showActionSelect(item)}>
        <View style={[styles.top, styles.itemBg, (this.state.selectItem && this.state.selectItem.caseid === item.caseid) ? styles.selected : null]}>
          <View style={[styles.textWrap, styles.textIndex, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.index || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.reportingName || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.seized_place || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.statusname || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.name || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.weight || '0'}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.fine_amount || '0'}</Text>
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
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userInfo');
      if (value !== null) {
        console.log(value);
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  _refresh = (callBack) => {
    this._retrieveData().then(result => {
      this.setState({
        storage: JSON.parse(result)
      });
      console.log("案件上报===>", JSON.parse(result));
      const { employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyId, admindivname, roleid } = this.state.storage;
      fetchRequest('rest/ShowCasenListJson', 'POST', {
        employeeName,
        "organizationName": "",
        "psdwId": "",
        "departmentId": "",
        "idpath": "",
        "firstorgid": "",
        "firstorgidpath": "",
        "nativePlaceProvinceId": this.state.storage.nativePlaceProvinceId + "",
        "nativePlaceCityId": this.state.storage.nativePlaceCityId + "",
        "nativePlaceCountyId": this.state.storage.nativePlaceCountyId + "",
        admindivname,
        roleid
      })
        .then(res => {
          //console.log(res);
          const data = res.row.map((item, i) => {
            item.index = i + 1;
            return item;
          })
          this.setState({ data: data });
          callBack(data);
        }).catch(err => {
          console.log(err);
        })
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