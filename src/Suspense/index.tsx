import { lazy, Component, Children } from 'react';
import Suspense from '../../suspense';

function createResource(fetchData: Promise<any>) {
  let status = 'pending';
  let result: unknown;
  return {
    read() {
      if (status !== 'pending') {
        return result;
      } else {
        throw fetchData
          .then((val) => {
            result = val;
            status = 'success';
          })
          .catch((err) => {
            result = err;
            status = 'error';
          });
      }
    },
  };
}
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'leezhiyu',
      });
    }, 2000);
  });
}
const initialResource = createResource(fetchData());
function Child() {
  const data = initialResource.read();
  return <h1>{data.name}</h1>;
}
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  render() {
    return this.state.hasError ? (
      <h1>something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default class extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div> loading </div>}>
          <Child />
        </Suspense>
      </ErrorBoundary>
    );
  }
}
