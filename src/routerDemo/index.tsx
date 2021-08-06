import {
  HistoryRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from '../../router/react-router-dom';
import { RouterContext } from '../..//router/react-router';
import SuspenseDemo from '../Suspense';
const A = (props: RouterContext & {}) => {
  return <h1> A: state </h1>;
};
const B = (props: any) => {
  const {
    match: { params },
  } = props;
  return <h1> B: state {JSON.stringify(params)}</h1>;
};

const C = (props: any) => {
  const {
    match: { params },
  } = props;
  return <h1> C: state {JSON.stringify(params)}</h1>;
};

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={<Redirect to="/suspense" />} /> */}
        <Route path="/suspense" component={SuspenseDemo}></Route>
      </Switch>

      <nav>
        <NavLink to="/suspense">Suspense 实现</NavLink>
      </nav>
    </Router>
  );
}

export default App;
