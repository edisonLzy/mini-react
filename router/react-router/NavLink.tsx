import { CSSProperties, useContext, useMemo } from 'react';
import cls from 'classnames';
import Link, { LinkProps } from './Link';
import RouterContext from './RouterContext';
import { matchPath } from './matchPath';

interface NavLinkProps extends LinkProps {
  activeClass?: string;
  activeStyle?: CSSProperties;
  exact?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function NavLink(props: NavLinkProps) {
  const { location } = useContext(RouterContext);
  const { to, exact, style, activeStyle } = props;
  const isMatch = matchPath(location.pathname, {
    path: to,
    exact: exact,
  });
  const styles = useMemo(() => {
    return !!isMatch
      ? {
          ...style,
          ...activeStyle,
        }
      : style;
  }, [isMatch]);
  return (
    <Link
      {...props}
      className={cls({
        className: true,
        activeClass: !!isMatch,
      })}
      style={styles}
    />
  );
}
