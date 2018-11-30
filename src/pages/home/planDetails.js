import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import PageListView from 'react-native-page-listview';
import Orientation from 'react-native-orientation';
import { fetchRequest } from '../../services/httpServices';
export default class PlanDetailsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log({ navigation });
    return {
      title: navigation.getParam('data')['planName'],
      headerTitleStyle: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'center',
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
    Orientation.lockToLandscape();
    this.state = {
      param: this.props.navigation.state.params.data,
      data: null,
      selectItem: null,
      storage: ''
    }
  }
  _getUserInfo = async () => {
    const result = await AsyncStorage.getItem('userInfo');
    return result;
  }
  showActionSelect = (item) => {
    this.setState({
      selectItem: item
    });
    this.props.navigation.navigate('Infos', {
      data: item,
      planName: this.props.navigation.getParam('data').planName + '第' + item.index + '项'
    })
  }
  _renderList = (item, index) => {
    return (
      <TouchableOpacity onPressOut={() => { this.showActionSelect(item) }}>
        <View style={[styles.top, styles.itemBg, (this.state.selectItem && this.state.selectItem.sid === item.sid) ? styles.selected : null]} >
          <View style={[styles.textWrap, styles.textIndex]}>
            <Text style={styles.bItem}>{item.index}</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.bItem}>{item.city}</Text></View>
          <View style={styles.textWrap}><Text style={styles.bItem}>{item.gathername}</Text></View>
          <View style={styles.textWrap}><Text style={styles.bItem}>{item.elevation}</Text></View>
          <View style={styles.textWrap}><Text style={styles.bItem}>{item.style === 1 ? '水采' : '旱采'}</Text></View>
        </View>
      </TouchableOpacity>
    )
  }
  _refresh = (callBack) => {
    this._getUserInfo().then(result => {
      this.setState({
        storage: JSON.parse(result)
      });
      console.log("规划===>", JSON.parse(result));
      const { employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyId, admindivname, roleid } = this.state.storage;
      const fid = this.state.param.fid;
      fetchRequest('rest/ShowPlanSJson', 'POST', {
        employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyId, admindivname, roleid, fid
      })
        .then(res => {
          if (res.status === -1) return;
          const data = res.row.map((item, i) => {
            item.index = i + 1;
            return item;
          });
          this.setState({ data: data });
          callBack(data);
        }).catch(err => {
          console.log(err);
        })
    });
  }
  _loadMore = (page = 2, callBack) => {
    const { employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyIdadmindivname, roleid } = this.state.storage;
    fetchRequest('rest/ShowPlanSJson', 'POST', {
      employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyIdadmindivname, roleid
    }).then(res => {
      if (res.status === 0) {
        const data = res.row.map((item, i) => {
          item.index = this.state.data.length + i + 1;
          return item;
        });
        callBack(data);
        this.setState(prevState => {
          return {
            data: prevState.data.concat(data),
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
            <Text style={styles.topItem}>所在县（市）区</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>可采区名称</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>开采控制高程（m）</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>开采方式</Text>
          </View>
        </View>
        <View style={styles.body}>
          <PageListView
            pageLen="1500"
            extraData={this.state}
            renderRow={this._renderList}
            refresh={this._refresh}
            loadMore={this._loadMore}
          ></PageListView>
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
    backgroundColor: '#e0ebfd'
  },
  body: {
    flex: 1,
  },
  textViewWrap: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e2e2e2'
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

