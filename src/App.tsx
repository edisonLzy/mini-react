import {
  HistoryRouter as Router,
  Route,
  Link,
} from '../router/react-router-dom';
import { RouterContext } from '../router/react-router';
const A = (props: RouterContext & {}) => {
  console.log(props);
  return <h1> A </h1>;
};
const B = (props: any) => {
  console.log(props);
  return <h1> B </h1>;
};

const C = () => {
  return <h1> C </h1>;
};

function App() {
  return (
    <Router>
      <Route path="/" exact component={A} />
      <Route path="/b/:id/:name" exact component={B} />
      <Route path="/c" exact component={C} />
      <nav>
        <Link to="/">To a </Link>
        <Link to="/b/2/lee">To b</Link>
        <Link to="/c">To c</Link>
      </nav>
    </Router>
  );
}

export default App;
