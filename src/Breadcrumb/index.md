# 面包屑 Breadcrumb

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

## 基础用法

适用于广泛基本用法。分隔方式分为图标分隔及斜线分隔两种方式，可根据不同场景使用。

```tsx
import { Breadcrumb } from '@xiaoyaoliu/x-arco-design';
const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default App;
```

## 自定义分隔符

自定义分隔符。

```tsx
import { Breadcrumb, Space } from '@xiaoyaoliu/x-arco-design';
import { IconRight } from '@arco-design/web-react/icon';
const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<IconRight />}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<span>・</span>}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  );
};

export default App;
```

## 自定义尺寸

通过指定样式来自定义各种面包屑的尺寸。

```tsx
import { Breadcrumb, Space } from '@xiaoyaoliu/x-arco-design';
const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb style={{ fontSize: 12 }}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  );
};

export default App;
```

## 自定义图标

可以在内容中使用自定义图标

```tsx
import { Breadcrumb, Space } from '@xiaoyaoliu/x-arco-design';
import { IconHome } from '@arco-design/web-react/icon';
const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>
          <IconHome />
        </BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb style={{ fontSize: 12 }}>
        <BreadcrumbItem>
          <IconHome />
        </BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  );
};

export default App;
```

## 带有下拉菜单

通过 `droplist` 或者 `routes` 来指定下拉菜单。

`droplist` or `routes` to specify the drop-down menu.

```tsx
import { Breadcrumb, Menu } from '@xiaoyaoliu/x-arco-design';
const BreadcrumbItem = Breadcrumb.Item;
const menu = (
  <Menu>
    <Menu.Item key="1">Data</Menu.Item>
    <Menu.Item key="2">Users</Menu.Item>
    <Menu.Item key="3">Permission</Menu.Item>
  </Menu>
);
const routes = [
  {
    path: '/',
    breadcrumbName: 'Home',
  },
  {
    path: '/Channel',
    breadcrumbName: 'Channel',
    children: [
      {
        path: '/users',
        breadcrumbName: 'Users',
      },
      {
        path: '/permission',
        breadcrumbName: 'Permission',
      },
    ],
  },
  {
    path: '/news',
    breadcrumbName: 'News',
  },
];

const App = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem droplist={menu}>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <br />
      <Breadcrumb style={{ marginTop: 20 }} routes={routes} />
    </div>
  );
};

export default App;
```

## 显示省略

通过 `maxCount` 来指定最多渲染的面包屑数量，超出的部分将显示为省略号。

`maxCount` to set the maximum number of breadcrumbs to render. The rest will be displayed as an ellipsis.

```tsx
import { Breadcrumb } from '@xiaoyaoliu/x-arco-design';
const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <div>
      <Breadcrumb maxCount={3}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Sub Home</BreadcrumbItem>
        <BreadcrumbItem>All Channel</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default App;
```

## API

### Breadcrumb

| 参数名     | 描述                            | 类型                                                                                                  | 默认值                |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------- |
| maxCount   | 最多渲染的面包屑数量            | number                                                                                                | `-`                   |
| separator  | 指定分割符                      | string \| ReactNode                                                                                   | `<IconObliqueLine />` |
| className  | 节点类名                        | string \| string[]                                                                                    | `-`                   |
| routes     | 直接设置下拉菜单                | [RouteProps](#routeprops)[]                                                                           | `-`                   |
| style      | 节点样式                        | CSSProperties                                                                                         | `-`                   |
| itemRender | routes 时生效，自定义渲染面包屑 | (route: [RouteProps](#routeprops), routes: [RouteProps](#routeprops)[], paths: string[]) => ReactNode | `-`                   |

### Breadcrumb.Item

| 参数名        | 描述                                                 | 类型                                                             | 默认值 | 版本   |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------- | ------ | ------ |
| href          | 超链接地址                                           | string                                                           | `-`    | 2.40.0 |
| droplist      | 下拉菜单的内容，等同于下拉菜单组件的 droplist 属性   | [DropdownProps](dropdown#dropdown)['droplist']                   | `-`    | -      |
| className     | 节点类名                                             | string \| string[]                                               | `-`    | -      |
| dropdownProps | 下拉菜单的属性 [DropdownProps](/components/dropdown) | [DropdownProps](dropdown#dropdown)                               | `-`    | -      |
| style         | 节点样式                                             | CSSProperties                                                    | `-`    | -      |
| tagName       | 标签名，可以是 html 标签或是组件                     | string \| React.FC&lt;any&gt; \| React.ComponentClass&lt;any&gt; | `div`  | 2.40.0 |
| onClick       | 点击回调                                             | (e: any) => void                                                 | `-`    | 2.40.0 |

### RouteProps

```js
export interface RouteProps {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string,
    breadcrumbName: string,
  }>;
}
```
