import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
const width = Dimensions.get('window').width;
export default class PenalPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '非采入刑',
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
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>最高人民法院 最高人民检察院关于办理非法采矿、破坏性采矿刑事案件适用法律若干问题的解释</Text>
          <Text style={styles.section}>《最高人民法院、最高人民检察院关于办理非法采矿、破坏性采矿刑事案件适用法律若干问题的解释》已于2016年9月26日由最高人民法院审判委员会第1694次会议、2016年11月4日由最高人民检察院第十二届检察委员会第57次会议通过，现予公布，自2016年12月1日起施行。</Text>
          <Text style={styles.txtRight}>最高人民法院 最高人民检察院</Text>
          <Text style={styles.txtRight}>2016年11月28日</Text>
          <Text style={styles.litterTitle}>法释〔2016〕25号</Text>
          <Text style={styles.litterTitle}>最高人民法院 最高人民检察院</Text>
          <Text style={styles.litterTitle}>关于办理非法采矿、破坏性采矿刑事案件适用法律若干问题的解释</Text>
          <Text style={styles.litterTitle}>（2016年9月26日最高人民法院审判委员会第1694次会议、2016年11月4日最高人民检察院第十二届检察委员会第57次会议通过，自2016年12月1日起施行）</Text>
          <Text style={styles.section}>为依法惩处非法采矿、破坏性采矿犯罪活动，根据《中华人民共和国刑法》《中华人民共和国刑事诉讼法》的有关规定，现就办理此类刑事案件适用法律的若干问题解释如下：</Text>
          <Text style={styles.section}>第一条违反《中华人民共和国矿产资源法》《中华人民共和国水法》等法律、行政法规有关矿产资源开发、利用、保护和管理的规定的，应当认定为刑法第三百四十三条规定的“违反矿产资源法的规定”。</Text>
          <Text style={styles.section}>第二条具有下列情形之一的，应当认定为刑法第三百四十三条第一款规定的“未取得采矿许可证”：</Text>
          <Text style={styles.section}>（一）无许可证的；</Text>
          <Text style={styles.section}>（二）许可证被注销、吊销、撤销的；</Text>
          <Text style={styles.section}>（三）超越许可证规定的矿区范围或者开采范围的；</Text>
          <Text style={styles.section}>（四）超出许可证规定的矿种的（共生、伴生矿种除外）；</Text>
          <Text style={styles.section}>（五）其他未取得许可证的情形。</Text>
          <Text style={styles.section}>第三条实施非法采矿行为，具有下列情形之一的，应当认定为刑法第三百四十三条第一款规定的“情节严重”：</Text>
          <Text style={styles.section}>（一）开采的矿产品价值或者造成矿产资源破坏的价值在十万元至三十万元以上的；</Text>
          <Text style={styles.section}>（二）在国家规划矿区、对国民经济具有重要价值的矿区采矿，开采国家规定实行保护性开采的特定矿种，或者在禁采区、禁采期内采矿，开采的矿产品价值或者造成矿产资源破坏的价值在五万元至十五万元以上的；</Text>
          <Text style={styles.section}>（三）二年内曾因非法采矿受过两次以上行政处罚，又实施非法采矿行为的；</Text>
          <Text style={styles.section}>（四）造成生态环境严重损害的；</Text>
          <Text style={styles.section}>（五）其他情节严重的情形。</Text>
          <Text style={styles.section}>实施非法采矿行为，具有下列情形之一的，应当认定为刑法第三百四十三条第一款规定的“情节特别严重”：</Text>
          <Text style={styles.section}>（一）数额达到前款第一项、第二项规定标准五倍以上的；</Text>
          <Text style={styles.section}>（二）造成生态环境特别严重损害的；</Text>
          <Text style={styles.section}>（三）其他情节特别严重的情形。</Text>
          <Text style={styles.section}>第四条在河道管理范围内采砂，具有下列情形之一，符合刑法第三百四十三条第一款和本解释第二条、第三条规定的，以非法采矿罪定罪处罚：</Text>
          <Text style={styles.section}>（一）依据相关规定应当办理河道采砂许可证，未取得河道采砂许可证的；</Text>
          <Text style={styles.section}>（二）依据相关规定应当办理河道采砂许可证和采矿许可证，既未取得河道采砂许可证，又未取得采矿许可证的。</Text>
          <Text style={styles.section}>实施前款规定行为，虽不具有本解释第三条第一款规定的情形，但严重影响河势稳定，危害防洪安全的，应当认定为刑法第三百四十三条第一款规定的“情节严重”。</Text>
          <Text style={styles.section}>第五条未取得海砂开采海域使用权证，且未取得采矿许可证，采挖海砂，符合刑法第三百四十三条第一款和本解释第二条、第三条规定的，以非法采矿罪定罪处罚。</Text>
          <Text style={styles.section}>实施前款规定行为，虽不具有本解释第三条第一款规定的情形，但造成海岸线严重破坏的，应当认定为刑法第三百四十三条第一款规定的“情节严重”。</Text>
          <Text style={styles.section}>第六条造成矿产资源破坏的价值在五十万元至一百万元以上，或者造成国家规划矿区、对国民经济具有重要价值的矿区和国家规定实行保护性开采的特定矿种资源破坏的价值在二十五万元至五十万元以上的，应当认定为刑法第三百四十三条第二款规定的“造成矿产资源严重破坏”。</Text>
          <Text style={styles.section}>第七条明知是犯罪所得的矿产品及其产生的收益，而予以窝藏、转移、收购、代为销售或者以其他方法掩饰、隐瞒的，依照刑法第三百一十二条的规定，以掩饰、隐瞒犯罪所得、犯罪所得收益罪定罪处罚。</Text>
          <Text style={styles.section}>实施前款规定的犯罪行为，事前通谋的，以共同犯罪论处。</Text>
          <Text style={styles.section}>第八条多次非法采矿、破坏性采矿构成犯罪，依法应当追诉的，或者二年内多次非法采矿、破坏性采矿未经处理的，价值数额累计计算。</Text>
          <Text style={styles.section}>第九条单位犯刑法第三百四十三条规定之罪的，依照本解释规定的相应自然人犯罪的定罪量刑标准，对直接负责的主管人员和其他直接责任人员定罪处罚，并对单位判处罚金。</Text>
          <Text style={styles.section}>第十条实施非法采矿犯罪，不属于“情节特别严重”，或者实施破坏性采矿犯罪，行为人系初犯，全部退赃退赔，积极修复环境，并确有悔改表现的，可以认定为犯罪情节轻微，不起诉或者免予刑事处罚。</Text>
          <Text style={styles.section}>第十一条对受雇佣为非法采矿、破坏性采矿犯罪提供劳务的人员，除参与利润分成或者领取高额固定工资的以外，一般不以犯罪论处，但曾因非法采矿、破坏性采矿受过处罚的除外。</Text>
          <Text style={styles.section}>第十二条对非法采矿、破坏性采矿犯罪的违法所得及其收益，应当依法追缴或者责令退赔。</Text>
          <Text style={styles.section}>对用于非法采矿、破坏性采矿犯罪的专门工具和供犯罪所用的本人财物，应当依法没收。</Text>
          <Text style={styles.section}>第十三条非法开采的矿产品价值，根据销赃数额认定；无销赃数额，销赃数额难以查证，或者根据销赃数额认定明显不合理的，根据矿产品价格和数量认定。</Text>
          <Text style={styles.section}>矿产品价值难以确定的，依据下列机构出具的报告，结合其他证据作出认定：</Text>
          <Text style={styles.section}>（一）价格认证机构出具的报告；</Text>
          <Text style={styles.section}>（二）省级以上人民政府国土资源、水行政、海洋等主管部门出具的报告；</Text>
          <Text style={styles.section}>（三）国务院水行政主管部门在国家确定的重要江河、湖泊设立的流域管理机构出具的报告。</Text>
          <Text style={styles.section}>第十四条对案件所涉的有关专门性问题难以确定的，依据下列机构出具的鉴定意见或者报告，结合其他证据作出认定：</Text>
          <Text style={styles.section}>（一）司法鉴定机构就生态环境损害出具的鉴定意见；</Text>
          <Text style={styles.section}>（二）省级以上人民政府国土资源主管部门就造成矿产资源破坏的价值、是否属于破坏性开采方法出具的报告；</Text>
          <Text style={styles.section}>（三）省级以上人民政府水行政主管部门或者国务院水行政主管部门在国家确定的重要江河、湖泊设立的流域管理机构就是否危害防洪安全出具的报告；</Text>
          <Text style={styles.section}>（四）省级以上人民政府海洋主管部门就是否造成海岸线严重破坏出具的报告。</Text>
          <Text style={styles.section}>第十五条各省、自治区、直辖市高级人民法院、人民检察院，可以根据本地区实际情况，在本解释第三条、第六条规定的数额幅度内，确定本地区执行的具体数额标准，报最高人民法院、最高人民检察院备案。</Text>
          <Text style={styles.section}>第十六条本解释自2016年12月1日起施行。本解释施行后，《最高人民法院关于审理非法采矿、破坏性采矿刑事案件具体应用法律若干问题的解释》（法释〔2003〕9号）同时废止。</Text>
        </View>
      </ScrollView>
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
  imgStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 10
  },
  section: {
    fontSize: 10,
    lineHeight: 18,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  childs: {
    paddingLeft: 20
  },
  txtRight: {
    textAlign: 'right',
    fontSize: 10,
    paddingRight: 10
  },
  litterTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})