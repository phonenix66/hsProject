import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet, Image, Dimensions,
  FlatList
} from 'react-native';
import { fetchRequest } from '../../../services/httpServices';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
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
      data: []
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
          <FlatList
            data={this.state.data}
            renderItem={this._renderList}
            keyExtractor={this._setIndex} removeClippedSubviews disableVirtualization>
          </FlatList>
          <ActionButton buttonColor="rgba(231,76,60,1)"
            size={34} active={false} position="right" offsetX={10} offsetY={20}>
            <ActionButton.Item buttonColor='#9b59b6' onPress={() => { }}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' onPress={() => { }}>
              <Icon name="md-download" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </View>
    )
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
    this.props.navigation.navigate('NewCase', {
      data: item
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
})