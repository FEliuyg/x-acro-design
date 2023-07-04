# 排版 Typography

用于展示标题、段落、文本内容。

## 组合使用

排版组件用于展示标题、段落、文本内容，这里展示了排版的组合使用。

```tsx
import { Typography } from '@xiaoyaoliu/x-arco-design';
const { Title, Paragraph, Text } = Typography;

const App = () => {
  return (
    <Typography style={{ marginTop: -40 }}>
      <Title>Design system</Title>
      <Paragraph>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design.
      </Paragraph>
      <Paragraph>
        In some cases, the direct construction of an object without an explicit
        prior plan (such as in craftwork, some engineering, coding, and graphic
        design) may also be considered
        <Text bold>to be a design activity.</Text>
      </Paragraph>
      <Title heading={2}>ArcoDesign</Title>
      <Paragraph>
        The ArcoDesign component library defines a set of default particle
        variables, and a custom theme is to <Text mark>customize</Text> and{' '}
        <Text underline>overwrite</Text> this variable list.
      </Paragraph>
      <Paragraph blockquote>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a{' '}
        <Text code>prototype</Text>, <Text code>product</Text> or
        <Text code>process</Text>. The verb to design expresses the process of developing
        a design.
      </Paragraph>
      <Paragraph mark underline delete>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process.
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Architectural blueprints
            <ul>
              <li>Architectural blueprints</li>
            </ul>
          </li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <ol>
          <li>Architectural blueprints</li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ol>
      </Paragraph>
    </Typography>
  );
};

export default App;
```

## 标题

展示不同级别的标题。

```tsx
import { Typography } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Typography>
      <Typography.Title>H1. The Pragmatic Romanticism</Typography.Title>
      <Typography.Title heading={2}>
        H2. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={3}>
        H3. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={4}>
        H4. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={5}>
        H5. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={6}>
        H6. The Pragmatic Romanticism
      </Typography.Title>
    </Typography>
  );
};

export default App;
```

## 文本

不同样式的文本以及超链接组件。

```tsx
import React from 'react';
import { Typography, Divider } from '@xiaoyaoliu/x-arco-design';

function Layout(props) {
  return React.Children.map(props.children, (child) => {
    return <div style={{ marginBottom: 10 }}>{child}</div>;
  });
}

const App = () => {
  return (
    <Layout>
      <Typography.Text>Arco Design</Typography.Text>
      <Typography.Text type="secondary">Secondary</Typography.Text>
      <Typography.Text type="primary">Primary</Typography.Text>
      <Typography.Text type="success">Success</Typography.Text>
      <Typography.Text type="warning">Warning</Typography.Text>
      <Typography.Text type="error">Error</Typography.Text>
      <Typography.Text bold>Bold</Typography.Text>
      <Typography.Text disabled>Disabled</Typography.Text>
      <Typography.Text mark>Mark</Typography.Text>
      <Typography.Text underline>Underline</Typography.Text>
      <Typography.Text delete>Line through</Typography.Text>
      <Typography.Text code>Code snippet</Typography.Text>
    </Layout>
  );
};

export default App;
```

## 段落

文本段落样式。

```tsx
import { Typography, Divider } from '@xiaoyaoliu/x-arco-design';
const { Title, Paragraph } = Typography;

const App = () => {
  return (
    <Typography>
      <Title heading={5}>Default</Title>
      <Paragraph>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. In some cases, the direct construction of an object without an
        explicit prior plan (such as in craftwork, some engineering, coding, and
        graphic design) may also be considered to be a design activity.
      </Paragraph>
      <Title heading={5}>Secondary</Title>
      <Paragraph type="secondary">
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. In some cases, the direct construction of an object without an
        explicit prior plan (such as in craftwork, some engineering, coding, and
        graphic design) may also be considered to be a design activity.
      </Paragraph>
      <Title heading={5}>Spacing default</Title>
      <Paragraph>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. In some cases, the direct construction of an object without an
        explicit prior plan (such as in craftwork, some engineering, coding, and
        graphic design) may also be considered to be a design activity.
      </Paragraph>
      <Title heading={5}>Spacing close</Title>
      <Paragraph type="secondary" spacing="close">
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design.
      </Paragraph>
    </Typography>
  );
};

export default App;
```

## 可交互

提供复制、编辑文本等功能。

```tsx
import { useState } from 'react';
import { Typography, Divider } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [str, setStr] = useState('Click the icon to edit this text.');
  return (
    <Typography>
      <Typography.Paragraph copyable>
        Click the icon to copy this text.
      </Typography.Paragraph>
      <Typography.Paragraph
        editable={{
          onChange: setStr,
        }}
      >
        {str}
      </Typography.Paragraph>
    </Typography>
  );
}

export default App;
```

## 省略

在空间不足时省略多行文本内容。

**注意**：父元素 `flex` 模式下， 省略的 `Typography` 的 `ellipsis` 场景会收到影响，可以添加 `width: 100%` 使 `Typography` 充满整个父元素。

`flex` mode, the omitted `Typography`'s `ellipsis` scene will be affected. You can add `width: 100%` to make the `Typography` fill the entire parent element.

```tsx
import { Typography } from '@xiaoyaoliu/x-arco-design';

const mockText =
  'A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. The verb to design expresses the process of developing a design. A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. The verb to design expresses the process of developing a design.';
const mockTitle =
  ' A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process.';

const App = () => {
  return (
    <div>
      <Typography.Title heading={4} ellipsis={{ wrapper: 'span' }}>
        {mockTitle}
      </Typography.Title>
      <Typography.Paragraph
        ellipsis={{
          rows: 2,
          showTooltip: true,
          expandable: true,
          wrapper: 'span',
        }}
      >
        {mockText}
      </Typography.Paragraph>
      <Typography.Paragraph
        ellipsis={{ suffix: '---width: 100%', wrapper: 'span' }}
      >
        {mockTitle}
      </Typography.Paragraph>
    </div>
  );
};

export default App;
```

## 省略受控

省略操作及相关配置受控案例

```tsx
import { useState } from 'react';
import {
  Typography,
  Button,
  Switch,
  Input,
  Form,
  Descriptions,
  Space,
} from '@xiaoyaoliu/x-arco-design';
const defaultText = `A design is a plan or specification for the construction of an object or system or for the
implementation of an activity or process. A design is a plan or specification for the
construction of an object or system or for the implementation of an activity or process. `;
const defaultConfig = {
  ellipsisStr: '...',
};

const App = () => {
  const [config, setConfig] = useState(defaultConfig);
  const [rows, setRows] = useState(1);
  const [text, setText] = useState(defaultText);
  const { ellipsis, ellipsisStr, expandable, suffix } = config;
  return (
    <div>
      <Space align="start" size={120}>
        <Form
          onValuesChange={(_, values) => setConfig(values)}
          style={{ width: '400px' }}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          size="small"
        >
          <Form.Item
            label="超出省略"
            field="ellipsis"
            triggerPropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="展开/折叠"
            field="expandable"
            triggerPropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="省略号"
            field="ellipsisStr"
            initialValue={defaultConfig.ellipsisStr}
          >
            <Input />
          </Form.Item>
          <Form.Item label="suffix" field="suffix">
            <Input />
          </Form.Item>
          <Form.Item label="省略展示">
            <Space size="middle">
              <Button onClick={() => setRows(Math.max(1, rows - 1))}>
                {' '}
                row-{' '}
              </Button>
              <Button onClick={() => setRows(rows + 1)}> row+ </Button>
            </Space>
          </Form.Item>
          <Form.Item label="文字操作">
            <Button onClick={() => setText(text + defaultText)} type="primary">
              addText
            </Button>
          </Form.Item>
        </Form>
        <Descriptions
          column={1}
          title="当前配置"
          data={[
            ...Object.entries(config).map(([label, value]) => ({
              label,
              value: String(value),
            })),
            {
              label: 'rows',
              value: rows,
            },
          ]}
          style={{ marginBottom: 20 }}
          labelStyle={{ paddingRight: 36 }}
        />
      </Space>

      <div>
        <Typography.Paragraph
          ellipsis={
            ellipsis
              ? {
                  rows: rows,
                  expandable,
                  suffix,
                  ellipsisStr,
                  wrapper: 'div',
                }
              : undefined
          }
        >
          {text}
        </Typography.Paragraph>
      </div>
    </div>
  );
};

export default App;
```

## API

### Typography

| 参数名    | 描述     | 类型               | 默认值 |
| --------- | -------- | ------------------ | ------ |
| className | 节点类名 | string \| string[] | `-`    |
| style     | 节点样式 | CSSProperties      | `-`    |

### Typography.Title

| 参数名    | 描述                                                                           | 类型                                                                                                                | 默认值 | 版本                             |
| --------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------- |
| bold      | 粗体                                                                           | boolean                                                                                                             | `-`    | -                                |
| code      | 代码块样式                                                                     | boolean                                                                                                             | `-`    | -                                |
| delete    | 删除线样式                                                                     | boolean                                                                                                             | `-`    | -                                |
| disabled  | 禁用状态                                                                       | boolean                                                                                                             | `-`    | -                                |
| underline | 下划线样式                                                                     | boolean                                                                                                             | `-`    | -                                |
| type      | 文本类型                                                                       | 'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning'                                                       | `-`    | -                                |
| className | 节点类名                                                                       | string \| string[]                                                                                                  | `-`    | -                                |
| ellipsis  | 自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig) | boolean \| [EllipsisConfig](typography#ellipsisconfig)                                                              | `-`    | -                                |
| heading   | 标题级别，相当于 `h1` `h2` `h3` `h4` `h5` `h6`                                 | 1 \| 2 \| 3 \| 4 \| 5 \| 6                                                                                          | `1`    | -                                |
| mark      | 标记样式                                                                       | boolean \| { color: string }                                                                                        | `-`    | -                                |
| style     | 节点样式                                                                       | CSSProperties                                                                                                       | `-`    | -                                |
| copyable  | 开启复制功能                                                                   | \| boolean\| {text?: string;onCopy?: (text: string, e) => void;icon?: ReactNode;tooltips?: [ReactNode, ReactNode];} | `-`    | `onCopy` params `e` in `2.31.0`  |
| editable  | 开启可编辑功能                                                                 | \| boolean\| {editing?: boolean;onStart?: (text, e) => void;onChange?: (text) => void;onEnd?: (text) => void;}      | `-`    | `onStart` params `e` in `2.31.0` |

### Typography.Paragraph

| 参数名     | 描述                                                                                                      | 类型                                                                                                                | 默认值    | 版本                             |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------- |
| blockquote | 长引用                                                                                                    | boolean                                                                                                             | `-`       | -                                |
| bold       | 粗体                                                                                                      | boolean                                                                                                             | `-`       | -                                |
| code       | 代码块样式                                                                                                | boolean                                                                                                             | `-`       | -                                |
| delete     | 删除线样式                                                                                                | boolean                                                                                                             | `-`       | -                                |
| disabled   | 禁用状态                                                                                                  | boolean                                                                                                             | `-`       | -                                |
| underline  | 下划线样式                                                                                                | boolean                                                                                                             | `-`       | -                                |
| spacing    | 段落的的行高，长文本(大于 5 行)的时候推荐使用默认行高，短文本(小于等于 3 行)推荐使用 `close` 紧密的行高。 | 'default' \| 'close'                                                                                                | `default` | -                                |
| type       | 文本类型                                                                                                  | 'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning'                                                       | `-`       | -                                |
| className  | 节点类名                                                                                                  | string \| string[]                                                                                                  | `-`       | -                                |
| ellipsis   | 自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig)                            | boolean \| [EllipsisConfig](typography#ellipsisconfig)                                                              | `-`       | -                                |
| mark       | 标记样式                                                                                                  | boolean \| { color: string }                                                                                        | `-`       | -                                |
| style      | 节点样式                                                                                                  | CSSProperties                                                                                                       | `-`       | -                                |
| copyable   | 开启复制功能                                                                                              | \| boolean\| {text?: string;onCopy?: (text: string, e) => void;icon?: ReactNode;tooltips?: [ReactNode, ReactNode];} | `-`       | `onCopy` params `e` in `2.31.0`  |
| editable   | 开启可编辑功能                                                                                            | \| boolean\| {editing?: boolean;onStart?: (text, e) => void;onChange?: (text) => void;onEnd?: (text) => void;}      | `-`       | `onStart` params `e` in `2.31.0` |

### Typography.Text

| 参数名    | 描述                                                                           | 类型                                                                                                                | 默认值 | 版本                             |
| --------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------- |
| bold      | 粗体                                                                           | boolean                                                                                                             | `-`    | -                                |
| code      | 代码块样式                                                                     | boolean                                                                                                             | `-`    | -                                |
| delete    | 删除线样式                                                                     | boolean                                                                                                             | `-`    | -                                |
| disabled  | 禁用状态                                                                       | boolean                                                                                                             | `-`    | -                                |
| underline | 下划线样式                                                                     | boolean                                                                                                             | `-`    | -                                |
| type      | 文本类型                                                                       | 'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning'                                                       | `-`    | -                                |
| className | 节点类名                                                                       | string \| string[]                                                                                                  | `-`    | -                                |
| ellipsis  | 自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig) | boolean \| [EllipsisConfig](typography#ellipsisconfig)                                                              | `-`    | -                                |
| mark      | 标记样式                                                                       | boolean \| { color: string }                                                                                        | `-`    | -                                |
| style     | 节点样式                                                                       | CSSProperties                                                                                                       | `-`    | -                                |
| copyable  | 开启复制功能                                                                   | \| boolean\| {text?: string;onCopy?: (text: string, e) => void;icon?: ReactNode;tooltips?: [ReactNode, ReactNode];} | `-`    | `onCopy` params `e` in `2.31.0`  |
| editable  | 开启可编辑功能                                                                 | \| boolean\| {editing?: boolean;onStart?: (text, e) => void;onChange?: (text) => void;onEnd?: (text) => void;}      | `-`    | `onStart` params `e` in `2.31.0` |

### EllipsisConfig

| 参数名          | 描述                                                             | 类型                                                                            | 默认值 | 版本                                                |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------ | --------------------------------------------------- |
| cssEllipsis     | 自动溢出省略（只支持字符串），在大量使用情况下建议开启提高性能。 | boolean                                                                         | `-`    | `2.36.0` 将默认值改为 `false` 并支持多行 CSS 省略。 |
| defaultExpanded | 默认展开                                                         | boolean                                                                         | `-`    | `2.33.0`                                            |
| expandable      | 显示展开/折叠按钮                                                | boolean                                                                         | `-`    | -                                                   |
| expanded        | 是否展开                                                         | boolean                                                                         | `-`    | `2.33.0`                                            |
| rows            | 显示省略的行数                                                   | number                                                                          | `1`    | -                                                   |
| ellipsisStr     | 省略号                                                           | string                                                                          | `...`  | -                                                   |
| suffix          | 后缀                                                             | string                                                                          | `-`    | -                                                   |
| showTooltip     | 配置省略时的弹出框                                               | boolean \| { type?: 'tooltip' \| 'popover'; props?: Record&lt;string, any&gt; } | `-`    | -                                                   |
| expandNodes     | 配置 折叠 / 展开 的元素                                          | ReactNode[]                                                                     | `-`    | -                                                   |
| onEllipsis      | 在省略发生改变的时候触发，通常是窗口 resize 情况会触发。         | (isEllipsis: boolean) => void                                                   | `-`    | -                                                   |
| onExpand        | 在折叠/展开状态发生改变的时候触发，通常是点击折叠/展开按钮触发。 | (isExpand: boolean, e) => void                                                  | `-`    | e in `2.27.0`                                       |

## 关于超出省略

超出省略目前通过两种方式实现分别是 **js 二分法计算截断值** 和 **CSS 超出省略** 两种优缺点如下：

| 指标 | js 二分法                   | CSS 省略          |
| ---- | --------------------------- | ----------------- |
| 性能 | 差(二分法多次操作 dom 计算) | 好                |
| 功能 | 好                          | 差（只支持字符串) |

- 默认使用 **js 二分法** 不断进行截断计算从而得到省略临界值，同时 `resize` 时还会多次触发重新计算。所以在大量使用对性能影响较大，但此方法不会在排版组件下插入额外样式 dom。

- 开启 `ellipsis.cssEllipsis` 将通过 **CSS 样式** 进行省略展示，对于大量使用场景下会有显著性能提高。但因为需要添加 `text-overflow` 样式，`.arco-typography` 节点下将会新增两个 `<span/>` dom.

**注意 `2.36.0` 版本对超出省略进行重构优化，造成 Breaking Change 主要如下：**

- 开启 `ellipsis.cssEllipsis` 时，为了添加 `text-overflow` 在排版组件下插入了额外样式 dom，造成 dom 结构变化。
- `ellipsis.cssEllipsis` 支持多行省略场景，并且默认值由 `true` 变为 `false` （规避升级后 dom 结构变化）。
