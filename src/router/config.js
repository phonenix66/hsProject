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
const router = {
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: Login
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
  SearchList: {
    screen: SearchListPage
  },
  initialRouteName: 'Home'
}

export { router };