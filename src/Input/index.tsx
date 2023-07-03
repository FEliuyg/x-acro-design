import React from 'react';
import { Input, InputProps } from '@arco-design/web-react';
import { SearchOutlined } from '@easyv/react-icons';
import './index.less';

export default function XInput(props: InputProps) {
  return <Input {...props} />;
}

function XInputSearch(props: InputProps) {
  return <Input prefix={<SearchOutlined />} {...props} />;
}

XInput.Search = XInputSearch;
XInput.TextArea = Input.TextArea;
XInput.Password = Input.Password;
