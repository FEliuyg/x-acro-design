# 分页 Pagination

采用分页控制单页内的信息数量，也可进行页面跳转。

## 基础用法

最简单的用法。

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Pagination total={200} />;
};

export default App;
```

## 更多页码

页码数较大时，使用多页码的分页样式。

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Pagination defaultCurrent={5} total={200} sizeCanChange />;
};

export default App;
```

## 改变每页展示条目

可定义每页展示条目数量。

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Pagination total={200} sizeCanChange />;
};

export default App;
```

## 跳转

输入页码，可快速跳转到指定页。

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Pagination total={200} showJumper />;
};

export default App;
```

## 尺寸

通过指定 `size` 字段，可以使用不同尺寸的分页器。

`size` field to use different sizes.

```tsx
import { useState } from 'react';
import { Pagination, Radio } from '@xiaoyaoliu/x-arco-design';
const RadioGroup = Radio.Group;

function App() {
  const [size, setSize] = useState('default');
  return (
    <div>
      <RadioGroup
        value={size}
        options={['large', 'default', 'small', 'mini']}
        onChange={(value) => setSize(value)}
        type="button"
        style={{
          marginBottom: 20,
        }}
      />
      <Pagination size={size} total={50} showTotal showJumper sizeCanChange />
    </div>
  );
}

export default App;
```

## 简洁

在空间有限的场景下，可以将 `simple` 设置为 `true`，使用较为简单的文本分页方式。

`simple` to `true`.

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return <Pagination simple total={50} size="small" />;
};

export default App;
```

## 展示总数

您可以通过设置 `showTotal` 来显示数据总数。

`showTotal` to show the total number of data.

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Pagination
        showTotal
        total={50}
        style={{
          marginBottom: 20,
        }}
      />
      <Pagination
        showTotal={(total, range) => (
          <span>{`${range[0]} - ${range[1]} of ${total} items`}</span>
        )}
        total={200}
      />
    </div>
  );
};

export default App;
```

## 受控的数据总数

通过改变 `total` 的值，解决无法计算页码总数的情景。

`total`, solve the situation where the total number of pages cannot be calculated.

```tsx
import React from 'react';
import { Pagination } from '@xiaoyaoliu/x-arco-design';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      showMore: true,
      total: 20,
    };
  }

  handeChange = (pageNum) => {
    if (pageNum > 20) {
      this.setState({
        showMore: false,
        current: pageNum,
      });
      return;
    }

    this.setState({
      total: Math.max((pageNum + 1) * 10, this.state.total),
      showMore: true,
      current: pageNum,
    });
  };

  render() {
    return (
      <Pagination
        current={this.state.current}
        total={this.state.total}
        onChange={this.handeChange}
        showMore={this.state.showMore}
      />
    );
  }
}

export default App;
```

## 全部展示

展示全部配置项。

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Pagination
        showTotal
        total={200}
        showJumper
        sizeCanChange
        style={{ width: 800, marginBottom: 20 }}
      />
      <Pagination
        disabled
        showTotal
        total={200}
        showJumper
        sizeCanChange
        style={{ width: 800 }}
      />
    </div>
  );
};

export default App;
```

## 样式定制

可以通过样式定制得到不同的视觉风格。

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Pagination
        total={200}
        style={{ marginBottom: 20 }}
        pageItemStyle={{ background: 'var(--color-bg-2)', marginRight: 2 }}
        activePageItemStyle={{ background: 'var(--color-fill-2)' }}
      />
      <Pagination
        total={200}
        pageItemStyle={{ background: 'var(--color-bg-2)' }}
        activePageItemStyle={{ background: 'var(--color-fill-2)' }}
      />
    </div>
  );
};

export default App;
```

## 上一步和下一步

设置 `itemRender`，可以自由定制分页按钮。

`itemRender` to customize the pagination buttons.

```tsx
import { Pagination } from '@xiaoyaoliu/x-arco-design';

function itemRender(page, type, originElement) {
  if (type === 'prev') {
    return <a style={{ fontSize: 14, margin: '0 8px' }}>Prev</a>;
  }

  if (type === 'next') {
    return <a style={{ fontSize: 14, margin: '0 8px' }}>Next</a>;
  }

  return originElement;
}

const App = () => {
  return <Pagination itemRender={itemRender} total={200} />;
};

export default App;
```

## 省略页码时展示长度

通过 `bufferSize` 可以设置 `current` 页与 `...` 之间的页码个数。

一个 `...` 至少代表省略 `2` 页。

`bufferSize` you can set the number of pages between the `current` page and `...`.

An `...` means at least `2` pages are omitted.

```tsx
import { Pagination, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Space direction="vertical" size="large">
        <Pagination
          sizeCanChange
          total={200}
          bufferSize={0}
          defaultCurrent={10}
        />
        <Pagination
          sizeCanChange
          total={200}
          bufferSize={1}
          defaultCurrent={10}
        />
        <Pagination
          sizeCanChange
          total={200}
          bufferSize={2}
          defaultCurrent={10}
        />
      </Space>
    </div>
  );
};

export default App;
```

## API

### Pagination

| 参数名                     | 描述                                                   | 类型                                                                                            | 默认值 | 版本   |
| -------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ------ | ------ |
| disabled                   | 是否禁用                                               | boolean                                                                                         | `-`    | -      |
| hideOnSinglePage           | 是否在只有一页的情况下隐藏                             | boolean                                                                                         | `-`    | 2.6.0  |
| pageSizeChangeResetCurrent | `pageSize` 改变的时候重置当前页码为 `1`                | boolean                                                                                         | `true` | -      |
| showJumper                 | 是否显示快速跳转到某页，在 `simple` 模式下默认为 true  | boolean                                                                                         | `-`    | -      |
| showMore                   | 是否显示更多页码提示（当尚无法计算数据总数时可以使用） | boolean                                                                                         | `-`    | -      |
| simple                     | 是否应用精简分页模式                                   | boolean                                                                                         | `-`    | -      |
| sizeCanChange              | 是否可以改变每页条数                                   | boolean                                                                                         | `true` | -      |
| bufferSize                 | `current` 页与 `...` 之间的页码个数                    | number                                                                                          | `2`    | 2.32.0 |
| current                    | 当前页                                                 | number                                                                                          | `-`    | -      |
| defaultCurrent             | 当前页默认值                                           | number                                                                                          | `-`    | -      |
| defaultPageSize            | 默认每页数据条数                                       | number                                                                                          | `-`    | -      |
| pageSize                   | 每页数据条数                                           | number                                                                                          | `-`    | -      |
| total                      | 数据总数                                               | number                                                                                          | `-`    | -      |
| itemRender                 | 定制分页按钮的结构                                     | (page: number,type: 'page' \| 'more' \| 'prev' \| 'next',originElement: ReactNode) => ReactNode | `-`    | -      |
| size                       | 分页器尺寸                                             | 'mini' \| 'small' \| 'default' \| 'large'                                                       | `-`    | -      |
| activePageItemStyle        | 被选中的分页按钮样式                                   | CSSProperties                                                                                   | `-`    | -      |
| className                  | 节点类名                                               | string \| string[]                                                                              | `-`    | -      |
| icons                      | 设置分页器的图标                                       | {prev?: ReactNode;next?: ReactNode;more?: ReactNode;}                                           | `-`    | -      |
| pageItemStyle              | 分页按钮样式                                           | CSSProperties                                                                                   | `-`    | -      |
| selectProps                | 用于配置弹出框的属性                                   | Partial&lt;[SelectProps](select#select)&gt;                                                     | `-`    | -      |
| sizeOptions                | 每页可以显示数据条数                                   | number[]                                                                                        | `-`    | -      |
| style                      | 节点样式                                               | CSSProperties                                                                                   | `-`    | -      |
| onChange                   | 变化时的回调                                           | (pageNumber: number, pageSize: number) => void                                                  | `-`    | -      |
| onPageSizeChange           | pageSize 变化时的回调                                  | (size: number, current: number) => void                                                         | `-`    | -      |
| showTotal                  | 是否显示数据总数                                       | boolean \| ((total: number, range: number[]) => ReactNode)                                      | `-`    | -      |
