import React, { Component } from 'react';
import RootToast from 'react-native-root-toast';
import { View, Text, Platform, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Toast = {
  toast: null,
  show: (msg) => {
    this.toast = RootToast.show(<Text style={styles.msg}>{msg}</Text>, {
      position: 0,
      duration: 1000
    })
  },
  showLong: (msg) => {
    this.toast = RootToast.show(msg, {
      position: 0,
      duration: 2000
    })
  },
  showSuccess: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={StyleSheet.container}>
          <Icon size={50} name='check' color={'#fff'}></Icon>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: 1500,
        position: RootToast.positions.CENTER,
        ...options
      })
    setTimeout(function () {
      RootToast.hide(toast);
      typeof 'options' === 'function' ? options && options() : null
    }, 2000)
  },
  showLongSuccess: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Icon name='check' size={50} color={'#fff'} />
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: 2000,
        position: RootToast.positions.CENTER,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
      typeof options === 'function' ? options && options() : null
    }, 2500)
  },
  showWarning: () => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Icon name='warning' size={40} color={'#fff'} />
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: RootToast.durations.SHORT,
        position: RootToast.positions.CENTER,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
    }, RootToast.durations.SHORT + 500)
  },
  showError: () => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Icon name='close' size={40} color={'#fff'} />
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: RootToast.durations.SHORT,
        position: RootToast.positions.CENTER,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
    }, RootToast.durations.SHORT + 500)
  }
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 20
  },
  msg: {
    fontSize: 12,
  }
})

export { Toast }
