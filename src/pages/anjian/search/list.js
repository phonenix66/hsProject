import React, { Component } from 'react'
import {
  View, Text, StyleSheet, Dimensions,
  TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchModal from './searchBar';
import { Loading } from '../../../base/Loading';

const width = Dimensions.get('window').width;


export default class SearchListPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '案件查询',
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
      ),
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('showSearchModal')}>
          <View style={styles.searchButton}>
            <Icon name="md-search" style={styles.actionButtonIcon}></Icon>
          </View>
        </TouchableOpacity>
      )
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      searchName: '',
      mode: 1,
      smallApplyDate: '',
      bigApplyDate: ''
    }
  }
  componentDidMount() {
    this.props.navigation.setParams({ showSearchModal: this._toggleModal });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={[styles.textWrap, styles.textIndex]}>
            <Text style={styles.topItem}>序号</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>查获日期</Text>
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
          <View style={styles.textWrap}>
            <Text style={styles.topItem}>结案日期</Text>
          </View>
        </View>
        <View style={styles.body}>

        </View>
        <SearchModal {...this.state}
          _toggleModal={this._toggleModal}
          _smallApplyDate={this._smallApplyDate}
          _bigApplyDate={this._bigApplyDate} />
      </View>
    )
  }
  _toggleModal = (opts) => {
    if (opts.flag) {
      console.log('发送查询参数');
    }
    this.setState({ isModalVisible: !this.state.isModalVisible });
    //Loading.show();
    console.log(opts);
  }
  _smallApplyDate = (date) => {
    this.setState({
      smallApplyDate: date
    })
  }
  _bigApplyDate = (date) => {
    this.setState({
      bigApplyDate: date
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
  searchButton: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    //height: 22,
    color: 'white'
  },

})