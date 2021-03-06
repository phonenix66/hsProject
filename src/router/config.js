import HomeScreen from '../pages/home/home';
import DetailsScreen from '../pages/details/details';
import NewSite from '../pages/details/newSite';
import Login from '../pages/login/login';
import MainPage from '../pages/anjian/main';
import RulePage from '../pages/anjian/laws/rules';
import ManagePage from '../pages/anjian/laws/manage';
import PenalPage from '../pages/anjian/laws/penal';
import JudgePage from '../pages/anjian/laws/judge';
import NewCasePage from '../pages/anjian/case/newCase';
import CaseListPage from '../pages/anjian/case/caseList';
import SearchListPage from '../pages/anjian/search/list';
import CaseDetailsPage from '../pages/anjian/case/details';
import BlackListPage from '../pages/anjian/black/blackList';
import SuperviseListPage from '../pages/anjian/supervise/superviseList';
import BlackDetailsPage from '../pages/anjian/black/blackItemDetail';
import SuperviseDetailsPage from '../pages/anjian/supervise/superviseDetail';
import ImageViewerPage from '../pages/anjian/supervise/imageViewer';
import HomeNavPage from '../pages/home/homeNav';
import PlanProjectPage from '../pages/home/planProject';
import PlanDetailsPage from '../pages/home/planDetails';
import PlanInfosPage from '../pages/home/planInfos';
const router = {
  Login: {
    screen: Login
  },
  HomeNav: {
    screen: HomeNavPage
  },
  Home: {  //许可证
    screen: HomeScreen
  },
  PlanProject: {
    screen: PlanProjectPage
  },
  PlanDetails: {
    screen: PlanDetailsPage
  },
  Infos: {
    screen: PlanInfosPage
  },
  Main: {
    screen: MainPage
  },
  NewSite: {
    screen: NewSite
  },
  Details: {
    screen: DetailsScreen
  },
  /*法律法规*/
  Rules: {
    screen: RulePage
  },
  Manage: {
    screen: ManagePage
  },
  Penal: {
    screen: PenalPage
  },
  Judge: {
    screen: JudgePage
  },
  /*案件上报*/
  NewCase: {
    screen: NewCasePage
  },
  CaseList: {
    screen: CaseListPage
  },
  CaseDetails: {
    screen: CaseDetailsPage
  },
  /*案件查询*/
  /* SearchList: {
    screen: SearchListPage
  }, */
  /*黑名单*/
  BlackList: {
    screen: BlackListPage
  },
  BlackDetails: {
    screen: BlackDetailsPage
  },
  /*督办*/
  SuperviseList: {
    screen: SuperviseListPage
  },
  SuperviseDetails: {
    screen: SuperviseDetailsPage
  },
  ImageViewer: {
    screen: ImageViewerPage
  },
  initialRouteName: 'Login'
}

export { router };