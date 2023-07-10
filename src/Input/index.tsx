import React from 'react';
import { Input, InputProps } from '@arco-design/web-react';
import classNames from 'classnames';
import './index.less';

interface XInputProps extends InputProps {
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  bordered?: boolean;
}

export default function XInput({
  bordered = true,
  addonAfter,
  addAfter,
  addonBefore,
  addBefore,
  className,
  ...restProps
}: XInputProps) {
  return (
    <Input
      className={classNames(className, {
        'arco-input-borderless': !bordered,
      })}
      addAfter={addAfter ?? addonAfter}
      addBefore={addBefore ?? addonBefore}
      {...restProps}
    />
  );
}

XInput.TextArea = Input.TextArea;
XInput.Password = Input.Password;
XInput.Group = Input.Group;
XInput.Search = Input.Search;
