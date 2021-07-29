import {
  HistoryRouter as Router,
  Route,
  NavLink,
  Switch,
} from '../router/react-router-dom';
import { RouterContext } from '../router/react-router';
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
        <Route path="/" exact component={A} />
        <Route path="/b/:id/:name" component={B} />
        <Route path="/c/:id/:name" component={C} />
      </Switch>
      <nav>
        <NavLink
          to="/"
          activeStyle={{
            color: 'red',
          }}
          exact
        >
          To a{' '}
        </NavLink>
        <NavLink
          activeStyle={{
            color: 'red',
          }}
          to="/b/2/lee"
          exact
        >
          To b
        </NavLink>
        <NavLink
          activeStyle={{
            color: 'red',
          }}
          to="/c/3/zhi"
          exact
        >
          To c
        </NavLink>
      </nav>
    </Router>
  );
}

export default App;
