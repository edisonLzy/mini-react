import { Component, ReactNode } from 'react';

export default class extends Component<{
  fallback: ReactNode;
}> {
  state = {
    loading: false,
  };
  componentDidCatch(err: any, info: any) {
    if (typeof err.then === 'function') {
      this.setState({
        loading: true,
      });
      err.then(() => {
        this.setState({
          loading: false,
        });
      });
    } else {
      this.setState({
        loading: true,
      });
    }
  }
  render() {
    const { loading } = this.state;
    const { fallback, children } = this.props;
    return loading ? fallback : children;
  }
}
