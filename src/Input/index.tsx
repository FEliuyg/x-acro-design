import React from 'react';
import { Input, InputProps } from '@arco-design/web-react';
import classNames from 'classnames';
import { InputSearchProps } from '@arco-design/web-react/es/Input';
import { SearchCircleOutlined } from '@easyv/react-icons';

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

function InputSearch({ onSearch, ...restProps }: InputSearchProps) {
  return (
    <XInput
      {...restProps}
      prefix={<SearchCircleOutlined />}
      onChange={onSearch}
    />
  );
}

XInput.TextArea = Input.TextArea;
XInput.Password = Input.Password;
XInput.Group = Input.Group;
XInput.Search = InputSearch;

export { XInputProps as InputProps };
