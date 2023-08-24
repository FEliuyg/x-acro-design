import React, { forwardRef } from 'react';
import { Input } from '@arco-design/web-react';
import classNames from 'classnames';
import { SearchCircleOutlined } from '@easyv/react-icons';
import { InputProps, InputSearchProps, RefInputType } from './interface';

import './index.less';

type XInputType = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<RefInputType>
> & {
  Search: typeof InputSearch;
  TextArea: typeof Input.TextArea;
  Password: typeof Input.Password;
  Group: typeof Input.Group;
};

const XInput = forwardRef<RefInputType, InputProps>(
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

const InputSearch = forwardRef<RefInputType, InputSearchProps>(
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

export { InputProps, InputSearchProps, RefInputType };

export type * from './interface';
