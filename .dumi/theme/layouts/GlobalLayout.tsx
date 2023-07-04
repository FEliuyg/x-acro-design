import { ConfigProvider } from '@arco-design/web-react';
import '@arco-themes/react-dtable/index.less';
import { Outlet, usePrefersColor } from 'dumi';
import React, { useEffect } from 'react';

export default function GlobalLayout() {
  const [color] = usePrefersColor();

  useEffect(() => {
    document.body.setAttribute('arco-theme', color);
  }, [color]);

  return (
    <ConfigProvider>
      <Outlet />
    </ConfigProvider>
  );
}
