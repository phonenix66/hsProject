import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class ImageViewerPage extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageIndex: 1,
    };
  }
  componentWillMount() {
    const params = this.props.navigation.state.params.data;
    console.log('图片预览参数', params);
    const images = params.imageUrls;
    const imageIndex = params.numIndex
    this.setState({
      images,
      imageIndex
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageViewer
          imageUrls={this.state.images}
          enableImageZoom={true}
          index={this.state.imageIndex}
          onClick={() => this.props.navigation.pop()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  }
})