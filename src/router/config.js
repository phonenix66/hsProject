import HomeScreen from '../pages/home/home';
import { DetailsScreen } from '../pages/details/details';
import NewSite from '../pages/details/newSite';
import Login from '../pages/login/login';
import MainPage from '../pages/anjian/main';
import RulePage from '../pages/anjian/laws/rules';
import ManagePage from '../pages/anjian/laws/manage';
import PenalPage from '../pages/anjian/laws/penal';
import JudgePage from '../pages/anjian/laws/judge';
import NewCasePage from '../pages/anjian/case/newCase';
import CaseListPage from '../pages/anjian/case/caseList';

const router = {
  Main: {
    screen: MainPage
  },
  Login: {
    screen: Login
  },
  NewSite: {
    screen: NewSite
  },
  Home: {
    screen: HomeScreen
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
  initialRouteName: 'Main'
}

export { router };