# 菜单 Menu

收纳、排列并展示一系列选项的列表。

## 顶部导航菜单

设置 `mode` 为 `horizontal` 时，使用水平菜单。

`mode` to `horizontal`, you can use the horizontal menu.

```tsx
import { Menu } from '@xiaoyaoliu/x-arco-design';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function App() {
  return (
    <div className="menu-demo">
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <MenuItem key="0" style={{ padding: 0, marginRight: 38 }} disabled>
          <div
            style={{
              width: 80,
              height: 30,
              borderRadius: 2,
              background: 'var(--color-fill-3)',
              cursor: 'text',
            }}
          />
        </MenuItem>
        <MenuItem key="1">Home</MenuItem>
        <MenuItem key="2">Solution</MenuItem>
        <MenuItem key="3">Cloud Service</MenuItem>
        <MenuItem key="4">Cooperation</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
```

```css:silent
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.menu-demo .arco-menu-inner {
  overflow-y: auto;
}
```

## 深色模式导航

通过 `theme` 指定主题，分为 `light` 和 `dark` 两种。

`theme`, which can be divided into two types: `light` and `dark`.

```tsx
import { Menu } from '@xiaoyaoliu/x-arco-design';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function App() {
  return (
    <div className="menu-demo">
      <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']}>
        <MenuItem key="0" style={{ padding: 0, marginRight: 38 }} disabled>
          <div
            style={{
              width: 80,
              height: 30,
              background: 'var(--color-fill-3)',
              cursor: 'text',
            }}
          />
        </MenuItem>
        <MenuItem key="1">Home</MenuItem>
        <MenuItem key="2">Solution</MenuItem>
        <MenuItem key="3">Cloud Service</MenuItem>
        <MenuItem key="4">Cooperation</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
```

```css:silent
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.menu-demo .arco-menu-inner {
  overflow-y: auto;
}
```

## 缩起内嵌菜单

通过 `collapse` 来指定菜单收起。

`collapse` to specify the menu to collapse.

```tsx
import { useState } from 'react';
import { Menu, Button } from '@xiaoyaoliu/x-arco-design';
import {
  IconMenuFold,
  IconMenuUnfold,
  IconApps,
  IconBug,
  IconBulb,
} from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="menu-demo">
      <Button
        style={{
          padding: '0 12px',
          height: 30,
          lineHeight: '30px',
          marginBottom: 4,
        }}
        type="primary"
        onClick={() => setCollapse(!collapse)}
      >
        {collapse ? <IconMenuUnfold /> : <IconMenuFold />}
      </Button>
      <Menu
        style={{ width: 200, borderRadius: 4 }}
        theme="dark"
        collapse={collapse}
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_2']}
      >
        <SubMenu
          key="0"
          title={
            <>
              <IconApps /> Navigation 1
            </>
          }
        >
          <MenuItem key="0_0">Menu 1</MenuItem>
          <MenuItem key="0_1">Menu 2</MenuItem>
          <MenuItem key="0_2">Menu 3</MenuItem>
          <MenuItem key="0_3">Menu 4</MenuItem>
        </SubMenu>
        <SubMenu
          key="1"
          title={
            <>
              <IconBug /> Navigation 2
            </>
          }
        >
          <MenuItem key="1_0">Menu 1</MenuItem>
          <MenuItem key="1_1">Menu 2</MenuItem>
          <MenuItem key="1_2">Menu 3</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <IconBulb /> Navigation 3
            </>
          }
        >
          <MenuItem key="2_0">Menu 1</MenuItem>
          <MenuItem key="2_1">Menu 2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
```

```css:silent
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.menu-demo .arco-menu-inner {
  overflow-y: auto;
}
```

## 内嵌菜单

菜单内可以嵌入多个子项，通过 `defaultOpenKeys` 可以设置默认打开的子项。

`defaultOpenKeys`.

```tsx
import { Menu } from '@xiaoyaoliu/x-arco-design';
import { IconApps, IconBug, IconBulb } from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = () => {
  return (
    <div className="menu-demo" style={{ height: 600 }}>
      <Menu
        style={{ width: 200, height: '100%' }}
        hasCollapseButton
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_1']}
      >
        <SubMenu
          key="0"
          title={
            <>
              <IconApps /> Navigation 1
            </>
          }
        >
          <MenuItem key="0_0">Menu 1</MenuItem>
          <MenuItem key="0_1">Menu 2</MenuItem>
          <MenuItem key="0_2" disabled>
            Menu 3
          </MenuItem>
        </SubMenu>
        <SubMenu
          key="1"
          title={
            <>
              <IconBug /> Navigation 2
            </>
          }
        >
          <MenuItem key="1_0">Menu 1</MenuItem>
          <MenuItem key="1_1">Menu 2</MenuItem>
          <MenuItem key="1_2">Menu 3</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <IconBulb /> Navigation 3
            </>
          }
        >
          <MenuItemGroup key="2_0" title="Menu Group 1">
            <MenuItem key="2_0_0">Menu 1</MenuItem>
            <MenuItem key="2_0_1">Menu 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup key="2_1" title="Menu Group 1">
            <MenuItem key="2_1_0">Menu 3</MenuItem>
            <MenuItem key="2_1_1">Menu 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default App;
```

```css:silent
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.menu-demo .arco-menu-inner {
  overflow-y: auto;
}
```

## 不同大小菜单

通过 `style` 自由指定菜单的宽度和菜单项的高度。

`style`.

```tsx
import { useState } from 'react';
import { Menu, Slider } from '@xiaoyaoliu/x-arco-design';
import { IconApps, IconBug, IconBulb } from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function App() {
  const [width, setWidth] = useState(240);
  return (
    <div className="menu-demo" style={{ height: 600 }}>
      <Slider
        style={{ width: 320, marginBottom: 24 }}
        value={width}
        onChange={(value) => setWidth(value)}
        step={10}
        min={160}
        max={400}
      />
      <Menu
        style={{ width: width, height: 'calc(100% - 28px)' }}
        hasCollapseButton
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_1']}
      >
        <SubMenu
          key="0"
          title={
            <>
              <IconApps /> Navigation 1
            </>
          }
        >
          <MenuItem key="0_0">Menu 1</MenuItem>
          <MenuItem key="0_1">Menu 2</MenuItem>
          <MenuItem key="0_2" disabled>
            Menu 3
          </MenuItem>
        </SubMenu>
        <SubMenu
          key="1"
          title={
            <>
              <IconBug /> Navigation 2
            </>
          }
        >
          <MenuItem key="1_0">Menu 1</MenuItem>
          <MenuItem key="1_1">Menu 2</MenuItem>
          <MenuItem key="1_2">Menu 3</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <IconBulb /> Navigation 3
            </>
          }
        >
          <MenuItem key="2_0">Menu 1</MenuItem>
          <MenuItem key="2_1">Menu 2</MenuItem>
          <MenuItem key="2_2">Menu 3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
```

```css:silent
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.menu-demo .arco-menu-inner {
  overflow-y: auto;
}
```

## 悬浮菜单

指定 `mode` 为 `pop` 可以使用悬浮菜单。

`mode` as `pop` to use floating menu.

```tsx
import { Menu } from '@xiaoyaoliu/x-arco-design';
import {
  IconApps,
  IconSafe,
  IconBulb,
  IconRobot,
  IconFire,
} from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const App = () => {
  return (
    <div className="menu-demo-round" style={{ height: 600 }}>
      <Menu style={{ width: 200 }} mode="pop" hasCollapseButton>
        <MenuItem key="0">
          <IconApps />
          Navigation 1
        </MenuItem>
        <SubMenu
          key="1"
          title={
            <>
              <IconRobot />
              Navigation 2
            </>
          }
        >
          <MenuItem key="1_0">Beijing</MenuItem>
          <MenuItem key="1_1">Shanghai</MenuItem>
          <MenuItem key="1_2">Guangzhou</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <IconBulb />
              Navigation 3
            </>
          }
        >
          <MenuItem key="2_0">Wuhan</MenuItem>
          <MenuItem key="2_1">Chengdu</MenuItem>
        </SubMenu>
        <MenuItem key="3">
          <IconSafe />
          Navigation 4
        </MenuItem>
        <MenuItem key="4">
          <IconFire />
          Navigation 5
        </MenuItem>
      </Menu>
    </div>
  );
};

export default App;
```

```css
.menu-demo-round {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.menu-demo-round .arco-menu-inner {
  overflow-y: auto;
}

.menu-demo-round .arco-menu {
  height: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

.menu-demo-round
  .arco-menu:not(.arco-menu-collapse)
  .arco-menu-collapse-button {
  right: 0;
  bottom: 8px;
  transform: translateX(50%);
}

.menu-demo-round .arco-menu:not(.arco-menu-collapse)::before {
  content: '';
  position: absolute;
  width: 48px;
  height: 48px;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: inherit;
  box-shadow: -4px 0 2px var(--color-bg-2), 0 0 1px rgba(0, 0, 0, 0.3);
  transform: translateX(50%);
}

.menu-demo-round .arco-menu-collapse {
  height: auto;
  padding-top: 24px;
  padding-bottom: 138px;
  border-radius: 22px;
}

.menu-demo-round .arco-menu-collapse-button {
  right: 8px;
  bottom: 8px;
}

.menu-demo-round .arco-menu-collapse-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
```

## 悬浮按钮菜单

指定 `mode` 为 `popButton` 使用按钮组样式的悬浮菜单。

`mode` to `popButton`, you can use a button group style floating menu.

```tsx
import { useState } from 'react';
import { Menu, Trigger } from '@xiaoyaoliu/x-arco-design';
import {
  IconMessage,
  IconClose,
  IconBug,
  IconBulb,
} from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;

function App() {
  const renderMenu = () => {
    return (
      <Menu
        style={{ marginBottom: -4 }}
        mode="popButton"
        tooltipProps={{ position: 'left' }}
        hasCollapseButton
      >
        <MenuItem key="1">
          <IconBug />
          Bugs
        </MenuItem>
        <MenuItem key="2">
          <IconBulb />
          Ideas
        </MenuItem>
      </Menu>
    );
  };

  const [popupVisibleOne, setPopupVisibleOne] = useState(false);
  const [popupVisibleTwo, setPopupVisibleTwo] = useState(false);
  return (
    <div className="menu-demo menu-demo-button">
      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        position="top"
        onVisibleChange={(v) => setPopupVisibleOne(v)}
      >
        <div
          className={`button-trigger ${
            popupVisibleOne ? 'button-trigger-active' : ''
          }`}
        >
          {popupVisibleOne ? <IconClose /> : <IconMessage />}
        </div>
      </Trigger>

      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        position="top"
        onVisibleChange={(v) => setPopupVisibleTwo(v)}
      >
        <div
          className={`button-trigger ${
            popupVisibleTwo ? 'button-trigger-active' : ''
          }`}
        >
          {popupVisibleTwo ? <IconClose /> : <IconMessage />}
        </div>
      </Trigger>
    </div>
  );
}

export default App;
```

```css
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.menu-demo .arco-menu-inner {
  overflow-y: auto;
}

.menu-demo-button {
  position: relative;
  width: 660px;
  height: 300px;
  background-color: var(--color-fill-2);
}

.button-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 14px;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.1s;
}

.button-trigger:nth-child(1) {
  left: 150px;
  background-color: var(--color-neutral-5);
}

.button-trigger:nth-child(1).button-trigger-active {
  background-color: var(--color-neutral-4);
}

.button-trigger:nth-child(2) {
  left: 372px;
  background-color: rgb(var(--arcoblue-6));
}

.button-trigger:nth-child(2).button-trigger-active {
  background-color: var(--color-primary-light-4);
}
```

## API

### Menu

| 参数名              | 描述                                                                                                                      | 类型                                                                                                                                                | 默认值     | 版本                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------- |
| accordion           | 开启手风琴效果                                                                                                            | boolean                                                                                                                                             | `-`        | -                                      |
| autoOpen            | 默认展开所有多级菜单                                                                                                      | boolean                                                                                                                                             | `-`        | -                                      |
| autoScrollIntoView  | 是否自动滚动选中项目到可见区域                                                                                            | boolean                                                                                                                                             | `-`        | -                                      |
| collapse            | 是否水平折叠收起菜单                                                                                                      | boolean                                                                                                                                             | `-`        | -                                      |
| hasCollapseButton   | 是否内置折叠按钮                                                                                                          | boolean                                                                                                                                             | `-`        | -                                      |
| selectable          | 菜单选项是否可选                                                                                                          | boolean                                                                                                                                             | `true`     | -                                      |
| levelIndent         | 层级之间的缩进量                                                                                                          | number                                                                                                                                              | `-`        | -                                      |
| mode                | 菜单类型，目前支持垂直（vertical）、水平菜单（horizontal）、弹出（pop）                                                   | 'vertical' \| 'horizontal' \| 'pop' \| 'popButton'                                                                                                  | `vertical` | -                                      |
| theme               | 菜单风格                                                                                                                  | 'light' \| 'dark'                                                                                                                                   | `light`    | -                                      |
| className           | 节点类名                                                                                                                  | string \| string[]                                                                                                                                  | `-`        | -                                      |
| defaultOpenKeys     | 初始展开的子菜单 key 数组                                                                                                 | string[]                                                                                                                                            | `-`        | -                                      |
| defaultSelectedKeys | 初始选中的菜单项 key 数组                                                                                                 | string[]                                                                                                                                            | `-`        | -                                      |
| ellipsis            | 水平菜单是否自动溢出省略                                                                                                  | \| boolean\| {text?: ReactNode;}                                                                                                                    | `true`     | 2.24.0                                 |
| icons               | 用于定制图标                                                                                                              | {horizontalArrowDown?: ReactNode \| null;popArrowRight?: ReactNode \| null;collapseDefault?: ReactNode \| null;collapseActive?: ReactNode \| null;} | `-`        | -                                      |
| openKeys            | 展开的子菜单 key 数组（受控模式）                                                                                         | string[]                                                                                                                                            | `-`        | -                                      |
| scrollConfig        | 滚动到可见区域的配置项，接收所有[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)的参数 | { [key: string]: any }                                                                                                                              | `-`        | -                                      |
| selectedKeys        | 选中的菜单项 key 数组（受控模式）                                                                                         | string[]                                                                                                                                            | `-`        | -                                      |
| style               | 节点样式                                                                                                                  | CSSProperties                                                                                                                                       | `-`        | -                                      |
| tooltipProps        | 弹出模式下可接受所有 `ToolTip` 的 `Props`                                                                                 | Partial&lt;[TooltipProps](tooltip#tooltip)&gt;                                                                                                      | `-`        | -                                      |
| triggerProps        | 弹出模式下可接受所有 `Trigger` 的 `Props`                                                                                 | Partial&lt;[TriggerProps](trigger#trigger)&gt;                                                                                                      | `-`        | -                                      |
| onClickMenuItem     | 点击菜单项的回调                                                                                                          | (key: string, event, keyPath: string[]) => any                                                                                                      | `-`        | `event` in 2.15.0, `keyPath` in 2.19.0 |
| onClickSubMenu      | 点击子菜单标题的回调                                                                                                      | (key: string, openKeys: string[], keyPath: string[]) => void                                                                                        | `-`        | `keyPath` in 2.19.0                    |
| onCollapseChange    | 折叠状态改变时的回调                                                                                                      | (collapse: boolean) => void                                                                                                                         | `-`        | -                                      |

### Menu.SubMenu

| 参数名       | 描述                                                   | 类型                                           | 默认值 | 版本   |
| ------------ | ------------------------------------------------------ | ---------------------------------------------- | ------ | ------ |
| selectable   | 是否将多级菜单头也作为一个菜单项，支持点击选中等状态。 | boolean                                        | `-`    | -      |
| key          | 唯一标志                                               | string **(必填)**                              | `-`    | -      |
| title        | 子菜单的标题                                           | string \| ReactNode                            | `-`    | -      |
| className    | 节点类名                                               | string \| string[]                             | `-`    | -      |
| style        | 节点样式                                               | CSSProperties                                  | `-`    | -      |
| triggerProps | 弹出模式下可接受所有 `Trigger` 的 `Props`              | Partial&lt;[TriggerProps](trigger#trigger)&gt; | `-`    | 2.19.0 |
| popup        | 是否强制使用弹出模式，`level` 表示当前子菜单的层级     | boolean \| ((level: number) => boolean)        | `-`    | 2.8.0  |

### Menu.ItemGroup

| 参数名    | 描述         | 类型                | 默认值 |
| --------- | ------------ | ------------------- | ------ |
| title     | 菜单组的标题 | string \| ReactNode | `-`    |
| className | 节点类名     | string \| string[]  | `-`    |
| style     | 节点样式     | CSSProperties       | `-`    |

### Menu.Item

| 参数名    | 描述                                     | 类型                                                             | 默认值 | 版本   |
| --------- | ---------------------------------------- | ---------------------------------------------------------------- | ------ | ------ |
| disabled  | 菜单项禁止选中                           | boolean                                                          | `-`    | -      |
| key       | 唯一标志                                 | string **(必填)**                                                | `-`    | -      |
| className | 节点类名                                 | string \| string[]                                               | `-`    | -      |
| style     | 节点样式                                 | CSSProperties                                                    | `-`    | -      |
| wrapper   | 配置最外层标签，可以是 html 标签或是组件 | string \| React.FC&lt;any&gt; \| React.ComponentClass&lt;any&gt; | `div`  | 2.16.0 |
