import { Button } from '@arco-design/web-react';
import classNames from 'classnames';
import type { ButtonProps, ButtonGroupProps } from './interface';
import './index.less';

interface XButtonProps extends Omit<ButtonProps, 'type'> {
  type?: 'link' | ButtonProps['type'];
}

function XButton({ type, className, ...restProps }: XButtonProps) {
  const isLink = type === 'link';

  return (
    <Button
      className={classNames(className, { 'arco-btn-link': isLink })}
      type={isLink ? 'text' : type}
      {...restProps}
    />
  );
}

XButton.Group = Button.Group;

export { XButtonProps as ButtonProps, ButtonGroupProps };

export default XButton;
