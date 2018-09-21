import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import PageListView from 'react-native-page-listview';
import Orientation from 'react-native-orientation';
import moment from 'moment';
import { fetchRequest } from '../../../services/httpServices';
const width = Dimensions.get('window').width;
export default class SuperviseListPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '案件督办',
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
    Orientation.lockToLandscape();
    this.state = {
      data: [],
      selectItem: null,
      storage: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={[styles.textWrap, styles.textIndex]}>
            <Text style={styles.topItem}>序号</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>督办单位</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>通知时间</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>上传时间</Text>
          </View>
        </View>
        <View style={styles.body}>
          <PageListView
            pageLen={1500}
            extraData={this.state}
            renderRow={this._renderList}
            refresh={this._refresh}
            loadMore={this._loadMore}
          ></PageListView>
        </View>
      </View>
    )
  }
  _renderList = (item, index) => {
    return (
      <TouchableOpacity onPress={() => { this.showActionSelect(item) }}>
        <View style={[styles.top, styles.itemBg, (this.state.selectItem && this.state.selectItem.superviseId === item.superviseId) ? styles.selected : null]}>
          <View style={[styles.textWrap, styles.textIndex, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.index || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{item.involveUnitName || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{moment(item.spreadTime).format('YYYY-MM-DD') || ''}</Text>
          </View>
          <View style={[styles.textWrap, styles.textViewWrap]}>
            <Text style={styles.bItem}>{moment(item.uploadTime).format('YYYY-MM-DD') || ''}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  showActionSelect = (item) => {
    this.setState({
      selectItem: item
    });
    this.props.navigation.navigate('SuperviseDetails', {
      data: item
    })
  }
  _refresh = (callBack) => {
    AsyncStorage.getItem('userInfo', (error, result) => {
      if (error) {
        console.log("error ===>", error);
      };
      this.setState({
        storage: JSON.parse(result)
      });
      console.log("案件督办===>", JSON.parse(result));
      const { employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyIdadmindivname, roleid } = this.state.storage;
      fetchRequest('rest/ShowSuperListJson', 'POST', {
        employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyIdadmindivname, roleid
      })
        .then(res => {
          console.log("案件督办了", res);
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
    const { employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyIdadmindivname, roleid } = this.state.storage;
    fetchRequest('rest/ShowSuperListJson', 'POST', {
      employeeName, nativePlaceProvinceId, nativePlaceCityId, nativePlaceCountyIdadmindivname, roleid
    }).then(res => {
      if (res.status === 0) {
        const data = res.row.map((item, i) => {
          item.index = this.state.data.length + i + 1;
          return item;
        })
        callBack(data);
        this.setState(prevState => {
          return {
            data: prevState.data.concat(data),
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
