import { ReactElement, useContext } from 'react';
import RouterContext from './RouterContext';
interface Props {
  path: string;
  component: (...arg: any[]) => ReactElement;
  exact: boolean;
}
export default function Route({
  path,
  component: RouteComponent,
  exact,
}: Props) {
  const { history, location } = useContext(RouterContext);
  const isMatch = path === location.pathname;
  return isMatch ? <RouteComponent {...{ history, location }} /> : null;
}
