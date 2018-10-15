import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import Orientation from 'react-native-orientation';
const width = Dimensions.get('window').width;
export default class RulePage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '长江河道采砂管理条例',
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.section}>第一条  为了加强长江河道采砂管理，维护长江河势稳定，保障防洪和通航安全，制定本条例。</Text>
          <Text style={styles.section}>第二条  在长江宜宾以下干流河道内从事开采砂石（以下简称长江采砂）及其管理活动的，应当遵守本条例。</Text>
          <Text style={styles.section}>第三条  国务院水行政主管部门及其所属的长江水利委员会应当加强对长江采砂的统一管理和监督检查，并做好有关组织、协调和指导工作。</Text>
          <Text style={[styles.section, styles.childs]}>长江采砂管理，实行地方人民政府行政首长负责制。沿江县级以上地方人民政府应当加强对本行政区域内长江采砂活动的管理，做好长江采砂的组织、协调和监督检查工作。</Text>
          <Text style={[styles.section, styles.childs]}>沿江县级以上地方人民政府水行政主管部门依照本条例的规定，具体负责本行政区域内长江采砂的管理和监督检查工作。</Text>
          <Text style={[styles.section, styles.childs]}>国务院交通行政主管部门所属的长江航务管理局负责长江航道管理工作，长江海事机构负责长江交通安全的监督管理工作。公安部门负责长江水上治安管理工作，依法打击长江采砂活动中的犯罪行为。</Text>
          <Text style={styles.section}>第四条  国家对长江采砂实行统一规划制度。</Text>
          <Text style={[styles.section, styles.childs]}>长江采砂规划由长江水利委员会会同四川省、湖北省、湖南省、江西省、安徽省、江苏省和重庆市、上海市人民政府水行政主管部门编制，经征求长江航务管理局和长江海事机构意见后，报国务院水行政主管部门批准。国务院水行政主管部门批准前，应当征求国务院交通行政主管部门的意见。</Text>
          <Text style={[styles.section, styles.childs]}>长江采砂规划一经批准，必须严格执行；确需修改时，应当依照前款规定批准。</Text>
          <Text style={[styles.section, styles.childs]}>长江采砂规划批准实施前，长江水利委员会可以会同沿江省、直辖市人民政府水行政主管部门、长江航务管理局和长江海事机构确定禁采区和禁采期，报国务院水行政主管部门批准。</Text>
          <Text style={styles.section}>第五条  长江采砂规划应当充分考虑长江防洪安全和通航安全的要求，符合长江流域综合规划和长江防洪、河道整治以及航道整治等专业规划。</Text>
          <Text style={styles.section}>第六条  长江采砂规划应当包括下列内容：</Text>
          <Text style={styles.section}>（一）禁采区和可采区；</Text>
          <Text style={styles.section}>（二）禁采期和可采期；</Text>
          <Text style={styles.section}>（三）年度采砂控制总量；</Text>
          <Text style={styles.section}>（四）可采区内采砂船只的控制数量。</Text>
          <Text style={styles.section}>第七条  沿江省、直辖市人民政府水行政主管部门根据长江采砂规划，可以拟订本行政区域内长江采砂规划实施方案，报本级人民政府批准后实施，并报长江水利委员会、长江航务管理局备案。</Text>
          <Text style={styles.section}>（一）沿江省、直辖市人民政府应当将长江采砂规划确定的禁采区和禁采期予以公告。</Text>
          <Text style={styles.section}>（二）沿江省、直辖市人民政府水行政主管部门可以根据本行政区域内长江的水情、工情、汛情、航道变迁和管理等需要，在长江采砂规划确定的禁采区、禁采期外增加禁采范围、延长禁采期限，报本级人民政府决定后公告。</Text>
          <Text style={styles.section}>第八条  长江水利委员会和沿江省、直辖市人民政府水行政主管部门应当加强对长江采砂规划实施情况的监督检查。</Text>
          <Text style={styles.section}>第九条  国家对长江采砂实行采砂许可制度。</Text>
          <Text style={[styles.section, styles.childs]}>河道采砂许可证由沿江省、直辖市人民政府水行政主管部门审批发放；属于省际边界重点河段的，经有关省、直辖市人民政府水行政主管部门签署意见后，由长江水利委员会审批发放；涉及航道的，审批发放前应当征求长江航务管理局和长江海事机构的意见。省际边界重点河段的范围由国务院水行政主管部门划定。</Text>
          <Text style={[styles.section, styles.childs]}>河道采砂许可证式样由国务院水行政主管部门规定，由沿江省、直辖市人民政府水行政主管部门和长江水利委员会印制。</Text>
          <Text style={styles.section}>第十条  从事长江采砂活动的单位和个人应当向沿江市、县人民政府水行政主管部门提出申请；符合下列条件的，由长江水利委员会或者沿江省、直辖市人民政府水行政主管部门依照本条例第九条的规定，审批发放河道采砂许可证：</Text>
          <Text style={styles.section}>（一）符合长江采砂规划确定的可采区和可采期的要求；</Text>
          <Text style={styles.section}>（二）符合年度采砂控制总量的要求；</Text>
          <Text style={styles.section}>（三）符合规定的作业方式；</Text>
          <Text style={styles.section}>（四）符合采砂船只数量的控制要求；</Text>
          <Text style={styles.section}>（五）采砂船舶、船员证书齐全；</Text>
          <Text style={styles.section}>（六）有符合要求的采砂设备和采砂技术人员；</Text>
          <Text style={styles.section}>（七）长江水利委员会或者沿江省、直辖市人民政府水行政主管部门规定的其他条件。</Text>
          <Text style={[styles.section, styles.childs]}>市、县人民政府水行政主管部门应当自收到申请之日起10日内签署意见后，报送沿江省、直辖市人民政府水行政主管部门审批；属于省际边界重点河段的，经有关省、直辖市人民政府水行政主管部门签署意见后，报送长江水利委员会审批。长江水利委员会或者沿江省、直辖市人民政府水行政主管部门应当自收到申请之日起30日内予以审批；不予批准的，应当在作出不予批准决定之日起7日内通知申请人，并说明理由。</Text>
          <Text style={styles.section}>第十一条  河道采砂许可证应当载明船主姓名（名称）、船名、船号和开采的性质、种类、地点、时限以及作业方式、弃料处理方式、许可证的有效期限等有关事项和内容。</Text>
          <Text style={styles.section}>第十二条  从事长江采砂活动的单位和个人应当按照河道采砂许可证的规定进行开采。有关县级以上地方人民政府水行政主管部门和长江水利委员会应当按照职责划分对其加强监督检查。</Text>
          <Text style={[styles.section, styles.childs]}>从事长江采砂活动的单位和个人需要改变河道采砂许可证规定的事项和内容的，应当重新办理河道采砂许可证。</Text>
          <Text style={[styles.section, styles.childs]}>禁止伪造、涂改或者买卖、出租、出借或者以其他方式转让河道采砂许可证。</Text>
          <Text style={styles.section}>第十三条  为保障航道畅通和航行安全，采砂作业应当服从通航要求，并设立明显标志。</Text>
          <Text style={styles.section}>第十四条  长江水利委员会和沿江省、直辖市人民政府水行政主管部门年审批采砂总量不得超过规划确定的年度采砂控制总量。</Text>
          <Text style={[styles.section, styles.childs]}>沿江省、直辖市人民政府水行政主管部门应当在每年1月31日前将上一年度的长江采砂审批发证情况和实施情况，报长江水利委员会备案。</Text>
          <Text style={styles.section}>第十五条  沿江县级以上地方人民政府水行政主管部门因整修长江堤防进行吹填固基或者整治长江河道采砂的，应当经本省、直辖市人民政府水行政主管部门审查，并报长江水利委员会批准；长江航务管理局因整治长江航道采砂的，应当事先征求长江水利委员会的意见。</Text>
          <Text style={[styles.section, styles.childs]}>因吹填造地从事采砂活动的单位和个人，应当依法申请河道采砂许可证。</Text>
          <Text style={styles.section}>第十六条  采砂船舶在禁采期内应当停放在沿江县级人民政府指定的地点；无正当理由，不得擅自离开指定地点。</Text>
          <Text style={styles.section}>第十七条  从事长江采砂活动的单位和个人应当向发放河道采砂许可证的机关缴纳长江河道砂石资源费。发放河道采砂许可证的机关应当将收取的长江河道砂石资源费全部上缴财政。长江河道砂石资源费的具体征收、使用管理办法由国务院财政主管部门会同国务院水行政主管部门、物价主管部门制定。</Text>
          <Text style={[styles.section, styles.childs]}>从事长江采砂活动的单位和个人，不再缴纳河道采砂管理费和矿产资源补偿费。</Text>
          <Text style={styles.section}>第十八条  违反本条例规定，未办理河道采砂许可证，擅自在长江采砂的，由县级以上地方人民政府水行政主管部门或者长江水利委员会依据职权，责令停止违法行为，没收违法所得和非法采砂机具，并处10万元以上30万元以下的罚款；情节严重的，扣押或者没收非法采砂船舶，并对没收的非法采砂船舶予以拍卖，拍卖款项全部上缴财政。拒绝、阻碍水行政主管部门或者长江水利委员会依法执行职务，构成违反治安管理行为的，由公安机关依法给予治安管理处罚；触犯刑律的，依法追究刑事责任。</Text>
          <Text style={[styles.section, styles.childs]}>违反本条例规定，虽持有河道采砂许可证，但在禁采区、禁采期采砂的，由县级以上地方人民政府水行政主管部门或者长江水利委员会依据职权，依照前款规定处罚，并吊销河道采砂许可证。</Text>
          <Text style={styles.section}>第十九条  违反本条例规定，未按照河道采砂许可证规定的要求采砂的，由县级以上地方人民政府水行政主管部门或者长江水利委员会依据职权，责令停止违法行为，没收违法所得，处5万元以上10万元以下的罚款，并吊销河道采砂许可证；触犯刑律的，依法追究刑事责任。</Text>
          <Text style={styles.section}>第二十条  违反本条例规定，采砂船舶在禁采期内未在指定地点停放或者无正当理由擅自离开指定地点的，由县级以上地方人民政府水行政主管部门处1万元以上3万元以下的罚款。</Text>
          <Text style={styles.section}>第二十一条  伪造、涂改或者买卖、出租、出借或者以其他方式转让河道采砂许可证，触犯刑律的，依法追究刑事责任；尚未触犯刑律的，由县级以上地方人民政府水行政主管部门或者长江水利委员会依据职权，没收违法所得，并处5万元以上10万元以下的罚款，收缴伪造、涂改或者买卖、出租、出借或者以其他方式转让的河道采砂许可证。</Text>
          <Text style={styles.section}>第二十二条  违反本条例规定，不依法缴纳长江河道砂石资源费的，由县级以上地方人民政府水行政主管部门或者长江水利委员会依据职权，责令限期缴纳；逾期未缴纳的，按日加收3‰的滞纳金；拒不缴纳的，处应缴纳长江河道砂石资源费金额2倍以上5倍以下的罚款，并吊销河道采砂许可证。</Text>
          <Text style={styles.section}>第二十三条  在长江航道内非法采砂影响通航安全的，由长江航务管理局、长江海事机构依照《中华人民共和国内河交通安全管理条例》和《中华人民共和国航道管理条例》等规定给予处罚。</Text>
          <Text style={styles.section}>第二十四条  依照本条例规定应当给予行政处罚，而有关水行政主管部门不给予行政处罚的，由上级人民政府水行政主管部门责令其作出行政处罚决定或者直接给予行政处罚；对负有责任的主管人员和其他直接责任人员依法给予行政处分。</Text>
          <Text style={styles.section}>第二十五条  依照本条例实施罚款的行政处罚，应当依照有关法律、行政法规的规定，实行罚款决定与罚款收缴分离，所收取的罚款必须全部上缴国库。</Text>
          <Text style={styles.section}>第二十六条  有下列行为之一，触犯刑律的，依法追究刑事责任；尚未触犯刑律的，对负有责任的主管人员和其他直接责任人员依法给予行政处分：</Text>
          <Text style={styles.section}>（一）不执行已批准的长江采砂规划、擅自修改长江采砂规划或者违反长江采砂规划组织采砂的；</Text>
          <Text style={styles.section}>（二）不按照规定审批发放河道采砂许可证或者其他批准文件的；</Text>
          <Text style={styles.section}>（三）不履行本条例规定的监督检查职责，造成长江采砂秩序混乱或者造成重大责任事故的；</Text>
          <Text style={styles.section}>（四）在长江采砂管理中不按照规定的项目、范围和标准收费的；</Text>
          <Text style={styles.section}>（五）截留、挪用长江河道砂石资源费的。有前款第（四）项、第（五）项行为的，由当地财政主管部门追缴已收取的费用和截留、挪用的费用。</Text>
          <Text style={styles.section}>第二十七条  本条例自2002年1月1日起施行。</Text>
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
  section: {
    fontSize: 10,
    lineHeight: 18,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  childs: {
    paddingLeft: 20
  }
})