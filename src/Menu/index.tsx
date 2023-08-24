import React, { forwardRef } from 'react';
import { Menu } from '@arco-design/web-react';
import type { MenuProps } from './interface';
import { DownOutlined, RightOutlined } from '@easyv/react-icons';
import './index.less';

const XMenu = forwardRef((props: MenuProps, ref) => {
  return (
    <Menu
      ref={ref}
      {...props}
      icons={{
        horizontalArrowDown: <DownOutlined style={{ verticalAlign: -2 }} />,
        popArrowRight: <RightOutlined style={{ verticalAlign: -2 }} />,
      }}
    />
  );
}) as typeof Menu;

XMenu.Item = Menu.Item;
XMenu.SubMenu = Menu.SubMenu;
XMenu.ItemGroup = Menu.ItemGroup;
XMenu.__ARCO_MENU__ = Menu.__ARCO_MENU__;

export default XMenu;
export { MenuProps };
