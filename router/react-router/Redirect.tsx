import { useEffect, useContext } from 'react';
import RouterContext from './RouterContext';
interface Props {
  to: string;
}
export function Redirect({ to }: Props) {
  const { history } = useContext(RouterContext);
  useEffect(() => {
    history.push(to);
  }, [to]);
  return null;
}
