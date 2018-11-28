import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Orientation from 'react-native-orientation';
export default class PlanDetailsPage extends Component {
  constructor(props) {
    super(props);
    Orientation.lockToLandscape();
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
