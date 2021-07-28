import pathToRegexp, { RegExpOptions } from 'path-to-regexp';
import { RouteProps } from './Route';
import pathToReg from 'path-to-regexp';

function compilePath(path: string, options: RegExpOptions) {
  const keys: pathToRegexp.Key[] = [];
  // keys 用于收集动态参数
  const regexp = pathToReg(path, keys, options);
  return { keys, regexp };
}

export function matchPath(
  pathname: string,
  {
    exact = false,
    strict = false,
    sensitive = false,
    path = '/',
  }: Omit<RouteProps, 'component'>
) {
  const { keys, regexp } = compilePath(path, {
    end: exact,
    sensitive,
    strict,
  });
  const match = regexp.exec(pathname);
  if (!match) return null;
  const [url, ...values] = match;
  return {
    //路由组件中props.match
    path, //Route原始path
    url, //正则匹配到的浏览器的pathname的部分
    isExact: pathname === url,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index];
      return memo;
    }, {} as any),
  };
}
