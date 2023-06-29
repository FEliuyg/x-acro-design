import { ConfigProvider } from '@arco-design/web-react';
import '@arco-themes/react-xiaoyao-test/index.less';
import { Outlet } from 'dumi';
import React from 'react';

export default function GlobalLayout() {
  return (
    <ConfigProvider>
      <Outlet />
    </ConfigProvider>
  );
}
