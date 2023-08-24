# 复选框 Checkbox

在一组数据中，用户可通过复选框选择一个或多个数据。

## 基础用法

最基本的点击选中操作。

```tsx
import { Checkbox } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Checkbox>Checkbox</Checkbox>
    </div>
  );
};

export default App;
```

## 禁用

禁用复选框。

```tsx
import { Checkbox } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Checkbox disabled>disabled Checkbox</Checkbox>
    </div>
  );
};

export default App;
```

## 受控

通过 `checked` 属性控制是否选中

```tsx
import React from 'react';
import { Checkbox, Button, Space } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <Space size={40}>
        <Checkbox checked={checked}>Checkbox</Checkbox>
        <Checkbox checked={checked} disabled>
          disabled Checkbox
        </Checkbox>
      </Space>
      <div style={{ marginTop: 30 }}>
        <Button
          type="primary"
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? 'unCheck' : 'Check'}
        </Button>
      </div>
    </div>
  );
}

export default App;
```

## 复选框组

生成复选框组。设置 `direction="vertical"` 可以展示竖向的复选框组

```tsx
import { Checkbox } from '@xiaoyaoliu/x-arco-design';
const CheckboxGroup = Checkbox.Group;
const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
    disabled: true,
  },
  {
    label: 'Option 3',
    value: '3',
  },
  {
    label: 'Option 4',
    value: '4',
  },
];

const App = () => {
  return (
    <div>
      <CheckboxGroup
        options={['Option A', 'Option B', 'Option C']}
        style={{ display: 'block', marginBottom: 16 }}
      />

      <CheckboxGroup
        options={options}
        defaultValue={['1', '3']}
        style={{ display: 'block', marginBottom: 20 }}
      />

      <CheckboxGroup
        direction="vertical"
        options={['Option A', 'Option B', 'Option C']}
      />
    </div>
  );
};

export default App;
```

## 全选

通过 `indeterminate` 属性可以实现半选效果。

```tsx
import { useState } from 'react';
import { Checkbox } from '@xiaoyaoliu/x-arco-design';
const CheckboxGroup = Checkbox.Group;
const options = ['Option 1', 'Option 2', 'Option 3'];

function App() {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [value, setValue] = useState([0, 1]);

  function onChangeAll(checked: boolean) {
    if (checked) {
      setIndeterminate(false);
      setCheckAll(true);
      setValue([0, 1, 2]);
    } else {
      setIndeterminate(false);
      setCheckAll(false);
      setValue([]);
    }
  }

  function onChange(checkList: number[]) {
    setIndeterminate(
      !!(checkList.length && checkList.length !== options.length),
    );
    setCheckAll(!!(checkList.length === options.length));
    setValue(checkList);
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Checkbox
          onChange={onChangeAll}
          checked={checkAll}
          indeterminate={indeterminate}
        >
          {checkAll ? 'unCheck All' : 'Check All'}
        </Checkbox>
      </div>
      <CheckboxGroup
        value={value}
        options={options.map((x, i) => ({
          label: x,
          value: i,
        }))}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
```

## 布局

可以通过 `children` 传入 `checkbox`，配合`Grid`组件实现灵活的布局。

```tsx
import { useState } from 'react';
import { Checkbox, Grid } from '@xiaoyaoliu/x-arco-design';
const { Col, Row } = Grid;

function App() {
  const [value, setValue] = useState(['Option 1', 'Option 2']);
  return (
    <Checkbox.Group value={value} onChange={setValue}>
      <Row>
        <Col span={8} style={{ marginBottom: 12 }}>
          <Checkbox value="Option 1">Option 1</Checkbox>
        </Col>
        <Col span={8} style={{ marginBottom: 12 }}>
          <Checkbox disabled value="Option 2">
            Option 2
          </Checkbox>
        </Col>
        <Col span={8} style={{ marginBottom: 12 }}>
          <Checkbox value="Option 3">Option 3</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="Option 4">Option 4</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="Option 5">Option 5</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
}

export default App;
```

## 自定义

通过 `icon` 属性自定义选中态图标。

```tsx
import { Checkbox } from '@xiaoyaoliu/x-arco-design';
import { AppleOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <div>
      <Checkbox icon={<AppleOutlined />}>Checkbox</Checkbox>
    </div>
  );
};

export default App;
```

## 自定义节点内容

可以通过传入函数类型的 `children` 来自定义渲染节点内容( `v2.29.0`)。

```tsx
import { Checkbox, Tag, Space, Typography } from '@xiaoyaoliu/x-arco-design';
import './demo.css';

const App = () => {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Checkbox.Group defaultValue={['Beijing']}>
          {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
            return (
              <Checkbox key={item} value={item}>
                {({ checked }) => {
                  return (
                    <Tag key={item} color={checked ? 'arcoblue' : ''}>
                      {item}
                    </Tag>
                  );
                }}
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </div>
      <Checkbox.Group>
        {[1, 2].map((item) => {
          return (
            <Checkbox key={item} value={item}>
              {({ checked }) => {
                return (
                  <Space
                    align="start"
                    className={`custom-checkbox-card ${
                      checked ? 'custom-checkbox-card-checked' : ''
                    }`}
                  >
                    <div className="custom-checkbox-card-mask">
                      <div className="custom-checkbox-card-mask-dot"></div>
                    </div>
                    <div>
                      <div className="custom-checkbox-card-title">
                        Checkbox Card {item}
                      </div>
                      <Typography.Text type="secondary">
                        this is a text
                      </Typography.Text>
                    </div>
                  </Space>
                );
              }}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </div>
  );
};

export default App;
```

## useCheckbox

使用 `useCheckbox` 快捷管理复选框数据

```tsx
import {
  Checkbox,
  Divider,
  Button,
  Typography,
} from '@xiaoyaoliu/x-arco-design';
const CheckboxGroup = Checkbox.Group;
const useCheckbox = Checkbox.useCheckbox;
const options = [...Array(6)].map((_, i) => ({
  label: `Option ${i}`,
  value: i,
}));

function Demo1() {
  const {
    selected,
    selectAll,
    setSelected,
    unSelectAll,
    isAllSelected,
    isPartialSelected,
    toggle,
  } = useCheckbox(
    options.map((x) => x.value),
    [1, 2],
  );
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Checkbox
          onChange={(checked) => {
            if (checked) {
              selectAll();
            } else {
              unSelectAll();
            }
          }}
          checked={isAllSelected()}
          indeterminate={isPartialSelected()}
        >
          Check All
        </Checkbox>
        <Button
          size="small"
          type="primary"
          style={{ margin: '0 16px' }}
          onClick={() => {
            toggle();
          }}
        >
          Inverse Check
        </Button>
      </div>
      <CheckboxGroup
        value={selected}
        options={options}
        onChange={setSelected}
      />
    </div>
  );
}

function Demo2() {
  const {
    selectAll,
    isSelected,
    unSelectAll,
    isAllSelected,
    isPartialSelected,
    toggle,
    setValueSelected,
  } = Checkbox.useCheckbox(
    options.map((x) => x.value),
    [1, 2],
  );
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Checkbox
          onChange={(checked) => {
            if (checked) {
              selectAll();
            } else {
              unSelectAll();
            }
          }}
          checked={isAllSelected()}
          indeterminate={isPartialSelected()}
        >
          Check All
        </Checkbox>

        <Button
          size="small"
          type="primary"
          style={{ margin: '0 16px' }}
          onClick={() => {
            toggle();
          }}
        >
          Inverse Check
        </Button>
      </div>
      {options.map((option) => {
        return (
          <Checkbox
            key={option.value}
            style={{ margin: '0 16px' }}
            checked={isSelected(option.value)}
            value={option.value}
            onChange={(checked) => {
              setValueSelected(option.value, checked);
            }}
          >
            {option.label}
          </Checkbox>
        );
      })}
    </div>
  );
}

function Demo3() {
  const options2 = options.map((x, i) => {
    return {
      value: x.value,
      label: 'Option' + x.value,
      disabled: !(i % 2),
    };
  });
  const { selected, setSelected } = Checkbox.useCheckbox(
    options2.map((x) => x.value),
    [1, 2],
  );
  return (
    <div>
      <div style={{ margin: '16px 0' }}>
        <Button
          size="small"
          type="primary"
          onClick={() => {
            setSelected(
              options2.filter((x) => !x.disabled).map((x) => x.value),
            );
          }}
        >
          Check undisabled Options
        </Button>
      </div>
      <CheckboxGroup
        value={selected}
        onChange={setSelected}
        options={options2}
      ></CheckboxGroup>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Typography.Paragraph style={{ margin: '20px 0' }}>
        Checkbox group
      </Typography.Paragraph>
      <Demo1 />
      <Divider />
      <Typography.Paragraph style={{ margin: '20px 0' }}>
        Checkbox
      </Typography.Paragraph>
      <Demo2 />
      <Divider />
      <Typography.Paragraph>
        Checkbox group with disabled items
      </Typography.Paragraph>
      <Demo3 />
    </div>
  );
};

export default App;
```

## API

### Checkbox

`T = string | number`

| 参数名         | 描述                | 类型                                 | 默认值 | 版本   |
| -------------- | ------------------- | ------------------------------------ | ------ | ------ |
| checked        | 是否选中            | boolean                              | `-`    | -      |
| defaultChecked | 默认是否选中        | boolean                              | `-`    | -      |
| disabled       | 是否禁用            | boolean                              | `-`    | -      |
| error          | 错误样式            | boolean                              | `-`    | -      |
| indeterminate  | 半选状态            | boolean                              | `-`    | -      |
| icon           | 自定义 IconCheck    | ReactNode                            | `-`    | 2.43.0 |
| className      | 节点类名            | string \| string[]                   | `-`    | -      |
| style          | 节点样式            | CSSProperties                        | `-`    | -      |
| value          | 复选框的 value 属性 | T                                    | `-`    | -      |
| onChange       | 点击复选框的回调    | (checked: boolean, e: Event) => void | `-`    | -      |

### Checkbox.Group

| 参数名       | 描述                   | 类型                                                                          | 默认值       |
| ------------ | ---------------------- | ----------------------------------------------------------------------------- | ------------ |
| disabled     | 整组失效               | boolean                                                                       | `-`          |
| direction    | 方向                   | 'horizontal' \| 'vertical'                                                    | `horizontal` |
| className    | 节点类名               | string \| string[]                                                            | `-`          |
| defaultValue | 默认选中的选项         | T[]                                                                           | `-`          |
| options      | 可选项                 | (T \| { label: ReactNode; value: T; disabled?: boolean; icon?: ReactNode })[] | `-`          |
| style        | 节点样式               | CSSProperties                                                                 | `-`          |
| value        | 选中的选项（受控模式） | T[]                                                                           | `-`          |
| onChange     | 变化时的回调函数       | (value: T[], e: Event) => void                                                | `-`          |

### `Checkbox.useCheckbox`

```js
/** T = string | number */
const result: ResultType = Checkbox.useCheckbox<T>(values: T[], defaultSelected?: T[]);
```

**ResultType**

| 参数名            |                          描述                          |                       类型                       |
| ----------------- | :----------------------------------------------------: | :----------------------------------------------: |
| selected          |                       当前选中项                       |                      `T[]`                       |
| setSelected       |                  只选中传入参数的选项                  |             `(value: T[]) => void;`              |
| setValueSelected  |   设置选项的选中状态，第二个参数为要设置的选中状态。   | `(value: T \| T[], selected?: boolean) => void;` |
| selectAll         |                        选中全部                        |                  `() => void;`                   |
| unSelectAll       |                      取消全部选中                      |                  `() => void;`                   |
| isSelected        |                     是否选项被选中                     |             `(value: T) => boolean;`             |
| toggle            | 切换选项选中状态。不传参数时，会切换所有选项的选中状态 |          `(value?: T \| T[]) => void;`           |
| isAllSelected     |                   是否全部选项被选中                   |                 `() => boolean;`                 |
| isPartialSelected |                  是否只有部分选项选中                  |                 `() => boolean;`                 |
