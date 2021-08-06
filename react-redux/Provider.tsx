import { PropsWithChildren, useContext } from 'react';
import { reactReduxContext } from './reactReduxContext';
interface Props {
  store: any;
}
export default function Provider({
  store,
  children,
}: PropsWithChildren<Props>) {
  return (
    <reactReduxContext.Provider value={store}>
      {children}
    </reactReduxContext.Provider>
  );
}
