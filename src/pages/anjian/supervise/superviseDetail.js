import React from 'react';
import { View, Text, StyleSheet, Button, BackHandler, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import moment from 'moment';
import Orientation from 'react-native-orientation';
import PhotoView from 'react-native-photo-view';
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
    const details = this.props.navigation.state.params.data;
    const fileName = details.fileName.split(',');
    const fileUrl = details.fileUrl.split(',');
    const filesArr = fileName.map((item, index) => {
      return {
        name: item,
        path: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=205684034,2846006820&fm=173&app=25&f=JPEG?w=639&h=367&s=2DF04D85062222B001A9988A03008012'
      }
    })
    console.log("文件信息", filesArr);
    const imageUrls = filesArr.map(item => {
      return {
        url: item.path
      };
    })
    this.state = {
      data: details,
      files: filesArr,
      imageUrls
    }
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.pop();
      return true;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageWrap}>
            {
              this.state.files.map((item, index) => {
                return <View key={'view' + index}><Text key={'title' + index} style={styles.title}>{item.name}</Text><PhotoView
                  key={index}
                  source={{ uri: item.path }}
                  minimumZoomScale={1}
                  maximumZoomScale={4}
                  androidScaleType="centerInside"
                  onLoad={() => this._loadTitle(index)}
                  onTap={() => this._pageToImageView(index)}
                  style={styles.backgroundImage} /></View>
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
  _pageToImageView = (index) => {
    this.props.navigation.navigate('ImageViewer', {
      data: {
        imageUrls: this.state.imageUrls,
        numIndex: index
      }
    })
  }
  _loadTitle = (index) => {
    console.log("title", index);
    return (<Text>{this.state.files[index].name}</Text>);
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
  imageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  backgroundImage: {
    width: width,
    height: 200,
    backgroundColor: '#fff',
    padding: 2,
    margin: 0,
  },
  title: {
    textAlign: 'center'
  }
})
