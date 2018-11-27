import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const columns = 3;
const itemWidth = 100;
const itemHeight = 120;
const wMargins = (screenWidth - itemWidth * columns) / (columns + 1);
const hMargins = 20;

class NineListView extends Component {
  constructor(props) {
    super(props);
    //获取数据源
    const data = this.props.data;
    console.log(data);
    //创建ListView对象
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        contentContainerStyle={styles.listViewContent}
      />
    );
  }

  renderRow(rowData) {
    //let icon = require(rowData.icon);
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.goToPage(rowData.name)}
        style={styles.itemContainer}
      >
        <View style={styles.wrapItem}>
          <Image
            source={{ uri: rowData.icon }}
            style={{ width: 70, height: 70 }}
          />
          <Text style={styles.textStyle}>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  goToPage(routeName) {
    this.props.navigation.navigate(routeName);
  }
}

const styles = StyleSheet.create({
  listViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemContainer: {
    width: itemWidth,
    height: itemHeight,
    marginLeft: wMargins,
    marginTop: hMargins,
    alignItems: 'center'
  },
  textStyle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'bold'
  },
  wrapItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export { NineListView };