# 分割线 Divider

划分内容区域，对模块做分隔。

## 基本用法

对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。

```tsx
import { Divider, Typography } from '@xiaoyaoliu/x-arco-design';
import { IconFileImage, IconUser, IconPen } from '@arco-design/web-react/icon';
const { Paragraph, Title } = Typography;

const App = () => {
  return (
    <>
      <div className="divider-demo">
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider
          style={{
            borderBottomStyle: 'dashed',
          }}
        />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: 'dotted',
          }}
        />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
      </div>
      <div className="divider-demo" style={{ marginTop: 48 }}>
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <IconFileImage />
          </span>
          <div className="content">
            <Title heading={6}>Image</Title>May 4, 2010
          </div>
        </div>
        <Divider className="half-divider" />
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <IconUser />
          </span>
          <div className="content">
            <Title heading={6}>Avatar</Title>May 4, 2010
          </div>
        </div>
        <Divider className="half-divider" />
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <IconPen />
          </span>
          <div className="content">
            <Title heading={6}>Icon</Title>May 4, 2010
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
```

```css
.divider-demo {
  box-sizing: border-box;
  width: 560px;
  padding: 24px;
  border: 30px solid rgb(var(--gray-2));
}

.divider-demo-flex-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider-demo .avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border-radius: 50%;
  font-size: 16px;
  background-color: var(--color-fill-3);
  color: var(--color-text-2);
}

.divider-demo .content {
  flex: 1;
  font-size: 12px;
  line-height: 20px;
  color: var(--color-text-2);
}

.divider-demo .title {
  margin-bottom: 2px;
  font-size: 16px;
  line-height: 24px;
  color: #1d2129;
}

.divider-demo .half-divider {
  left: 55px;
  min-width: auto;
  width: calc(100% - 55px);
  margin: 16px 0;
}
```

## 带有文字的分割线

通过 `orientation` 指定分割线文字的位置。

`orientation`.

```tsx
import { Divider, Typography } from '@xiaoyaoliu/x-arco-design';
const { Paragraph } = Typography;
const orientations = ['left', 'center', 'right'];

const App = () => {
  return (
    <div className="divider-demo">
      <Paragraph>
        A design is a plan or specification for the construction of an object.
      </Paragraph>
      <Divider orientation={orientations[0]}>Text</Divider>
      <Paragraph>
        A design is a plan or specification for the construction of an object.
      </Paragraph>
      <Divider orientation={orientations[1]}>Text</Divider>
      <Paragraph>
        A design is a plan or specification for the construction of an object.
      </Paragraph>
      <Divider orientation={orientations[2]}>Text</Divider>
    </div>
  );
};

export default App;
```

```css:silent
.divider-demo {
  box-sizing: border-box;
  width: 560px;
  padding: 24px;
  border: 30px solid rgb(var(--gray-2));
}
```

## 竖直分割线

指定 `type` 为 `vertical` 即可使用竖直分割线。竖直分割线不能带文字。

`type` as `vertical` to make it vertical. Vertical dividers can't contain texts.

```tsx
import { Divider, Typography } from '@xiaoyaoliu/x-arco-design';
const { Text } = Typography;

const App = () => {
  return (
    <div className="divider-demo">
      <Text>Item 1</Text>
      <Divider type="vertical" />
      <Text>Item 2</Text>
      <Divider type="vertical" />
      <Text>Item 3</Text>
    </div>
  );
};

export default App;
```

```css:silent
.divider-demo {
  box-sizing: border-box;
  width: 560px;
  padding: 24px;
  border: 30px solid rgb(var(--gray-2));
}
```

## API

### Divider

| 参数名      | 描述                                                              | 类型                          | 默认值       |
| ----------- | ----------------------------------------------------------------- | ----------------------------- | ------------ |
| orientation | 分割线文字的位置                                                  | 'left' \| 'right' \| 'center' | `center`     |
| type        | 分割线的类型，是水平还是竖直，分别对应 `horizontal` 和 `vertical` | 'horizontal' \| 'vertical'    | `horizontal` |
| className   | 节点类名                                                          | string \| string[]            | `-`          |
| style       | 节点样式                                                          | CSSProperties                 | `-`          |
