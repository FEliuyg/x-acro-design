# 头像 Avatar

用作头像显示，可以为图片、图标或字符形式展示。

## 基础用法

头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

```tsx
import { Avatar, Space } from '@xiaoyaoliu/x-arco-design';
import { UserOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <Space size="large">
      <Avatar>A</Avatar>
      <Avatar style={{ backgroundColor: '#3370ff' }}>
        <UserOutlined />
      </Avatar>
      <Avatar style={{ backgroundColor: '#14a9f8' }}>Arco</Avatar>
      <Avatar style={{ backgroundColor: '#00d0b6' }}>Design</Avatar>
      <Avatar>
        <img
          alt="avatar"
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        />
      </Avatar>
    </Space>
  );
};

export default App;
```

## 大小和形状

通过设置 `size` 字段，可以调节头像的大小，默认大小为 `40px`。设置 `shape` 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。

```tsx
import { Avatar, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Avatar size={64}>Arco</Avatar>
        <Avatar size={40}>Arco</Avatar>
        <Avatar size={32}>Arco</Avatar>
        <Avatar size={24}>Arco</Avatar>
      </Space>
      <Space size="large">
        <Avatar size={64} shape="square">
          Arco
        </Avatar>
        <Avatar size={40} shape="square">
          Arco
        </Avatar>
        <Avatar size={32} shape="square">
          Arco
        </Avatar>
        <Avatar size={24} shape="square">
          Arco
        </Avatar>
      </Space>
    </Space>
  );
};

export default App;
```

## 头像组

使用 `Avatar.Group` 可以使用头像组功能，可通过 `size` 指定头像的大小。

```tsx
import { Avatar } from '@xiaoyaoliu/x-arco-design';
const AvatarGroup = Avatar.Group;

const App = () => {
  return (
    <div>
      <AvatarGroup size={32} style={{ margin: 10 }}>
        <Avatar style={{ backgroundColor: '#7BC616' }}>A</Avatar>
        <Avatar style={{ backgroundColor: '#14C9C9' }}>B</Avatar>
        <Avatar style={{ backgroundColor: '#168CFF' }}>C</Avatar>
        <Avatar style={{ backgroundColor: '#FF7D00' }}>Arco</Avatar>
        <Avatar style={{ backgroundColor: '#FFC72E' }}>Design</Avatar>
      </AvatarGroup>
      <br />
      <AvatarGroup size={24} style={{ margin: 10 }}>
        <Avatar style={{ backgroundColor: '#7BC616' }}>A</Avatar>
        <Avatar style={{ backgroundColor: '#14C9C9' }}>B</Avatar>
        <Avatar style={{ backgroundColor: '#168CFF' }}>C</Avatar>
        <Avatar style={{ backgroundColor: '#FF7D00' }}>Arco</Avatar>
        <Avatar style={{ backgroundColor: '#FFC72E' }}>Design</Avatar>
      </AvatarGroup>
    </div>
  );
};

export default App;
```

## 交互按钮

可以通过 `triggerIcon` `triggerType` 来定制交互按钮，类型有 `mask (遮罩)` 和 `button (按钮)` 两种，通过 `onClick` 参数来添加回调。

```tsx
import { Avatar, Message, Space } from '@xiaoyaoliu/x-arco-design';
import { UserOutlined, CameraOutlined, EditOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <Space size="large">
      <Avatar
        triggerIcon={<CameraOutlined />}
        triggerIconStyle={{
          color: '#3491FA',
        }}
        onClick={() => Message.info('Upload...')}
        autoFixFontSize={false}
        style={{
          backgroundColor: '#168CFF',
        }}
      >
        A
      </Avatar>
      <Avatar
        triggerIcon={<EditOutlined />}
        onClick={() => Message.info('Upload...')}
        style={{ backgroundColor: '#14C9C9' }}
      >
        <UserOutlined />
      </Avatar>
      <Avatar
        shape="square"
        triggerIcon={<EditOutlined />}
        onClick={() => Message.info('Upload...')}
        style={{ backgroundColor: '#FFC72E' }}
      >
        <UserOutlined />
      </Avatar>
      <Avatar triggerIcon={<CameraOutlined />} triggerType="mask">
        <img
          alt="avatar"
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        />
      </Avatar>
    </Space>
  );
};

export default App;
```

## 自动调整字体大小

如果头像是文字的话，会自动调节字体大小，来适应头像框。

```tsx
import React, { useState } from 'react';
import { Avatar, Button, Space } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [index, setIndex] = useState(0);
  const list = ['B', 'Arco', 'Design', 'Tom', 'AD'];
  return (
    <Space>
      <Avatar>{list[index]}</Avatar>
      <Button
        type="secondary"
        onClick={() => setIndex(index >= 4 ? 0 : index + 1)}
      >
        Change
      </Button>
    </Space>
  );
}

export default App;
```

## API

### Avatar

| 参数名           | 描述                                           | 类型                 | 默认值   |
| ---------------- | ---------------------------------------------- | -------------------- | -------- |
| autoFixFontSize  | 是否自动根据头像尺寸调整字体大小。             | boolean              | `true`   |
| size             | 头像的尺寸大小，单位是 `px`                    | number               | `-`      |
| shape            | 头像的形状，有圆形(circle)和正方形(square)两种 | 'circle' \| 'square' | `circle` |
| triggerType      | 可点击的头像交互类型。                         | 'mask' \| 'button'   | `button` |
| triggerIcon      | 可点击的头像交互图标。                         | ReactNode            | `-`      |
| className        | 节点类名                                       | string \| string[]   | `-`      |
| style            | 节点样式                                       | CSSProperties        | `-`      |
| triggerIconStyle | 交互图标的样式                                 | CSSProperties        | `-`      |
| onClick          | 点击回调                                       | (e) => void          | `-`      |

### Avatar.Group

| 参数名                 | 描述                                                           | 类型                            | 默认值   | 版本  |
| ---------------------- | -------------------------------------------------------------- | ------------------------------- | -------- | ----- |
| autoFixFontSize        | 是否自动根据头像尺寸调整字体大小，(优先级低于 Avatar 组件本身) | boolean                         | `true`   | -     |
| zIndexAscend           | 头像组内的头像 `z-index` 递增，默认是递减。                    | boolean                         | `-`      | 2.3.0 |
| maxCount               | 头像组最多显示的头像数量，多余头像将以 `+x` 的形式展示。       | number                          | `-`      | 2.4.0 |
| size                   | 头像的尺寸大小，单位是 `px`，(优先级低于 Avatar 组件本身)      | number                          | `-`      | -     |
| shape                  | 头像的形状，(优先级低于 Avatar 组件本身)                       | 'circle' \| 'square'            | `circle` | -     |
| className              | 节点类名                                                       | string \| string[]              | `-`      | -     |
| maxPopoverTriggerProps | 多余头像气泡的 `TriggerProps`。                                | [TriggerProps](trigger#trigger) | `-`      | 2.4.0 |
| maxStyle               | 多余头像样式。                                                 | CSSProperties                   | `-`      | 2.4.0 |
| style                  | 节点样式                                                       | CSSProperties                   | `-`      | -     |
