import { PropsWithChildren, useCallback, useContext } from 'react';
import RouterContext from './RouterContext';
interface Props {
  to: string;
  [p: string]: any;
}
export default function ({ to, children, ...props }: PropsWithChildren<Props>) {
  const { history } = useContext(RouterContext);
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      history.push(to, {
        test: 1,
      });
    },
    [to]
  );
  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
