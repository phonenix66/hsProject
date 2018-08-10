import React, { Component, PropTypes } from 'react';

import { Platform, Text, View, StyleSheet, TouchableNativeFeedback, TouchableHighlight } from 'react-native';


export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableNativeFeedback>
      )
    } else if (Platform.os === 'ios') {
      return (
        <TouchableHighlight onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableHighlight>
      )
    }
  }
  _renderContent() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: 36,
    backgroundColor: '#17a2f3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
  }
})