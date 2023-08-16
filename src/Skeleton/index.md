# 骨架屏 Skeleton

将加载中的数据用灰色占位。

## 基础用法

骨架屏的基本使用

```tsx
import { Skeleton } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Skeleton></Skeleton>;
};

export default App;
```

## 文本行数和宽度

设置文本行数及文本宽度。

```tsx
import { Skeleton } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Skeleton
      text={{
        rows: 3,
        width: ['100%', 600, 400],
      }}
      image
    ></Skeleton>
  );
};

export default App;
```

## 动画

骨架屏显示动画效果。

```tsx
import React from 'react';
import {
  Skeleton,
  Switch,
  Avatar,
  Typography,
} from '@xiaoyaoliu/x-arco-design';

function App() {
  const [loading, setLoading] = React.useState(true);

  const onChange = () => {
    setLoading((prev) => !prev);
  };

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Typography.Text style={{ margin: '0 8px' }}>Animation</Typography.Text>
        <Switch
          style={{ verticalAlign: 'middle' }}
          size="small"
          onChange={onChange}
          checked={loading}
        />
      </div>
      <Skeleton
        loading={loading}
        text={{ width: '90%' }}
        image={{ shape: 'circle' }}
        animation
      >
        <div style={{ display: 'flex' }}>
          <Avatar size={50} style={{ margin: '0 20px' }}>
            Arco
          </Avatar>
          <Typography>
            <Typography.Paragraph style={{ margin: 0 }}>
              This is content, this is content, this is content
            </Typography.Paragraph>
            <Typography.Paragraph style={{ margin: 0 }}>
              This is content, this is content
            </Typography.Paragraph>
            <Typography.Paragraph style={{ margin: 0 }}>
              This is content, this is content
            </Typography.Paragraph>
          </Typography>
        </div>
      </Skeleton>
    </div>
  );
}

export default App;
```

## API

### Skeleton

| 参数名    | 描述                                     | 类型                                                 | 默认值 |
| --------- | ---------------------------------------- | ---------------------------------------------------- | ------ |
| animation | 是否显示动画效果                         | boolean                                              | `-`    |
| loading   | 是否显示子组件。为 `true` 时候显示占位符 | boolean                                              | `true` |
| className | 节点类名                                 | string \| string[]                                   | `-`    |
| image     | 是否显示图片占位                         | [SkeletonImageProps](#skeletonimageprops) \| boolean | `-`    |
| style     | 节点样式                                 | CSSProperties                                        | `-`    |
| text      | 是否显示文本占位                         | [SkeletonTextProps](#skeletontextprops) \| boolean   | `true` |

### SkeletonImageProps

```js
export interface SkeletonImageProps {
  style?: CSSProperties;
  className?: string;
  /** 图片形状 */
  shape?: 'circle' | 'square';
  /** 图片尺寸 */
  size?: 'small' | 'default' | 'large';
  /** 图片位置 */
  position?: 'left' | 'right';
  prefixCls?: string;
}
```

### SkeletonTextProps

```js
export interface SkeletonTextProps {
  style?: CSSProperties;
  className?: string;
  /** 文本行数 */
  rows?: number;
  /** 文本行宽度 */
  width?: number | string | (string | number)[];
  prefixCls?: string;
}
```
