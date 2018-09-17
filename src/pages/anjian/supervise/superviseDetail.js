import React from 'react';
import { View, Text, StyleSheet, Button, BackHandler, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import moment from 'moment';
import Orientation from 'react-native-orientation';
import { boatType, breakType } from '../typeData';

const width = Dimensions.get('window').width;

export default class SuperviseDetailsPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.data.name,
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
      data: this.props.navigation.state.params.data
    }
    console.log(boatType, this.props.navigation.state.params.data);
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.pop();
      return true;
    });
  }

  render() {
    let data = this.state.data;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>单位</Text>
            <Text style={[styles.text, styles.txtLeft]}>{data.reportingName || ''}</Text>
          </View>
          <View style={styles.lineItem}>
            <Text style={[styles.text, styles.txtRight]}>结案日期</Text>
            <Text style={[styles.text, styles.txtLeft]}>{moment(data.close_date).format('YYYY-MM-DD')}</Text>
          </View>
        </ScrollView>
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
    flex: 1,
    backgroundColor: '#fff'
  },
  lineItem: {
    flex: 1,
    flexDirection: 'row',

  },
  text: {
    flex: 1,
    lineHeight: 34,
    borderRightWidth: 1,
    borderRightColor: '#e2e2e2',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    height: 34,
    fontSize: 10
  },
  txtRight: {
    textAlign: 'right',
    paddingRight: 12,
  },
  txtLeft: {
    textAlign: 'left',
    paddingLeft: 12,
  }
})
