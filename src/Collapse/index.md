# 折叠面板 Collapse

可以折叠 / 展开的内容区域。

## 基本用法

用于将复杂的内容区域分组和隐藏，可折叠或展开，默认可以展开多个面板，也可以只展开某几个面板。

```tsx
import { Collapse, Divider } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse defaultActiveKey={['1', '2']} style={{ maxWidth: 1180 }}>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>

      <CollapseItem header="Introduce" name="2" disabled>
        ByteDance's core product, Toutiao ("Headlines"), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats, such as texts, images, question-and-answer
        posts, microblogs, and videos.
      </CollapseItem>

      <CollapseItem header="The Underlying AI Technology" name="3">
        In 2016, ByteDance's AI Lab and Peking University co-developed
        Xiaomingbot (张小明), an artificial intelligence bot that writes news
        articles. The bot published 450 articles during the 15-day 2016 Summer
        Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
        approximately two seconds after the event ended.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 手风琴模式

手风琴模式。

```tsx
import { Collapse } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse accordion style={{ maxWidth: 1180 }}>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="2">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="3">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 嵌套面板

嵌套面板。

```tsx
import { Collapse } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse defaultActiveKey={['1', '2']} style={{ maxWidth: 1180 }}>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        <Collapse defaultActiveKey={'1.1'}>
          <CollapseItem
            header="Beijing Toutiao Technology Co., Ltd."
            name="1.1"
          >
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
          <CollapseItem
            header="Beijing Toutiao Technology Co., Ltd."
            name="1.2"
          >
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>
        </Collapse>
      </CollapseItem>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="2">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="3">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 简洁面板

通过使用 `bordered=false` 来使用没有边框的简洁样式。

`bordered=false` to use simple style without borders.

```tsx
import { Collapse, Divider } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      style={{ maxWidth: 1180 }}
    >
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>

      <CollapseItem header="Introduce" name="2">
        ByteDance's core product, Toutiao ("Headlines"), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats, such as texts, images, question-and-answer
        posts, microblogs, and videos.
      </CollapseItem>

      <CollapseItem header="The Underlying AI Technology" name="3">
        In 2016, ByteDance's AI Lab and Peking University co-developed
        Xiaomingbot (张小明), an artificial intelligence bot that writes news
        articles. The bot published 450 articles during the 15-day 2016 Summer
        Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
        approximately two seconds after the event ended.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 自定义面板样式

通过指定 `style` 实现自定义的面板样式。

`style` to customize style of panel.

```tsx
import { Collapse, Divider } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;
const customStyle = {
  borderRadius: 2,
  marginBottom: 24,
  border: 'none',
  overflow: 'hidden',
};

const App = () => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1', '2']}
      style={{ maxWidth: 1180 }}
    >
      <CollapseItem
        style={customStyle}
        header="Beijing Toutiao Technology Co., Ltd."
        name="1"
      >
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>

      <CollapseItem style={customStyle} header="Introduce" name="2">
        ByteDance's core product, Toutiao ("Headlines"), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats, such as texts, images, question-and-answer
        posts, microblogs, and videos.
      </CollapseItem>

      <CollapseItem
        style={customStyle}
        header="The Underlying AI Technology"
        name="3"
      >
        In 2016, ByteDance's AI Lab and Peking University co-developed
        Xiaomingbot (张小明), an artificial intelligence bot that writes news
        articles. The bot published 450 articles during the 15-day 2016 Summer
        Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
        approximately two seconds after the event ended.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 额外节点

通过 `extra` 可以设置额外节点。

`extra`.

```tsx
import { Collapse } from '@xiaoyaoliu/x-arco-design';
import { IconMoreVertical } from '@arco-design/web-react/icon';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse
      destroyOnHide
      defaultActiveKey={['1', '2']}
      style={{ maxWidth: 1180 }}
    >
      <CollapseItem
        header="Beijing Toutiao Technology Co., Ltd."
        name="1"
        extra={<IconMoreVertical />}
      >
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>

      <CollapseItem
        header="Beijing Toutiao Technology Co., Ltd."
        name="2"
        extra={<IconMoreVertical />}
      >
        ByteDance's core product, Toutiao ("Headlines"), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats, such as texts, images, question-and-answer
        posts, microblogs, and videos.
      </CollapseItem>

      <CollapseItem
        header="Beijing Toutiao Technology Co., Ltd."
        name="3"
        extra={<IconMoreVertical />}
      >
        In 2016, ByteDance's AI Lab and Peking University co-developed
        Xiaomingbot (张小明), an artificial intelligence bot that writes news
        articles. The bot published 450 articles during the 15-day 2016 Summer
        Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
        approximately two seconds after the event ended.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 展开图标位置

可以通过`expandIconPosition`属性设置展开 Icon 的位置。

`expandIcon` can be set through `expandIconPosition`.

```tsx
import React from 'react';
import { Collapse, Radio, Grid, Typography } from '@xiaoyaoliu/x-arco-design';
import { IconInfoCircle, IconSettings } from '@arco-design/web-react/icon';

const CollapseItem = Collapse.Item;

function App() {
  const [position, setPosition] = React.useState('left');
  return (
    <div>
      <Grid.Row align="center" style={{ marginBottom: 24 }}>
        <Typography.Text>Position:</Typography.Text>
        <Radio.Group
          style={{ marginLeft: 20 }}
          value={position}
          onChange={setPosition}
          options={[
            {
              label: 'hide',
              value: '',
            },
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'right',
              value: 'right',
            },
          ]}
        />
      </Grid.Row>

      <Collapse
        {...(position
          ? {
              expandIconPosition: position,
            }
          : {
              expandIcon: null,
            })}
        style={{ maxWidth: 1180 }}
      >
        <CollapseItem
          header="Beijing Toutiao Technology Co., Ltd."
          name="1"
          extra={<IconInfoCircle />}
        >
          Beijing Toutiao Technology Co., Ltd.
        </CollapseItem>

        <CollapseItem header="Introduce" name="2" extra={<IconSettings />}>
          ByteDance's core product, Toutiao ("Headlines"), is a content platform
          in China and around the world. Toutiao started out as a news
          recommendation engine and gradually evolved into a platform delivering
          content in various formats, such as texts, images, question-and-answer
          posts, microblogs, and videos.
        </CollapseItem>

        <CollapseItem header="The Underlying AI Technology" name="3">
          In 2016, ByteDance's AI Lab and Peking University co-developed
          Xiaomingbot (张小明), an artificial intelligence bot that writes news
          articles. The bot published 450 articles during the 15-day 2016 Summer
          Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
          approximately two seconds after the event ended.
        </CollapseItem>
      </Collapse>
    </div>
  );
}

export default App;
```

## Lazyload

是否直到 `Collapse.Item` 首次展开时才渲染 `children`。

`children` until the first expansion of `Collapse.Item`.

```tsx
import { Collapse } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse lazyload defaultActiveKey={['1', '2']} style={{ maxWidth: 1180 }}>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>

      <CollapseItem header="Introduce" name="2">
        ByteDance's core product, Toutiao ("Headlines"), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats, such as texts, images, question-and-answer
        posts, microblogs, and videos.
      </CollapseItem>

      <CollapseItem header="The Underlying AI Technology" name="3">
        In 2016, ByteDance's AI Lab and Peking University co-developed
        Xiaomingbot (张小明), an artificial intelligence bot that writes news
        articles. The bot published 450 articles during the 15-day 2016 Summer
        Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
        approximately two seconds after the event ended.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 隐藏时销毁

通过`destroyOnHide`属性可以设置销毁被折叠的面板。

`destroyOnHide` property.

```tsx
import { Collapse } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse
      destroyOnHide
      defaultActiveKey={['1', '2']}
      style={{ maxWidth: 1180 }}
    >
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>

      <CollapseItem header="Introduce" name="2">
        ByteDance's core product, Toutiao ("Headlines"), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats, such as texts, images, question-and-answer
        posts, microblogs, and videos.
      </CollapseItem>

      <CollapseItem header="The Underlying AI Technology" name="3">
        In 2016, ByteDance's AI Lab and Peking University co-developed
        Xiaomingbot (张小明), an artificial intelligence bot that writes news
        articles. The bot published 450 articles during the 15-day 2016 Summer
        Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
        approximately two seconds after the event ended.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## 指定折叠触发区域

通过 `triggerRegion` 属性，设置面板可以触发折叠的区域。

`triggerRegion`, set the region that can trigger collapsing.

```tsx
import { Collapse, Divider } from '@xiaoyaoliu/x-arco-design';
const CollapseItem = Collapse.Item;

const App = () => {
  return (
    <Collapse
      style={{ maxWidth: 1180 }}
      defaultActiveKey={['1']}
      triggerRegion="header"
    >
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
        <Divider style={{ margin: '8px 0' }} />
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
    </Collapse>
  );
};

export default App;
```

## API

### Collapse

| 参数名             | 描述                                           | 类型                                     | 默认值 | 版本   |
| ------------------ | ---------------------------------------------- | ---------------------------------------- | ------ | ------ |
| accordion          | 是否是手风琴模式                               | boolean                                  | `-`    | -      |
| bordered           | 无边框样式                                     | boolean                                  | `true` | -      |
| destroyOnHide      | 是否销毁被折叠的面板                           | boolean                                  | `-`    | -      |
| lazyload           | 设置为 `true` 时，挂载时不会渲染被隐藏的面板。 | boolean                                  | `true` | -      |
| expandIconPosition | 展开图标的位置                                 | 'left' \| 'right'                        | `left` | -      |
| triggerRegion      | 可触发折叠操作的区域                           | 'header' \| 'icon'                       | `-`    | 2.41.0 |
| expandIcon         | 自定义展开图标                                 | ReactNode                                | `-`    | -      |
| activeKey          | 当前面板选中值                                 | string \| string[]                       | `-`    | -      |
| className          | 节点类名                                       | string \| string[]                       | `-`    | -      |
| defaultActiveKey   | 默认展开的面板                                 | string \| string[]                       | `-`    | -      |
| style              | 节点样式                                       | CSSProperties                            | `-`    | -      |
| onChange           | 展开面板改变时触发                             | (key: string, keys: string[], e) => void | `-`    | -      |

### Collapse.Item

| 参数名         | 描述                                                               | 类型               | 默认值 | 版本   |
| -------------- | ------------------------------------------------------------------ | ------------------ | ------ | ------ |
| destroyOnHide  | 面板被折叠时是否销毁节点，优先级高于 `Collapse` 的 `destroyOnHide` | boolean            | `-`    | -      |
| disabled       | 是否禁用                                                           | boolean            | `-`    | -      |
| showExpandIcon | 是否展示展开按钮                                                   | boolean            | `true` | -      |
| name           | 对应 activeKey，当前面板组件的的唯一标识                           | string **(必填)**  | `-`    | -      |
| expandIcon     | 自定义展开图标                                                     | ReactNode          | `-`    | -      |
| extra          | 额外节点                                                           | ReactNode          | `-`    | -      |
| header         | 折叠面板头部内容，允许自定义                                       | ReactNode          | `-`    | -      |
| className      | 节点类名                                                           | string \| string[] | `-`    | -      |
| contentStyle   | 内容区域的附加样式。                                               | CSSProperties      | `-`    | 2.15.0 |
| style          | 节点样式                                                           | CSSProperties      | `-`    | -      |
