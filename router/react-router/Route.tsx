import { ReactElement, useContext } from 'react';
import RouterContext from './RouterContext';
import { matchPath } from './matchPath';
import type { RegExpOptions } from 'path-to-regexp';
export interface RouteProps extends RegExpOptions {
  path: string;
  component: (...arg: any[]) => ReactElement;
  exact?: boolean;
}
export default function Route({
  path,
  component: RouteComponent,
  exact,
  sensitive,
  strict,
}: RouteProps) {
  const { history, location } = useContext(RouterContext);
  const isMatch = matchPath(location.pathname, {
    exact,
    sensitive,
    strict,
    path,
  });
  return isMatch ? (
    <RouteComponent {...{ history, location, match: isMatch }} />
  ) : null;
}
