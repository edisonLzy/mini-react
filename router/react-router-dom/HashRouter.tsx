import { createHashHistory } from 'history';
import { PropsWithChildren, useMemo } from 'react';
import Route from '../react-router/Router';
export default function Router({ children }: PropsWithChildren<any>) {
  const history = useMemo(() => createHashHistory(), []);
  return <Route history={history}>{children}</Route>;
}
