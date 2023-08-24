# 自动补全 AutoComplete

输入框或自定义输入控件的自动补全功能。

## 基础用法

根据当前输入展示输入建议（下拉选择）。

```tsx
import { useState } from 'react';
import { AutoComplete } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [data, setData] = useState<string[]>([]);

  const handleSearch = (inputValue) => {
    setData(
      inputValue
        ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`)
        : [],
    );
  };

  return (
    <AutoComplete
      placeholder="Please Enter"
      onSearch={handleSearch}
      data={data}
      style={{ width: 154, marginRight: 20 }}
    />
  );
}

export default App;
```

## 自定义选项

可以传入 `AutoComplete.Option` 作为组件的 `children`，而非使用 `data`。

```tsx
import { useState } from 'react';
import { AutoComplete } from '@xiaoyaoliu/x-arco-design';
const { Option } = AutoComplete;

function App() {
  const [options, setOptions] = useState<string[]>([]);

  const handleSearch = (inputValue) => {
    setOptions(
      inputValue
        ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`)
        : [],
    );
  };

  return (
    <AutoComplete
      placeholder="Please Enter"
      style={{ width: 154 }}
      onSearch={handleSearch}
    >
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </AutoComplete>
  );
}

export default App;
```

## 自定义输入组件

支持自定义输入组件。

```tsx
import { useState } from 'react';
import { AutoComplete, Input } from '@xiaoyaoliu/x-arco-design';
const { TextArea } = Input;

function App() {
  const [data, setData] = useState<string[]>([]);

  const handleSearch = (inputValue) => {
    setData(
      inputValue && inputValue.trim()
        ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`)
        : [],
    );
  };

  return (
    <AutoComplete
      style={{ width: 320, height: 80 }}
      data={data}
      triggerElement={<TextArea />}
      placeholder="Customize this with your words"
      onSearch={handleSearch}
    />
  );
}

export default App;
```

## 区分大小写

使用 `strict=true` 来指明在匹配时严格区分大小写。

```tsx
import { AutoComplete } from '@xiaoyaoliu/x-arco-design';
const data = ['beijing', 'beihai', 'baoding'];

const App = () => {
  return (
    <div>
      <AutoComplete
        placeholder="Input `B`"
        strict
        data={data}
        style={{ width: 154 }}
      />
    </div>
  );
};

export default App;
```

## 复杂用法

这个示例展示了：`1. 添加Tooltip`, `2. 自定义显示`, `3. 对值进行操控`。

```tsx
import { useState } from 'react';
import { AutoComplete, Tooltip } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [value, setValue] = useState('Beijing');
  return (
    <Tooltip
      trigger="focus"
      content="只有当选中或者输入Beijing的时候才改变值，不然重置为空"
    >
      <AutoComplete
        placeholder="请输入..."
        data={[
          {
            name: '北京',
            value: 'Beijing',
            other: 'other custom data',
          },
        ]}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        onBlur={() => {
          setValue((value) => (value === 'Beijing' ? value : ''));
        }}
        style={{ width: 154 }}
      />
    </Tooltip>
  );
}

export default App;
```

## 查询模式

根据查询结果补全输入内容（确定类目）。

```tsx
import { useState, ReactNode } from 'react';
import { AutoComplete, Input } from '@xiaoyaoliu/x-arco-design';
const { OptGroup, Option } = AutoComplete;

function App() {
  const [data, setData] = useState<ReactNode[]>([]);

  const handleSearch = (inputValue) => {
    if (inputValue) {
      setData(
        ['Group-1', 'Group-2', 'Group-3'].map((groupName, outerIndex) => (
          <OptGroup key={outerIndex} label={groupName}>
            {new Array(3).fill(null).map((_, innerIndex) => {
              const value = `${inputValue}-${outerIndex + 1}-${innerIndex + 1}`;
              return (
                <Option key={`${outerIndex}_${innerIndex}`} value={value}>
                  {value}
                </Option>
              );
            })}
          </OptGroup>
        )),
      );
    } else {
      setData([]);
    }
  };

  return (
    <div>
      <AutoComplete
        style={{ width: 320 }}
        data={data}
        placeholder="Please Enter"
        triggerElement={<Input.Search />}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
```

## 查询模式

根据查询结果补全输入内容（不确定类目）。

```tsx
import { useState, ReactNode } from 'react';
import { AutoComplete, Input } from '@xiaoyaoliu/x-arco-design';
const { Option } = AutoComplete;

function App() {
  const [data, setData] = useState<ReactNode[]>([]);

  const handleSearch = (inputValue) => {
    if (inputValue) {
      setData(
        new Array(3).fill(null).map((_, index) => {
          const value = `${inputValue}-${index + 1}`;
          return (
            <Option key={index} value={value}>
              <span>{value}</span>
              <span
                style={{
                  float: 'right',
                }}
              >{`${~~(Math.random() * 1000)} results`}</span>
            </Option>
          );
        }),
      );
    } else {
      setData([]);
    }
  };

  return (
    <div>
      <AutoComplete
        style={{ width: 320 }}
        data={data}
        placeholder="Please Enter"
        triggerElement={<Input.Search />}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
```

## API

### AutoComplete

| 参数名                   | 描述                                                                                                                                          | 类型                                                                           | 默认值      | 版本                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------- | ------------------------------ |
| allowClear               | 是否允许一键清除                                                                                                                              | boolean                                                                        | `-`         | -                              |
| defaultActiveFirstOption | 是否默认高亮第一个选项                                                                                                                        | boolean                                                                        | `true`      | -                              |
| disabled                 | 是否禁用                                                                                                                                      | boolean                                                                        | `-`         | -                              |
| error                    | 是否是错误状态。(废弃，下个大版本移除，使用 status='error' 替代)                                                                              | boolean                                                                        | `-`         | -                              |
| loading                  | 是否处于加载状态。                                                                                                                            | boolean                                                                        | `-`         | 2.10.0                         |
| strict                   | `strict: true` 的时候大小写敏感                                                                                                               | boolean                                                                        | `-`         | -                              |
| defaultValue             | 自动补全组件的默认值                                                                                                                          | string                                                                         | `-`         | -                              |
| placeholder              | 输入框提示                                                                                                                                    | string                                                                         | `-`         | -                              |
| value                    | 自动补全组件的值（受控模式）                                                                                                                  | string                                                                         | `-`         | -                              |
| status                   | 状态                                                                                                                                          | 'error' \| 'warning'                                                           | `-`         | 2.45.0                         |
| children                 | 自定义输入框/数据源                                                                                                                           | ReactNode                                                                      | `-`         | -                              |
| className                | 节点类名                                                                                                                                      | string \| string[]                                                             | `-`         | -                              |
| data                     | 自动完成的数据源                                                                                                                              | (string \| { value: string; name: string; [key: string]: any } \| ReactNode)[] | `-`         | -                              |
| inputProps               | 传递 Input 组件的属性。                                                                                                                       | Partial&lt;[InputProps](input#input)&gt;                                       | `-`         | 2.10.0                         |
| style                    | 节点样式                                                                                                                                      | CSSProperties                                                                  | `-`         | -                              |
| triggerProps             | 可以接受所有 `Trigger` 的 `Props`                                                                                                             | Partial&lt;[TriggerProps](trigger#trigger)&gt;                                 | `-`         | -                              |
| virtualListProps         | 传递虚拟滚动属性。                                                                                                                            | [AvailableVirtualListProps](#availablevirtuallistprops)                        | `-`         | 2.2.0                          |
| dropdownRender           | 自定义弹出内容。                                                                                                                              | (menu: ReactNode) => ReactNode                                                 | `-`         | -                              |
| filterOption             | 是否根据输入的值筛选数据。如果传入函数的话，接收 `inputValue` 和 `option` 两个参数，当 option 符合筛选条件时，返回 `true`，反之返回 `false`。 | boolean \| ((inputValue: string, option: ReactElement) => boolean)             | `true`      | -                              |
| getPopupContainer        | 弹出框挂载的父节点。                                                                                                                          | (node: HTMLElement) => Element                                                 | `-`         | -                              |
| onBlur                   | 失去焦点的回调                                                                                                                                | (event) => void                                                                | `-`         | -                              |
| onChange                 | 输入或者点击补全项，value 改变时的回调（仅在点击补全项时存在第二个参数）                                                                      | (value: string, option?: [OptionInfo](#optioninfo)) => void                    | `-`         | -                              |
| onFocus                  | 聚焦时的回调                                                                                                                                  | (event) => void                                                                | `-`         | -                              |
| onPressEnter             | 按下回车键的回调                                                                                                                              | (event, activeOption?: [OptionInfo](#optioninfo)) => void                      | `-`         | `activeOption` in 2.25.1       |
| onSearch                 | 搜索补全时的回调                                                                                                                              | (value: string) => void                                                        | `-`         | -                              |
| onSelect                 | 点击补全项时的回调                                                                                                                            | (value: string, option: [OptionInfo](#optioninfo)) => void                     | `-`         | -                              |
| triggerElement           | 自定义触发元素                                                                                                                                | ReactElement \| (({ value }) => ReactElement)                                  | `<Input />` | `() => ReactElement` in 2.31.0 |

### OptionInfo

```js
export interface OptionInfo extends PropsWithChildren<OptionProps> {
  child?: ReactElement;
  _valid: boolean;
  _index: number;
  _origin: 'children' | 'options' | 'userCreatedOptions' | 'userCreatingOption';
}
```

### AvailableVirtualListProps

```js
export type AvailableVirtualListProps = Pick<
  VirtualListProps<any>,
  | 'height'
  | 'itemHeight'
  | 'threshold'
  | 'isStaticItemHeight'
  | 'scrollOptions',
>;
```

### AutoComplete.Option

同 `Select.Option`, 参考 [Select 文档](/components/select) 。

### AutoComplete.OptGroup

同 `Select.OptGroup`, 参考 [Select 文档](/components/select) 。
