import { Divider, DividerProps } from '@arco-design/web-react';
import classNames from 'classnames';
import './index.less';

interface XDividerProps extends DividerProps {
  plain?: boolean;
}

export default function XDivider({
  plain,
  className,
  ...restProps
}: XDividerProps) {
  return (
    <Divider
      className={classNames(className, { 'arco-divider-plain-text': plain })}
      {...restProps}
    />
  );
}
