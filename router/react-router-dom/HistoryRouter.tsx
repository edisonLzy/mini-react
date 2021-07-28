import { createBrowserHistory } from '../history';
import { PropsWithChildren, useMemo } from 'react';
import Route from '../react-router/Router';
export default function Router({ children }: PropsWithChildren<any>) {
  const history = useMemo(() => createBrowserHistory(), []);
  return <Route history={history}>{children}</Route>;
}
