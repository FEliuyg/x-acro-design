import { Divider } from '@arco-design/web-react';
import classNames from 'classnames';
import './index.less';
import { DividerProps } from './interface';

export default function XDivider({
  plain,
  className,
  ...restProps
}: DividerProps) {
  return (
    <Divider
      className={classNames(className, { 'arco-divider-plain-text': plain })}
      {...restProps}
    />
  );
}

export type * from './interface';
