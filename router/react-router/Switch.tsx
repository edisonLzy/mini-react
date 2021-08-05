import {
  PropsWithChildren,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import RouterContext from './RouterContext';
import { matchPath } from './matchPath';
export function Switch({ children }: PropsWithChildren<any>) {
  return (
    <RouterContext.Consumer>
      {(context) => {
        const { location } = context;
        let element: any, match: any;
        Children.forEach(children, (child) => {
          if (!match && isValidElement(child)) {
            // 匹配到第一个就停止
            match = matchPath(location.pathname, child.props as any);
            element = child;
          }
        });
        return match ? cloneElement(element) : null;
      }}
    </RouterContext.Consumer>
  );
}
