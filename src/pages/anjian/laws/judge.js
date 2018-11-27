import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Orientation from 'react-native-orientation';
import PhotoView from 'react-native-photo-view';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class JudgePage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '裁量标准',
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
  }
  render() {
    return (
      <PhotoView
        source={require('../../../assets/img/biaozhun.jpg')}
        minimumZoomScale={1}
        maximumZoomScale={4}
        androidScaleType="centerInside"
        onLoad={() => console.log("Image loaded!")}
        style={styles.backgroundImage} />
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
  backgroundImage: {
    flex: 1,
    width: width,
    height: null
  }
})