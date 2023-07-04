# 空状态 Empty

指当前场景没有对应的数据内容，呈现出的一种状态。

## 基本用法

`Empty` 空状态组件的基础用法。

`Empty` component.

```tsx
import { Empty } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Empty />;
};

export default App;
```

## 自定义图标和文案

可以通过 `icon` 参数传入自定义图标，`description` 修改显示文案。

`icon` parameter, and `description` to modify the description.

```tsx
import { Empty } from '@xiaoyaoliu/x-arco-design';
import { IconExclamation } from '@arco-design/web-react/icon';

const App = () => {
  return (
    <Empty
      icon={
        <div
          style={{
            background: '#f2994b',
            display: 'inline-flex',
            borderRadius: '50%',
            width: 50,
            height: 50,
            fontSize: 30,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}
        >
          <IconExclamation />
        </div>
      }
      description="No data, please reload!"
    />
  );
};

export default App;
```

## 自定义图片

可以通过 `imgSrc` 参数传入图片 Url。

`imgSrc` parameter.

```tsx
import { Empty, Button } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Empty
      imgSrc="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a0082b7754fbdb2d98a5c18d0b0edd25.png~tplv-uwbnlip3yd-webp.webp"
      description={<Button type="primary">Refresh</Button>}
    />
  );
};

export default App;
```

## API

### Empty

| 参数名      | 描述             | 类型               | 默认值 |
| ----------- | ---------------- | ------------------ | ------ |
| imgSrc      | 将图标替换为图片 | string             | `-`    |
| description | 显示文案         | ReactNode          | `-`    |
| icon        | 自定义显示图案   | ReactNode          | `-`    |
| className   | 节点类名         | string \| string[] | `-`    |
| style       | 节点样式         | CSSProperties      | `-`    |
