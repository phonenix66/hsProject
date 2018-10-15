import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Orientation from 'react-native-orientation';
const width = Dimensions.get('window').width;
export default class ManagePage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '湖北省河道采砂管理办法',
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
          <Text style={styles.section}>第一条 为了加强河道采砂管理，维护河势稳定，保障防洪和通航安全，根据《中华人民共和国水法》、《中华人民共和国防洪法》和《中华人民共和国河道管理条例》等法律、法规，结合本省实际，制定本办法。</Text>
          <Text style={styles.section}>第二条 在本省境内河道(长江除外)内从事开采砂石及其管理活动的，应当遵守本办法。</Text>
          <Text style={styles.section}>第三条 河道采砂管理实行人民政府行政首长负责制。县级以上人民政府应当加强对本行政区域内河道采砂管理工作的领导，做好有关组织、协调工作。</Text>
          <Text style={styles.section}>第四条 省人民政府水行政主管部门负责全省河道采砂的统一管理和监督检查工作。县级以上人民政府水行政主管部门具体负责本行政区域内河道采砂的管理和监督检查工作。</Text>
          <Text style={styles.section}>县级以上公安部门负责水上治安管理工作，依法打击河道采砂活动中的违法犯罪行为;县级以上交通运输行政主管部门负责航道管理、水上交通安全的监督管理工作。</Text>
          <Text style={styles.section}>第五条 河道采砂实行分级管理。分级管理权限由省人民政府水行政主管部门规定。</Text>
          <Text style={styles.section}>第六条 河道采砂实行规划制度。河道采砂规划应当根据防洪安全、河势稳定、通航安全和生态环境要求编制，符合流域综合规划和防洪、河道整治、航道、港口等专业规划。</Text>
          <Text style={styles.section}>省管河道的采砂规划，由省人民政府水行政主管部门组织编制，征求相关行政主管部门意见后，报省人民政府批准。</Text>
          <Text style={styles.section}>其他河道采砂规划，由县级以上人民政府水行政主管部门按照河道管理权限组织编制，征求相关行政主管部门意见后，报同级人民政府批准，并报上一级人民政府水行政主管部门备案。</Text>
          <Text style={styles.section}>河道采砂规划一经批准，必须严格执行，确需修改时，应当经原批准机关批准。</Text>
          <Text style={styles.section}>第七条 河道采砂规划应当包括以下内容:</Text>
          <Text style={styles.section}>(一)禁采区和可采区;</Text>
          <Text style={styles.section}>(二)禁采期和可采期;</Text>
          <Text style={styles.section}>(三)年度采砂控制总量和开采深度;</Text>
          <Text style={styles.section}>(四)采砂方式、采砂功率和可采区采砂船舶及机具的控制数量;</Text>
          <Text style={styles.section}>(五)沿岸堆砂场的控制数量和布局;</Text>
          <Text style={styles.section}>(六)弃料处理和现场清理要求;</Text>
          <Text style={styles.section}>(七)法律、法规规定的其他内容。</Text>
          <Text style={styles.section}>第八条 县级以上人民政府应当将河道采砂规划确定的禁采期和禁采区予以公告。县级以上人民政府水行政主管部门可以根据水情、工情、汛情、航道等情况的变化和管理需要，在采砂规划确定的禁采区、禁采期外临时扩大或者缩小禁采范围、延长或者缩短禁采期限，报同级人民政府决定并公告。</Text>
          <Text style={styles.section}>任何单位和个人不得在河道的禁采区、禁采期进行河道采砂活动。</Text>
          <Text style={styles.section}>第九条 县级人民政府水行政主管部门应当根据河道采砂规划，拟定本行政区域内可采区的年度采砂实施方案，对可采区的采砂活动作出具体规定，报批准河道采砂规划的人民政府批准后组织实施。</Text>
          <Text style={styles.section}>第十条 河道采砂实行许可制度，由县级以上人民政府水行政主管部门按照河道管理权限分级许可，其他部门和单位不再办理河道采砂许可手续。</Text>
          <Text style={styles.section}>河道采砂许可应当采取招标、拍卖方式进行，招标、拍卖收入作为非税收入，实行收支两条线，全额纳入财政预算管理。</Text>
          <Text style={styles.section}>第十一条河道采砂的申请人，应当向采砂所在地的县级人民政府水行政主管部门提出申请，由批准河道采砂规划的人民政府水行政主管部门审批发放河道采砂许可证。涉及航道的，审批发放前应当征求有管辖权的航道主管部门和海事管理机构的意见。申请时应当提交下列材料:</Text>
          <Text style={styles.section}>(一)河道采砂申请书;</Text>
          <Text style={styles.section}>(二)营业执照的复印件;</Text>
          <Text style={styles.section}>(三)采砂船舶、机具的有关证书;</Text>
          <Text style={styles.section}>(四)河道采砂与第三者有利害关系的，与第三者达成的协议或有关文件。</Text>
          <Text style={styles.section}>申请人提交上述复印件时，应当同时交验原件。</Text>
          <Text style={styles.section}>河道采砂申请书样本和河道采砂许可证由省人民政府水行政主管部门统一制作。</Text>
          <Text style={styles.section}>第十二条 符合下列条件的，有审批权的人民政府水行政主管部门应当自收到申请之日起30日内审批发放河道采砂许可证，并予以公告:</Text>
          <Text style={styles.section}>(一)符合河道采砂规划确定的可采区和可采期要求;</Text>
          <Text style={styles.section}>(二)符合年度采砂实施方案的要求;</Text>
          <Text style={styles.section}>(三)符合规定的作业方式;</Text>
          <Text style={styles.section}>(四)符合采砂船舶、机具数量及其采砂功率的控制要求;</Text>
          <Text style={styles.section}>(五)采砂船舶具有船舶检验和登记等证书，船员具有适任证书;</Text>
          <Text style={styles.section}>(六)有符合要求的采砂设备和采砂技术人员;</Text>
          <Text style={styles.section}>(七)没有非法采砂记录;</Text>
          <Text style={styles.section}>(八)法律、法规和规章规定的其他条件。</Text>
          <Text style={styles.section}>对采砂申请不予批准的，应当在作出决定之日起7日内通知申请人，并说明理由，同时告知申请人享有依法申请行政复议或者提起行政诉讼的权利。</Text>
          <Text style={styles.section}>第十三条 河道采砂许可期限为1年或一个可采期。</Text>
          <Text style={styles.section}>第十四条 堤防吹填固基、整治疏浚河道或航道等公益性采砂和吹填造地采砂，应当编制采砂可行性论证报告，并按照河道管理权限，报有管辖权的人民政府水行政主管部门审批。</Text>
          <Text style={styles.section}>第十五条 采砂业主应当按照河道采砂许可证的规定进行开采，需要变更河道采砂许可证规定内容和事项的，应当经原批准机关办理变更手续。</Text>
          <Text style={styles.section}>禁止伪造、涂改、转让、抵押、出借或出租河道采砂许可证。</Text>
          <Text style={styles.section}>第十六条 采砂作业应当服从通航要求，设立明显标志标示采砂范围，不得越界开采，不得损坏河道防洪工程、堤顶路面、防护林木和其他基础设施，不得影响航道畅通和航行安全。</Text>
          <Text style={styles.section}>第十七条 可采期内出现影响河势稳定、防洪安全或者通航安全等重大事件，需要暂停采砂的，采砂业主应当按照县级以上人民政府水行政主管部门的要求暂停采砂活动。</Text>
          <Text style={styles.section}>第十八条 河道采砂许可证的有效期届满或者累计采砂量达到许可的总量时，县级以上人民政府水行政主管部门应当依法办理河道采砂许可证注销手续，采砂业主应当终止采砂行为。</Text>
          <Text style={styles.section}>采砂业主撤离采砂现场前应当清除弃料、堆体等行洪障碍物。</Text>
          <Text style={styles.section}>第十九条 采砂业主应当按规定缴纳河道砂石资源费，不再缴纳河道采砂管理费和矿产资源补偿费。</Text>
          <Text style={styles.section}>河道砂石资源费的征收标准由省价格行政主管部门会同财政主管部门制定。</Text>
          <Text style={styles.section}>河道砂石资源费的征收使用管理办法由省财政主管部门会同有关行政主管部门制定。</Text>
          <Text style={styles.section}>第二十条 采砂船舶在禁采期应当停放在县级以上人民政府水行政主管部门指定的地点，未经批准不得擅自离开。</Text>
          <Text style={styles.section}>第二十一条 县级以上人民政府水行政主管部门应当加强对河道采砂活动的监督检查，在对违法采砂行为依法进行查处时，可以对采砂船舶及机具设备、运砂船舶采取先行登记保存的临时处置措施。</Text>
          <Text style={styles.section}>采砂业主应当给予配合，不得拒绝或者阻碍监督检查人员依法履行职务。</Text>
          <Text style={styles.section}>第二十二条 县级以上人民政府水行政主管部门应当建立河道采砂违法行为记录。对在1年内有3次违法行为记录或者仅有1次违法行为记录但情节严重的，取消参与河道采砂许可招标、拍卖活动的资格。</Text>
          <Text style={styles.section}>第二十三条 各级人民政府、水行政主管部门和其他有关部门有下列行为之一的，对负有直接责任的主管人员和其他直接责任人员给予行政处分;涉嫌犯罪的，移送司法机关依法处理:</Text>
          <Text style={styles.section}>(一)不执行或者擅自修改已经批准的河道采砂规划或者违反河道采砂规划批准采砂的;</Text>
          <Text style={styles.section}>(二)不履行河道采砂管理职责，造成河道采砂秩序混乱或者重大责任事故的;</Text>
          <Text style={styles.section}>(三)不按照规定审批发放河道采砂许可证的;</Text>
          <Text style={styles.section}>(四)不依法打击河道采砂违法行为，对违法采砂行为不按规定给予处罚的;</Text>
          <Text style={styles.section}>(五)不按规定收取河道砂石资源费的;</Text>
          <Text style={styles.section}>(六)截留、挪用河道砂石资源费的;</Text>
          <Text style={styles.section}>(七)其他滥用职权、徇私舞弊、玩忽职守行为的。</Text>
          <Text style={styles.section}>第二十四条 违反本办法规定，未经许可擅自进行河道采砂或者不按照河道采砂许可证的规定采砂的，由县级以上人民政府水行政主管部门责令停止违法行为，没收非法所得，并处1万元以上3万元以下的罚款。</Text>
          <Text style={styles.section}>第二十五条 违反本办法规定，有下列行为之一的，由县级以上人民政府水行政主管部门责令改正;拒不改正的，并处3万元以下的罚款:</Text>
          <Text style={styles.section}>(一)不按要求暂停采砂的;</Text>
          <Text style={styles.section}>(二)将公益性采砂活动所采砂石用于经营的;</Text>
          <Text style={styles.section}>(三)涂改、转让、抵押、出租、出借河道采砂许可证的;</Text>
          <Text style={styles.section}>(四)撤离采砂现场前不按规定清除弃料、堆体等行洪障碍物的。</Text>
          <Text style={styles.section}>第二十六条 违反本办法规定，不缴纳河道砂石资源费的，由征收机关责令限期缴纳;逾期未缴纳的，按日加收应缴额3‰的滞纳金。</Text>
          <Text style={styles.section}>第二十七条 违反本办法规定，采砂船舶在禁采期内未在指定地点停放或者擅自离开指定地点的，由县级以上人民政府水行政主管部门责令改正;拒不改正的，处1万元以下的罚款。</Text>
          <Text style={styles.section}>第二十八条 违反本办法规定，阻碍、抗拒水行政主管部门依法执行职务，构成违反治安管理行为的，依法给予治安管理处罚;构成犯罪的，依法追究刑事责任。</Text>
          <Text style={styles.section}>第二十九条 本省境内水库的采砂管理参照本办法执行。</Text>
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