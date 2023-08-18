import React from 'react';
import { Menu } from '@arco-design/web-react';
import type { MenuProps } from '@arco-design/web-react';
import { DownOutlined, RightOutlined } from '@easyv/react-icons';
import './index.less';
import { forwardRef } from 'react';

type XMenuProps = React.ForwardRefExoticComponent<
  MenuProps & React.RefAttributes<unknown>
> & {
  Item: typeof Menu.Item;
  ItemGroup: typeof Menu.ItemGroup;
  SubMenu: typeof Menu.SubMenu;
  __ARCO_MENU__: boolean;
};

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
}) as XMenuProps;

XMenu.Item = Menu.Item;
XMenu.SubMenu = Menu.SubMenu;
XMenu.ItemGroup = Menu.ItemGroup;
XMenu.__ARCO_MENU__ = Menu.__ARCO_MENU__;

export default XMenu;
export { MenuProps };
