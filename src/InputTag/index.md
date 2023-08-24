# InputTag

标签输入。

## 基本用法

基本用法

```tsx
import { InputTag, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Space style={{ marginBottom: 20 }}>
        <InputTag
          allowClear
          placeholder="Input and press Enter"
          style={{ width: 350 }}
        />
        <InputTag
          allowClear
          placeholder="Disabled"
          disabled
          style={{ width: 350 }}
        />
      </Space>
      <Space style={{ marginBottom: 20 }}>
        <InputTag
          allowClear
          placeholder="Readonly"
          readOnly
          style={{ width: 350 }}
        />
        <InputTag
          allowClear
          placeholder="Error"
          status="error"
          style={{ width: 350 }}
        />
      </Space>
      <InputTag
        allowClear
        placeholder="Warning"
        status="warning"
        style={{ width: 350 }}
      />
    </div>
  );
};

export default App;
```

## 前缀

前缀 / 前置标签 / 后置标签

```tsx
import { InputTag, Grid } from '@xiaoyaoliu/x-arco-design';
import { UserOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <div>
      <Grid cols={2} colGap={12} rowGap={12} style={{ maxWidth: 600 }}>
        <Grid.GridItem>
          <InputTag prefix="¥" allowClear />
        </Grid.GridItem>
        <Grid.GridItem>
          <InputTag addBefore={<UserOutlined />} allowClear />
        </Grid.GridItem>

        <Grid.GridItem>
          <InputTag prefix="¥" addBefore={<UserOutlined />} allowClear />
        </Grid.GridItem>

        <Grid.GridItem>
          <InputTag addBefore={'www.'} addAfter={'.com'} allowClear />
        </Grid.GridItem>
      </Grid>
    </div>
  );
};

export default App;
```

## 不同尺寸

通过设置 `size` 来指定大小。

`size` to specify the size of InputTag

```tsx
import { InputTag, Radio } from '@xiaoyaoliu/x-arco-design';
import { useState } from 'react';
const RadioGroup = Radio.Group;

function App() {
  const [size, setSize] = useState<'mini' | 'default' | 'small' | 'large'>(
    'default',
  );
  return (
    <div>
      <RadioGroup
        style={{ marginBottom: 20, borderRadius: 4 }}
        type="button"
        name="size"
        value={size}
        onChange={(value) => setSize(value)}
      >
        <Radio value="mini">mini</Radio>
        <Radio value="small">small</Radio>
        <Radio value="default">default</Radio>
        <Radio value="large">large</Radio>
      </RadioGroup>
      <br />
      <InputTag
        allowClear
        size={size}
        defaultValue={['Beijing', 'Shanghai']}
        placeholder="Please input"
        style={{ maxWidth: 350, marginRight: 20 }}
      />
    </div>
  );
}

export default App;
```

## 获取选项的文本

可以通过设置 `labelInValue=true` 获取选项的 label 值

```tsx
import { InputTag } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <InputTag
      allowClear
      labelInValue
      defaultValue={[
        {
          label: 'a',
          value: '1',
        },
      ]}
      placeholder="Please input"
      style={{ maxWidth: 350 }}
      onChange={(v) => {
        console.log(v);
      }}
    />
  );
};

export default App;
```

## 校验与格式化输入

通过 `validate` 校验输入。此外，可以返回**非布尔类型**来将用户输入的字符串为特定的 `value` 格式。

```tsx
import { InputTag, Message, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space>
      <InputTag
        allowClear
        style={{ width: 350 }}
        placeholder="Please input"
        validate={(v) => {
          if (!v || v.length < 3) {
            Message.error('长度必须大于3');
            return false;
          }

          return true;
        }}
      />
      <InputTag
        allowClear
        style={{ width: 350 }}
        placeholder="Format user input"
        validate={(v) => {
          return { word: v };
        }}
        onChange={(value) => {
          Message.info(`Paramster of onChange: ${JSON.stringify(value)}`);
        }}
      />
    </Space>
  );
};

export default App;
```

## 失焦时保存

设置 `saveOnBlur` 在失焦时自动将正在输入的文本保存为标签。

```tsx
import { InputTag } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <InputTag
      saveOnBlur
      placeholder="Input and blur directly"
      style={{ maxWidth: 350 }}
    />
  );
};

export default App;
```

## 自定义标签节点

指定 `renderTag` 来自定义标签节点。

```tsx
import { InputTag, Tag } from '@xiaoyaoliu/x-arco-design';
const options = ['arcoblue', 'orange', 'lime'];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  return (
    <Tag
      color={options.indexOf(value) > -1 ? value : 'gray'}
      closable={closable}
      onClose={onClose}
      style={{ margin: '2px 6px 2px 0' }}
    >
      {label}
    </Tag>
  );
}

const App = () => {
  return (
    <InputTag
      allowClear
      placeholder="Please input"
      defaultValue={options}
      renderTag={tagRender}
      style={{ maxWidth: 350 }}
    />
  );
};

export default App;
```

## 拖拽排序

指定 `dragToSort` 属性以允许对已输入的值进行拖拽排序。

```tsx
import { InputTag } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <InputTag
      style={{ maxWidth: 350 }}
      allowClear
      dragToSort
      defaultValue={['a', 'b', 'c', 'd']}
    />
  );
};

export default App;
```

## 自动分词

设置 `tokenSeparators` 可以使用自动分词功能。尝试复制下方文本到输入框里。

```tsx
import { InputTag, Typography } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Typography.Paragraph copyable>
        Beijing,Shenzhen|Nanjing/Xi'an
      </Typography.Paragraph>
      <InputTag
        allowClear
        tokenSeparators={[',', '|', '/']}
        placeholder="Paste text here"
        style={{ width: 350 }}
      />
    </div>
  );
};

export default App;
```

## API

### InputTag

| 参数名          | 描述                                                                                       | 类型                                                                                                                                                        | 默认值                                                                              | 版本                                     |
| --------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------- |
| allowClear      | 是否允许清除                                                                               | boolean                                                                                                                                                     | `-`                                                                                 | -                                        |
| animation       | 是否为内部标签变化添加动画。                                                               | boolean                                                                                                                                                     | `true`                                                                              | 2.15.0                                   |
| autoFocus       | 自动聚焦                                                                                   | boolean                                                                                                                                                     | `-`                                                                                 | -                                        |
| disabled        | 是否禁用                                                                                   | boolean                                                                                                                                                     | `-`                                                                                 | -                                        |
| dragToSort      | 是否可以通过拖拽为 Tag 排序                                                                | boolean                                                                                                                                                     | `-`                                                                                 | 2.27.0                                   |
| error           | 是否是错误状态.(废弃，下个大版本移除，使用 status='error' 替代)                            | boolean                                                                                                                                                     | `-`                                                                                 | -                                        |
| labelInValue    | 设置传入和回调出的值均为 `{ label: '', value: ''}` 格式。                                  | boolean                                                                                                                                                     | `-`                                                                                 | -                                        |
| readOnly        | 是否只读                                                                                   | boolean                                                                                                                                                     | `-`                                                                                 | -                                        |
| saveOnBlur      | 是否在失焦时自动存储正在输入的文本                                                         | boolean                                                                                                                                                     | `-`                                                                                 | 2.25.0                                   |
| inputValue      | 控件的输入框内的值                                                                         | string                                                                                                                                                      | `-`                                                                                 | -                                        |
| placeholder     | 预设文案                                                                                   | string                                                                                                                                                      | `-`                                                                                 | -                                        |
| size            | 不同尺寸                                                                                   | 'mini' \| 'small' \| 'default' \| 'large'                                                                                                                   | `-`                                                                                 | -                                        |
| status          | 状态                                                                                       | 'error' \| 'warning'                                                                                                                                        | `-`                                                                                 | 2.45.0                                   |
| addAfter        | 输入框后添加元素                                                                           | ReactNode                                                                                                                                                   | `-`                                                                                 | 2.47.0                                   |
| addBefore       | 输入框前添加元素                                                                           | ReactNode                                                                                                                                                   | `-`                                                                                 | 2.47.0                                   |
| prefix          | 添加前缀文字或者图标                                                                       | ReactNode                                                                                                                                                   | `-`                                                                                 | 2.47.0                                   |
| suffix          | 后缀                                                                                       | ReactNode                                                                                                                                                   | `-`                                                                                 | -                                        |
| className       | 节点类名                                                                                   | string \| string[]                                                                                                                                          | `-`                                                                                 | -                                        |
| defaultValue    | 默认值                                                                                     | T[]                                                                                                                                                         | `-`                                                                                 | -                                        |
| icon            | 自定义图标                                                                                 | { removeIcon?: ReactNode; clearIcon?: ReactNode }                                                                                                           | `-`                                                                                 | -                                        |
| style           | 节点样式                                                                                   | CSSProperties                                                                                                                                               | `-`                                                                                 | -                                        |
| tokenSeparators | 触发自动分词的分隔符                                                                       | string[]                                                                                                                                                    | `-`                                                                                 | 2.44.0                                   |
| validate        | 校验函数，默认在 按下 enter 时候触发。                                                     | (inputValue: string, values: T[]) =&gt; boolean \| Promise&lt;boolean&gt; \| T \| Promise&lt;T&gt;                                                          | `(inputValue, values) => inputValue && values.every((item) => item !== inputValue)` | return type T and `Promise<T>` in 2.37.0 |
| value           | 控件值                                                                                     | T[]                                                                                                                                                         | `-`                                                                                 | -                                        |
| onBlur          | 失去焦点时候触发                                                                           | (e) => void                                                                                                                                                 | `-`                                                                                 | -                                        |
| onChange        | 控件值改变时触发                                                                           | (value: T[], reason: [ValueChangeReason](#valuechangereason)) => void                                                                                       | `-`                                                                                 | `reason` in 2.27.0                       |
| onClear         | 点击清除按钮的回调                                                                         | () => void                                                                                                                                                  | `-`                                                                                 | 2.20.0                                   |
| onClick         | 单击组件的回调。                                                                           | (e) => void                                                                                                                                                 | `-`                                                                                 | -                                        |
| onFocus         | 聚焦时触发                                                                                 | (e) => void                                                                                                                                                 | `-`                                                                                 | -                                        |
| onInputChange   | 输入框文本改变的回调。                                                                     | (inputValue: string, event?) => void                                                                                                                        | `-`                                                                                 | -                                        |
| onKeyDown       | 键盘事件回调                                                                               | (e) => void                                                                                                                                                 | `-`                                                                                 | -                                        |
| onPaste         | 输入框文本粘贴的回调。                                                                     | (e) => void                                                                                                                                                 | `-`                                                                                 | -                                        |
| onPressEnter    | 按 enter 键触发                                                                            | (e) => void                                                                                                                                                 | `-`                                                                                 | -                                        |
| onRemove        | 移除某一个标签时改变时触发                                                                 | (value: T, index: number, event) => void                                                                                                                    | `-`                                                                                 | -                                        |
| renderTag       | 自定义标签渲染，`props` 为当前标签属性，`index` 为当前标签的顺序，`values` 为所有标签的值. | (props: {value: any;label: ReactNode;closable: boolean;onClose: (event) => void;},index: number,values: [ObjectValueType](#objectvaluetype)[]) => ReactNode | `-`                                                                                 | index、values added in 2.15.0            |

### ObjectValueType

```js
export type ObjectValueType = {
  value?: any,
  label?: ReactNode,
  closable?: boolean,
};
```

### ValueChangeReason

```js
export type ValueChangeReason = 'add' | 'remove' | 'clear' | 'sort';
```
