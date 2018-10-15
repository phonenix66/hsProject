import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';
export default class CoordinateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: '',
      latitude: ''
    }
  }
  render() {
    const { pointID, longitude, latitude, num } = this.props;
    return (
      <View style={styles.coordinate}>
        <View style={styles.itemCoor}>
          <Fumi
            keyboardType={'numeric'}
            label={'经度'}
            labelStyle={{ color: '#a3a3a3' }}
            inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#0079cc'}
            iconSize={15}
            value={longitude}
            onChangeText={(text) => { this.props.pointJDchange(text, pointID) }}
          />
        </View>
        <View style={styles.itemCoor}>
          <Fumi
            keyboardType={'numeric'}
            label={'纬度'}
            labelStyle={{ color: '#a3a3a3' }}
            inputStyle={{ color: '#000000', borderBottomWidth: 1, borderColor: '#a3a3a3', }}
            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#0079cc'}
            iconSize={15}
            value={latitude}
            onChangeText={(text) => { this.props.pointWDchange(text, pointID) }}
          />
        </View>
        {(num === 0) ? (<TouchableOpacity onPress={this.addComponent}>
          <View style={styles.buttonWrap}>
            <Icon name="md-add" style={[styles.actionButtonIcon, { color: '#cdcdcd' }]}></Icon>
          </View>
        </TouchableOpacity>) : (<TouchableOpacity onPress={() => this.deleteComponent(pointID)}>
          <View style={styles.buttonWrap}>
            <Icon name="md-trash" style={styles.actionButtonIcon}></Icon>
          </View>
        </TouchableOpacity>)

        }
      </View>
    )
  }
  addComponent = () => {
    this.props.addComponent();
  }
  deleteComponent = (pointID) => {
    console.log(pointID);
    this.props.deleteComponent(pointID);
  }
}


const styles = StyleSheet.create({
  coordinate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCoor: {
    flex: 1,
  },
  buttonWrap: {
    width: 32,
    height: 32,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#ffffff'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 20,
    color: '#FF6347'
  },
})