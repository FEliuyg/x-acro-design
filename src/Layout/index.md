# 布局 Layout

页面的基础布局框架，常与组件嵌套使用，构建页面整体布局。

## 基础用法

典型的页面布局。

```tsx
import { Layout } from '@xiaoyaoliu/x-arco-design';
import './demo.css';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const App = () => {
  return (
    <div className="layout-basic-demo">
      <Layout style={{ height: '400px' }}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: '400px' }}>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: '400px' }}>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: '400px' }}>
        <Header>Header</Header>
        <Layout>
          <Sider style={{ width: '64px' }}>Sider</Sider>
          <Sider style={{ width: '206px', marginLeft: '1px' }}>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App;
```

## 自定义按钮

通过设置 `Menu.Sider` 的 `trigger` 属性，实现自定义收起按钮的图标。

```tsx
import React from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Message,
} from '@xiaoyaoliu/x-arco-design';
import {
  IconHome,
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
} from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

class App extends React.Component {
  state = {
    collapsed: false,
  };
  handleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout-collapse-demo">
        <Sider
          collapsed={this.state.collapsed}
          onCollapse={this.handleCollapsed}
          collapsible
          trigger={
            this.state.collapsed ? <IconCaretRight /> : <IconCaretLeft />
          }
          breakpoint="xl"
        >
          <div className="logo" />
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['0_3']}
            onClickMenuItem={(key) =>
              Message.info({
                content: `You select ${key}`,
                showIcon: true,
              })
            }
            style={{ width: '100%' }}
          >
            <MenuItem key="0_1" disabled>
              <IconHome />
              Menu 1
            </MenuItem>
            <MenuItem key="0_2">
              <IconCalendar />
              Menu 2
            </MenuItem>
            <MenuItem key="0_3">
              <IconCalendar />
              Menu 3
            </MenuItem>
            <SubMenu
              key="1"
              title={
                <span>
                  <IconCalendar />
                  Navigation 1
                </span>
              }
            >
              <MenuItem key="1_1">Menu 1</MenuItem>
              <MenuItem key="1_2">Menu 2</MenuItem>
              <SubMenu key="2" title="Navigation 2">
                <MenuItem key="2_1">Menu 1</MenuItem>
                <MenuItem key="2_2">Menu 2</MenuItem>
              </SubMenu>
              <SubMenu key="3" title="Navigation 3">
                <MenuItem key="3_1">Menu 1</MenuItem>
                <MenuItem key="3_2">Menu 2</MenuItem>
                <MenuItem key="3_3">Menu 3</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="4"
              title={
                <span>
                  <IconCalendar />
                  Navigation 4
                </span>
              }
            >
              <MenuItem key="4_1">Menu 1</MenuItem>
              <MenuItem key="4_2">Menu 2</MenuItem>
              <MenuItem key="4_3">Menu 3</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ paddingLeft: 20 }}>Header</Header>
          <Layout style={{ padding: '0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
```

## 自定义收起按钮

设置 `Menu.Sider` 的 `trigger` 属性为 `null` 后，`Sider` 内置的缩起按钮不会显示。此时可自定义收起按钮。

```tsx
import React from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Message,
} from '@xiaoyaoliu/x-arco-design';
import {
  IconHome,
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
} from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

class App extends React.Component {
  state = {
    collapsed: false,
  };
  handleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout-collapse-demo">
        <Sider
          collapsed={this.state.collapsed}
          collapsible
          trigger={null}
          breakpoint="xl"
        >
          <div className="logo" />
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['0_3']}
            onClickMenuItem={(key) =>
              Message.info({
                content: `You select ${key}`,
                showIcon: true,
              })
            }
            style={{ width: '100%' }}
          >
            <MenuItem key="0_1" disabled>
              <IconHome />
              Menu 1
            </MenuItem>
            <MenuItem key="0_2">
              <IconCalendar />
              Menu 2
            </MenuItem>
            <MenuItem key="0_3">
              <IconCalendar />
              Menu 3
            </MenuItem>
            <SubMenu
              key="1"
              title={
                <span>
                  <IconCalendar />
                  Navigation 1
                </span>
              }
            >
              <MenuItem key="1_1">Menu 1</MenuItem>
              <MenuItem key="1_2">Menu 2</MenuItem>
              <SubMenu key="2" title="Navigation 2">
                <MenuItem key="2_1">Menu 1</MenuItem>
                <MenuItem key="2_2">Menu 2</MenuItem>
              </SubMenu>
              <SubMenu key="3" title="Navigation 3">
                <MenuItem key="3_1">Menu 1</MenuItem>
                <MenuItem key="3_2">Menu 2</MenuItem>
                <MenuItem key="3_3">Menu 3</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="4"
              title={
                <span>
                  <IconCalendar />
                  Navigation 4
                </span>
              }
            >
              <MenuItem key="4_1">Menu 1</MenuItem>
              <MenuItem key="4_2">Menu 2</MenuItem>
              <MenuItem key="4_3">Menu 3</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Button
              shape="round"
              className="trigger"
              onClick={this.handleCollapsed}
            >
              {this.state.collapsed ? <IconCaretRight /> : <IconCaretLeft />}
            </Button>
          </Header>
          <Layout style={{ padding: '0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
```

## 响应式侧边栏

左侧 Sider 可以结合 Menu 设置为展开/收起状态, 设置 `breakpoint` 可触发响应式收缩。

```tsx
import React from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Message,
  MenuProps,
} from '@xiaoyaoliu/x-arco-design';
import { IconHome, IconCalendar } from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function BaseMenu(props: MenuProps) {
  return (
    <Menu defaultOpenKeys={['1']} defaultSelectedKeys={['0_2']} {...props}>
      <MenuItem key="0_1" disabled>
        <IconHome />
        Menu 1
      </MenuItem>
      <MenuItem key="0_2">
        <IconCalendar />
        Menu 2
      </MenuItem>
      <SubMenu
        key="1"
        title={
          <span>
            <IconCalendar />
            Navigation 1
          </span>
        }
      >
        <MenuItem key="1_1">Menu 1</MenuItem>
        <MenuItem key="1_2">Menu 2</MenuItem>
        <SubMenu key="2" title="Navigation 2">
          <MenuItem key="2_1">Menu 1</MenuItem>
          <MenuItem key="2_2">Menu 2</MenuItem>
        </SubMenu>
        <SubMenu key="3" title="Navigation 3">
          <MenuItem key="3_1">Menu 1</MenuItem>
          <MenuItem key="3_2">Menu 2</MenuItem>
          <MenuItem key="3_3">Menu 3</MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="4"
        title={
          <span>
            <IconCalendar />
            Navigation 4
          </span>
        }
      >
        <MenuItem key="4_1">Menu 1</MenuItem>
        <MenuItem key="4_2">Menu 2</MenuItem>
        <MenuItem key="4_3">Menu 3</MenuItem>
      </SubMenu>
    </Menu>
  );
}

class App extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed: boolean, type: 'clickTrigger' | 'responsive') => {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    Message.info({
      content,
      duration: 2000,
    });
    this.setState({
      collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout-collapse-demo">
        <Sider
          theme="dark"
          breakpoint="lg"
          onCollapse={this.onCollapse}
          collapsed={this.state.collapsed}
          width={220}
          collapsible
        >
          <div className="logo" />
          <BaseMenu
            onClickMenuItem={(key) =>
              Message.info({
                content: `You select ${key}`,
                showIcon: true,
              })
            }
            theme="dark"
            style={{ width: '100%' }}
          />
        </Sider>
        <Layout>
          <Header>
            <BaseMenu mode="horizontal" />
          </Header>
          <Layout style={{ padding: '0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
```

## 可伸缩侧边栏

可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：`resizeDirections`。

```tsx
import { Layout } from '@xiaoyaoliu/x-arco-design';
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const App = () => {
  return (
    <div className="layout-basic-demo">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider
            resizeDirections={['right']}
            style={{
              minWidth: 150,
              maxWidth: 500,
              height: 200,
            }}
          >
            Sider
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App;
```

## 伸缩

通过 `resizeBoxProps.onMoving`方法， 配置 `width` 和 `collapsed` 可以实现即可以拖拽伸缩杆也可以点击收缩的侧边栏。

这时侧边栏的宽度完全受控于 `width` 的值

```tsx
import { useState } from 'react';
import { Layout, Menu } from '@xiaoyaoliu/x-arco-design';
import { IconHome, IconCalendar } from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Content = Layout.Content;
const collapsedWidth = 60;
const normalWidth = 220;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState(normalWidth);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
    setSiderWidth(collapsed ? collapsedWidth : normalWidth);
  };

  const handleMoving = (
    _: MouseEvent,
    {
      width,
    }: {
      width: number;
      height: number;
    },
  ) => {
    if (width > collapsedWidth) {
      setSiderWidth(width);
      setCollapsed(!(width > collapsedWidth + 20));
    } else {
      setSiderWidth(collapsedWidth);
      setCollapsed(true);
    }
  };

  return (
    <Layout className="byte-layout-collapse-demo">
      <Sider
        collapsible
        theme="dark"
        onCollapse={onCollapse}
        collapsed={collapsed}
        width={siderWidth}
        resizeBoxProps={{
          directions: ['right'],
          onMoving: handleMoving,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" autoOpen style={{ width: '100%' }}>
          <MenuItem key="1" disabled>
            <IconHome />
            设计指南
          </MenuItem>
          <MenuItem key="2">
            <IconCalendar />
            区块
          </MenuItem>
          <MenuItem key="3">
            <IconCalendar />
            模块
          </MenuItem>
          <SubMenu
            key="layout"
            title={
              <span>
                <IconCalendar /> 布局组件
              </span>
            }
          >
            <MenuItem key="11">栅格</MenuItem>
            <MenuItem key="12">分隔符</MenuItem>
            <MenuItem key="13">布局</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Content
        style={{
          background: 'rgb(240,255,255)',
          textAlign: 'center',
          padding: '30px',
        }}
      >
        <div style={{ width: '100%', height: '100%' }}>Content</div>
      </Content>
    </Layout>
  );
}

export default App;
```

## API

### Layout

| 参数名    | 描述                                                               | 类型               | 默认值 |
| --------- | ------------------------------------------------------------------ | ------------------ | ------ |
| hasSider  | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean            | `-`    |
| className | 节点类名                                                           | string \| string[] | `-`    |
| style     | 节点样式                                                           | CSSProperties      | `-`    |

### Layout.Header

| 参数名    | 描述     | 类型               | 默认值 |
| --------- | -------- | ------------------ | ------ |
| className | 节点类名 | string \| string[] | `-`    |
| style     | 节点样式 | CSSProperties      | `-`    |

### Layout.Footer

| 参数名    | 描述     | 类型               | 默认值 |
| --------- | -------- | ------------------ | ------ |
| className | 节点类名 | string \| string[] | `-`    |
| style     | 节点样式 | CSSProperties      | `-`    |

### Layout.Content

| 参数名    | 描述     | 类型               | 默认值 |
| --------- | -------- | ------------------ | ------ |
| className | 节点类名 | string \| string[] | `-`    |
| style     | 节点样式 | CSSProperties      | `-`    |

### Layout.Sider

| 参数名           | 描述                                                                                                                                      | 类型                                                              | 默认值  | 版本   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------- | ------ |
| collapsed        | 当前收起状态                                                                                                                              | boolean                                                           | `-`     | -      |
| collapsible      | 是否可收起                                                                                                                                | boolean                                                           | `-`     | -      |
| defaultCollapsed | 是否默认收起                                                                                                                              | boolean                                                           | `-`     | -      |
| reverseArrow     | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用                                                                                         | boolean                                                           | `-`     | -      |
| collapsedWidth   | 收缩宽度，设置为 0 会出现特殊 trigger                                                                                                     | number                                                            | `48`    | -      |
| onCollapse       | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发                                                                      | (collapse: boolean, type: 'clickTrigger' \| 'responsive') => void | `-`     | -      |
| theme            | 主题颜色                                                                                                                                  | 'dark' \| 'light'                                                 | `light` | -      |
| trigger          | 自定义底部折叠触发器，设置为 null 时隐藏 trigger                                                                                          | string \| ReactNode                                               | `-`     | -      |
| breakpoint       | 触发响应式布局的断点, 详见[响应式栅格](/react/components/Grid)                                                                            | [GridResponsiveBreakpoint](#gridresponsivebreakpoint)             | `-`     | -      |
| className        | 节点类名                                                                                                                                  | string \| string[]                                                | `-`     | -      |
| resizeBoxProps   | 可以接受 `ResizeBox` 所有参数，在伸缩开启时，可以通过 `resizeBoxProps` 对菜单栏的 `width` 进行受控展示或者与 `collapsed` 联动             | [ResizeBoxProps](resize-box#resizebox)                            | `-`     | 2.34.0 |
| resizeDirections | 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox 的 `directions` 参数。详情请看 [ResizeBox](/react/components/resize-box)。 | string[]                                                          | `-`     | -      |
| style            | 节点样式                                                                                                                                  | CSSProperties                                                     | `-`     | -      |
| width            | 宽度                                                                                                                                      | number \| string                                                  | `200`   | -      |
| onBreakpoint     | 触发响应式布局断点时的回调                                                                                                                | (broken: boolean) => void                                         | `-`     | -      |

### GridResponsiveBreakpoint

```js
export type GridResponsiveBreakpoint =
  | 'xxxl'
  | 'xxl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs';
```
