import { HashRouter as Router, Route, Link } from '../router/react-router-dom';
import { RouterContext } from '../router/react-router';
const A = (props: RouterContext & {}) => {
  console.log(props.history);
  return <h1> A </h1>;
};
const B = () => {
  return <h1> B </h1>;
};

const C = () => {
  return <h1> C </h1>;
};

function App() {
  return (
    <Router>
      <Route path="/a" exact component={A} />
      <Route path="/b" exact component={B} />
      <Route path="/c" exact component={C} />
      <nav>
        <Link to="/a">To a </Link>
        <Link to="/b">To b</Link>
        <Link to="/c">To c</Link>
      </nav>
    </Router>
  );
}

export default App;
