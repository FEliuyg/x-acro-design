# 数字输入框 InputNumber

仅允许输入数字格式的输入框。

## 基础用法

通过鼠标或者键盘输入范围内的标准数值。

```tsx
import { InputNumber } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <InputNumber
        placeholder="Please enter"
        min={0}
        max={15}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        disabled
        defaultValue={500}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
};

export default App;
```

## 按钮模式

指定 `mode` 为 `button` 来使用带按钮的数字输入框。

`mode` as `button` to use a numeric input box with buttons.

```tsx
import { InputNumber } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <InputNumber
        mode="button"
        defaultValue={500}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        mode="button"
        disabled
        defaultValue={500}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
};

export default App;
```

## 四种尺寸

设置 `size` 可以使用四种尺寸（`mini`, `small`, `default`, `large`）的数字输入框。高度分别对应`24px`、`28px`、`32px`、`36px`。

`size` can use four sizes (`mini`, `small`, `default`, `large`) number input box. The corresponding heights are `24px`, `28px`, `32px`, and `36px` respectively.

```tsx
import { useState } from 'react';
import { InputNumber, Radio } from '@xiaoyaoliu/x-arco-design';
const RadioGroup = Radio.Group;

function App() {
  const [size, setSize] = useState('default');
  return (
    <div>
      <RadioGroup
        type="button"
        name="size"
        value={size}
        onChange={(value) => setSize(value)}
        style={{ marginBottom: 20, borderRadius: 4 }}
      >
        <Radio value="mini">mini</Radio>
        <Radio value="small">small</Radio>
        <Radio value="default">default</Radio>
        <Radio value="large">large</Radio>
      </RadioGroup>
      <div>
        <InputNumber
          defaultValue={2}
          max={20}
          size={size}
          style={{ width: 160, margin: '10px 24px 10px 0' }}
        />
        <InputNumber
          mode="button"
          defaultValue={2}
          max={20}
          size={size}
          style={{ width: 160, margin: '10px 24px 10px 0' }}
        />
      </div>
    </div>
  );
}

export default App;
```

## 精度和步长

通过 `precision` 来设置数字精度。当 `precision` 小于 `step` 的小数位时，精度取 `step` 的小数个数。

`precision` to set the number precision. When `precision` is less than the decimal place of `step`, the precision is taken as the number of decimal places of `step`.

```tsx
import { InputNumber } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <InputNumber
        min={0}
        max={40}
        defaultValue={3.5}
        step={0.1}
        precision={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        min={0}
        max={40}
        defaultValue={1.11}
        step={0.01}
        precision={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
};

export default App;
```

## 格式化展示值

通过 `formatter`、 `parser` 配合使用可以定义输入框展示值。

通过 `formatter` 中的 `userTyping` 参数，判断是否正在输入，可以延迟显示 `formatter` 后的值

`formatter` and `parser` together.

Use the `userTyping` parameter in the `formatter` to determine whether the input is in progress. You can delay the display of the value after the `formatter`

```tsx
import { useState } from 'react';
import { InputNumber } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [value, setValue] = useState(12000);
  const [delayValue, setDelayValue] = useState(12000);
  return (
    <div>
      <InputNumber
        style={{ width: 160, margin: '10px 24px 10px 0' }}
        min={0}
        max={1000000000}
        step={1000}
        value={value}
        onChange={setValue}
        prefix="¥"
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => value.replace(/,/g, '')}
      />
      <InputNumber
        style={{ width: 160, margin: '10px 24px 10px 0' }}
        min={0}
        max={1000000000}
        step={1000}
        value={delayValue}
        onChange={setDelayValue}
        prefix="¥"
        formatter={(value, { userTyping, input }) =>
          userTyping ? input : `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        parser={(value) => value.replace(/,/g, '')}
      />
    </div>
  );
}

export default App;
```

## 前缀及后缀

可以添加前缀和后缀。

```tsx
import { InputNumber } from '@xiaoyaoliu/x-arco-design';

function App() {
  return (
    <div>
      <InputNumber
        min={0}
        defaultValue={50}
        suffix="%"
        step={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        min={0}
        defaultValue={500}
        prefix="¥"
        step={100}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        mode="button"
        min={0}
        defaultValue={500}
        prefix="¥"
        step={100}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
}

export default App;
```

## 高精度

通过 `stringMode` 开启严格模式以支持更高精度，`onChange` 此时将会返回字符串。

`stringMode` to support higher precision, `onChange` will return a string at this time.

```tsx
import { useState } from 'react';
import { InputNumber } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  const [value, setValue] = useState(1e20);
  return (
    <InputNumber
      style={{ width: 480 }}
      strictMode
      mode="button"
      value={value}
      step={1e-20}
      onChange={(value) => {
        console.log('InputNumber value is ', value);
        setValue(value);
      }}
    />
  );
};

export default App;
```

## API

### InputNumber

| 参数名       | 描述                                                          | 类型                                                                              | 默认值                                       | 版本                     |
| ------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------ |
| disabled     | 是否禁用                                                      | boolean                                                                           | `-`                                          | -                        |
| error        | 错误状态                                                      | boolean                                                                           | `-`                                          | -                        |
| hideControl  | 隐藏右侧按钮                                                  | boolean                                                                           | `-`                                          | -                        |
| readOnly     | 是否只读                                                      | boolean                                                                           | `-`                                          | 2.17.0                   |
| strictMode   | 严格模式下，`onChange` 回调将返回字符串类型                   | boolean                                                                           | `-`                                          | 2.42.0                   |
| max          | 最大值                                                        | number                                                                            | `Infinity`                                   | -                        |
| min          | 最小值                                                        | number                                                                            | `-Infinity`                                  | -                        |
| precision    | 数字精度。设置精度小于`step`的小数位时，取`step`的小数个数。  | number                                                                            | `-`                                          | -                        |
| step         | 数字变化步长                                                  | number                                                                            | `1`                                          | -                        |
| placeholder  | 默认显示文案                                                  | string                                                                            | `-`                                          | -                        |
| mode         | `embed` - 按钮内嵌模式，`button` - 左右按钮模式               | 'embed' \| 'button'                                                               | `embed`                                      | -                        |
| size         | 不同尺寸的数字输入框。分别对应 `24px`, `28px`, `32px`, `36px` | 'mini' \| 'small' \| 'default' \| 'large'                                         | `-`                                          | -                        |
| prefix       | 显示前缀                                                      | ReactNode                                                                         | `-`                                          | -                        |
| suffix       | 显示后缀                                                      | ReactNode                                                                         | `-`                                          | -                        |
| className    | 节点类名                                                      | string \| string[]                                                                | `-`                                          | -                        |
| defaultValue | 初始值                                                        | number \| string                                                                  | `-`                                          | -                        |
| icons        | 配置图标                                                      | {up?: ReactNode;down?: ReactNode;plus?: ReactNode;minus?: ReactNode;}             | `-`                                          | -                        |
| style        | 节点样式                                                      | CSSProperties                                                                     | `-`                                          | -                        |
| value        | 当前值                                                        | undefined \| number \| string                                                     | `-`                                          | -                        |
| formatter    | 定义输入框展示值                                              | (value: number \| string, info: { userTyping: boolean; input: string }) => string | `-`                                          | Param `info` in `2.41.0` |
| onBlur       | 输入框失去聚焦事件的回调                                      | (e) => void                                                                       | `-`                                          | -                        |
| onChange     | 变化回调                                                      | (value: number) => void                                                           | `-`                                          | -                        |
| onFocus      | 输入框聚焦事件的回调                                          | (e) => void                                                                       | `-`                                          | -                        |
| onKeyDown    | 键盘事件回调                                                  | (e: Event) => void                                                                | `-`                                          | -                        |
| parser       | 从 formatter 转换为数字，和 formatter 搭配使用。              | (value: string) => number \| string                                               | `(input) => input.replace(/[^\w\.-]+/g, '')` | -                        |

## 方法/Methods

| 名称    |   描述   |
| ------- | :------: |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
