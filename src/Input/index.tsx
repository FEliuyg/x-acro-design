import React from 'react';
import { Input, InputProps } from '@arco-design/web-react';
import classNames from 'classnames';
import './index.less';

interface XInputProps extends InputProps {
  bordered?: boolean;
}

export default function XInput({
  bordered = true,
  className,
  ...restProps
}: XInputProps) {
  return (
    <Input
      className={classNames(className, {
        'arco-input-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

XInput.TextArea = Input.TextArea;
XInput.Password = Input.Password;
XInput.Group = Input.Group;
XInput.Search = Input.Search;
