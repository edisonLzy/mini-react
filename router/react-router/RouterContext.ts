import type { History } from 'history';
import { createContext } from 'react';

export interface RouterContext {
  history: History;
  location: History['location'];
}
export default createContext<RouterContext>(null!);
