import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Loading } from '../../base/Loading';
import { Toast } from '../../base/Toast';
const width = Dimensions.get('window').width;

export class HomeScreen1 extends React.Component {
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
        Toast.showSuccess('这是showSuccessCallback类型', this.callbackHandle);
        break;
      case 'showWarning':
        Toast.showWarning('这是showWarning类型');
        break;
      case 'showError':
        Toast.showError('这是showError类型');
        break;
    }
  }
  callbackHandle = () => {
    alert(1);
  }

  hud(type) {
    if (type === 'show') {
      Loading.show()
      setTimeout(function () {
        Loading.hidden()
      }, 5000)
    } else {
      Loading.hidden()
    }
  }

  render() {
    return (
      <ScrollView>
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
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showSuccessCallback')}>
          <Text style={{ fontSize: 10 }}>success回调</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.hud('show')}
        >
          <Text>showHud</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.text}
          onPress={() => this.hud('hidden')}
        >
          <Text>hiddenHud</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
