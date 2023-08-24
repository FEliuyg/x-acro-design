# 分割线 Divider

划分内容区域，对模块做分隔。

## 基本用法

对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。

```tsx
import { Divider, Typography } from '@xiaoyaoliu/x-arco-design';
import {
  FileImageOutlined,
  UserOutlined,
  PenOutlined,
} from '@easyv/react-icons';
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
            <FileImageOutlined />
          </span>
          <div className="content">
            <Title heading={6}>Image</Title>May 4, 2010
          </div>
        </div>
        <Divider className="half-divider" />
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <UserOutlined />
          </span>
          <div className="content">
            <Title heading={6}>Avatar</Title>May 4, 2010
          </div>
        </div>
        <Divider className="half-divider" />
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <PenOutlined />
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

## 带有文字的分割线

通过 `orientation` 指定分割线文字的位置。

```tsx
import { Divider, Typography } from '@xiaoyaoliu/x-arco-design';
const { Paragraph } = Typography;
const orientations: ('left' | 'center' | 'right')[] = [
  'left',
  'center',
  'right',
];

const App = () => {
  return (
    <div className="divider-demo">
      <Paragraph>
        A design is a plan or specification for the construction of an object.
      </Paragraph>
      <Divider plain orientation={orientations[0]}>
        Text
      </Divider>
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

## 竖直分割线

指定 `type` 为 `vertical` 即可使用竖直分割线。竖直分割线不能带文字。

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

## API

### Divider

| 参数名      | 描述                                                              | 类型                          | 默认值       |
| ----------- | ----------------------------------------------------------------- | ----------------------------- | ------------ |
| children    | 嵌套的标题                                                        | ReactNode                     | -            |
| orientation | 分割线文字的位置                                                  | 'left' \| 'right' \| 'center' | `center`     |
| type        | 分割线的类型，是水平还是竖直，分别对应 `horizontal` 和 `vertical` | 'horizontal' \| 'vertical'    | `horizontal` |
| className   | 节点类名                                                          | string \| string[]            | `-`          |
| style       | 节点样式                                                          | CSSProperties                 | `-`          |
| plain       | 文字是否显示为普通正文样式                                        | boolean                       | false        |
