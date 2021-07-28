import { PropsWithChildren, useEffect, useState } from 'react';
import RouterContext from './RouterContext';
// import type { History } from 'history';
interface Props {
  history: any;
}
/**
 * 1. 接受 react-router-dom 提供的 history对象 到上下文中
 * 2. 更新上下文信息 触发组件更新渲染
 * @param param
 * @returns
 */
export default function Route({ history, children }: PropsWithChildren<Props>) {
  const { location } = history;
  const [routeValue, setRouteValue] = useState({
    history: history,
    location,
  });
  useEffect(() => {
    const off = history.listen((location: any) => {
      setRouteValue({
        ...routeValue,
        location,
      });
    });
    return off;
  }, []);

  return (
    <RouterContext.Provider value={routeValue}>
      {children}
    </RouterContext.Provider>
  );
}
