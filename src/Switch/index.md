# 开关 Switch

互斥性的操作控件，用户可打开或关闭某个功能。

## 基础用法

最基础的应用。

```tsx
import { Switch } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Switch />;
};

export default App;
```

## 不同类型

有三种类型的开关可供选择。

```tsx
import { Switch, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large">
      <Switch />
      <Switch type="round" />
      <Switch type="line" />
    </Space>
  );
};

export default App;
```

## 禁用状态

通过 `disabled` 设置 `Switch` 为禁用状态。

`Switch` to be disabled by `disabled`.

```tsx
import { Switch, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large">
      <Switch disabled />
      <Switch checked disabled />
      <Switch type="round" disabled />
      <Switch type="round" checked disabled />
      <Switch type="line" disabled />
      <Switch type="line" checked disabled />
    </Space>
  );
};

export default App;
```

## 不同尺寸的开关

通过指定 `size` 可以得到不同尺寸的开关。

`size`.

```tsx
import { Switch, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large">
      <Switch />
      <Switch size="small" />
      <Switch type="round" />
      <Switch size="small" type="round" />
      <Switch type="line" />
      <Switch size="small" type="line" />
    </Space>
  );
};

export default App;
```

## 自定义文案

自定义开关打开（关闭）时需要显示的文字或者图标。

```tsx
import { Switch, Space } from '@xiaoyaoliu/x-arco-design';
import { IconCheck, IconClose } from '@arco-design/web-react/icon';

const App = () => {
  return (
    <Space size="large">
      <Switch checkedText="ON" uncheckedText="OFF" />
      <Switch checkedText="1" uncheckedText="0" type="round" defaultChecked />
      <Switch
        checkedText={<IconCheck />}
        uncheckedText={<IconClose />}
        defaultChecked
      />
    </Space>
  );
};

export default App;
```

## 带图标的开关

自定义开关按钮上显示的图标。

```tsx
import { Switch, Space } from '@xiaoyaoliu/x-arco-design';
import { IconCheck, IconClose } from '@arco-design/web-react/icon';

const App = () => {
  return (
    <Space size="large">
      <Switch
        checkedIcon={<IconCheck />}
        uncheckedIcon={<IconClose />}
        defaultChecked
      />
      <Switch
        type="round"
        checkedIcon={<IconCheck />}
        uncheckedIcon={<IconClose />}
        defaultChecked
      />
      <Switch
        type="line"
        checkedIcon={<IconCheck />}
        uncheckedIcon={<IconClose />}
        defaultChecked
      />
    </Space>
  );
};

export default App;
```

## 加载中

开关处于加载中状态，不可点击。

`Switch` is in the loading state and cannot be clicked.

```tsx
import { Switch, Divider, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Switch loading defaultChecked />
        <Switch loading />
        <Switch loading type="round" defaultChecked />
        <Switch loading type="round" />
        <Switch loading type="line" defaultChecked />
        <Switch loading type="line" />
      </Space>
      <Space size="large">
        <Switch loading size="small" defaultChecked />
        <Switch loading size="small" />
        <Switch loading size="small" type="round" defaultChecked />
        <Switch loading size="small" type="round" />
        <Switch loading size="small" type="line" defaultChecked />
        <Switch loading size="small" type="line" />
      </Space>
    </Space>
  );
};

export default App;
```

## API

### Switch

| 参数名         | 描述                                           | 类型                            | 默认值   |
| -------------- | ---------------------------------------------- | ------------------------------- | -------- |
| checked        | 开关是否打开                                   | boolean                         | `-`      |
| defaultChecked | 默认是否选中                                   | boolean                         | `-`      |
| disabled       | 是否禁用                                       | boolean                         | `-`      |
| loading        | 加载中状态                                     | boolean                         | `-`      |
| size           | 开关的尺寸，有 `small` 和 `default` 可供选择。 | 'small' \| 'default'            | `-`      |
| type           | 三种样式类型                                   | 'circle' \| 'round' \| 'line'   | `circle` |
| checkedIcon    | 开关打开时，按钮上显示的图标                   | ReactNode                       | `-`      |
| checkedText    | 开关打开时的文案，small 尺寸不生效。           | ReactNode                       | `-`      |
| uncheckedIcon  | 开关关闭时，按钮上显示的图标                   | ReactNode                       | `-`      |
| uncheckedText  | 开关关闭时的文案，small 尺寸不生效。           | ReactNode                       | `-`      |
| className      | 节点类名                                       | string \| string[]              | `-`      |
| style          | 节点样式                                       | CSSProperties                   | `-`      |
| onChange       | 点击开关的回调                                 | (value: boolean, event) => void | `-`      |
