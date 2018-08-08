import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Loading } from '../../base/Loading';
import { Toast } from '../../base/Toast';
const width = Dimensions.get('window').width;

export class HomeScreen extends React.Component {
  toast(type) {
    switch (type) {
      case 'show':
        Toast.show('这是show类型');
        break;
      case 'showLong':
        Toast.show('这是showLong类型');
        break;
      case 'showSuccess':
        Toast.show('这是showSuccess类型');
        break;
      case 'showSuccessCallback':
        Toast.showSuccess('这是showSuccessCallback类型', () => alert('callback成功'));
        break;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.text} onPress={() => this.toast('show')}>
          <Text>show1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showLong')}>
          <Text>showLong</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showSuccess')}>
          <Text style={{ fontSize: 10 }}>showSuccess</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    width: width - 40,
    paddingVertical: 6,
    backgroundColor: '#ccc',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
