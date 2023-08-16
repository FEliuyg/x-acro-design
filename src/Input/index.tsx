import React, { forwardRef } from 'react';
import { Input, InputProps } from '@arco-design/web-react';
import { RefInputType } from '@arco-design/web-react/es/Input';
import classNames from 'classnames';
import { InputSearchProps } from '@arco-design/web-react/es/Input';
import { SearchCircleOutlined } from '@easyv/react-icons';

import './index.less';

interface XInputProps extends InputProps {
  bordered?: boolean;
}

type XInputType = React.ForwardRefExoticComponent<
  XInputProps & React.RefAttributes<RefInputType>
> & {
  Search: typeof InputSearch;
  TextArea: typeof Input.TextArea;
  Password: typeof Input.Password;
  Group: typeof Input.Group;
};

const XInput = forwardRef<RefInputType, XInputProps>(
  ({ bordered = true, className, ...restProps }, ref) => {
    return (
      <Input
        ref={ref}
        className={classNames(className, {
          'arco-input-borderless': !bordered,
        })}
        {...restProps}
      />
    );
  },
) as XInputType;

interface XInputSearchProps extends InputSearchProps {
  bordered?: boolean;
}

const InputSearch = forwardRef<RefInputType, XInputSearchProps>(
  ({ bordered = true, className, onSearch, ...restProps }, ref) => {
    return (
      <Input
        ref={ref}
        className={classNames(className, {
          'arco-input-borderless': !bordered,
        })}
        prefix={<SearchCircleOutlined />}
        onChange={onSearch}
        onPressEnter={(e) => e.currentTarget.blur()}
        {...restProps}
      />
    );
  },
);

export default XInput;

XInput.Search = InputSearch;
XInput.TextArea = Input.TextArea;
XInput.Password = Input.Password;
XInput.Group = Input.Group;

export {
  XInputProps as InputProps,
  XInputSearchProps as InputSearchProps,
  RefInputType,
};
