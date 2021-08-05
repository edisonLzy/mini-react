import { PropsWithChildren, useCallback, useContext } from 'react';
import RouterContext from './RouterContext';
export interface LinkProps {
  to: string;
  [p: string]: any;
}
export default function ({
  to,
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  const { history } = useContext(RouterContext);
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      history.push(to);
    },
    [to]
  );
  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
