import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
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
      isModalVisible: false
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
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>输入查询条件</Text>
            </View>
            <View style={styles.modalBody}></View>
            <View style={styles.modalFooter}>
              <View style={styles.modalWrapper}>
                <TouchableOpacity onPress={this._toggleModal}
                  style={[styles.modalFooterButton, styles.modalRightLine]}>
                  <View>
                    <Text>取消</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._toggleModal} style={styles.modalFooterButton}>
                  <View>
                    <Text>查询</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
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
  modalContent: {
    backgroundColor: "white",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalHeader: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalTitle: {
    fontSize: 14,
  },
  modalBody: {
    padding: 10,
  },
  modalFooter: {
    height: 30,
    width: '100%'
  },
  modalWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  modalRightLine: {
    borderRightWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalFooterButton: {
    flex: 1,
    borderTopWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  }
})