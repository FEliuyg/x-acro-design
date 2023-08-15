import React from 'react';
import { Input, InputProps } from '@arco-design/web-react';
import classNames from 'classnames';
import { InputSearchProps } from '@arco-design/web-react/es/Input';
import { SearchCircleOutlined } from '@easyv/react-icons';

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

interface XInputSearchProps extends InputSearchProps {
  bordered?: boolean;
}

function InputSearch({
  bordered = true,
  className,
  onSearch,
  ...restProps
}: XInputSearchProps) {
  return (
    <XInput
      className={classNames(className, {
        'arco-input-borderless': !bordered,
      })}
      prefix={<SearchCircleOutlined />}
      onChange={onSearch}
      onPressEnter={(e) => e.currentTarget.blur()}
      {...restProps}
    />
  );
}

XInput.TextArea = Input.TextArea;
XInput.Password = Input.Password;
XInput.Group = Input.Group;
XInput.Search = InputSearch;

export { XInputProps as InputProps, InputSearchProps };
