# 卡片 Card

将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。

## 基础用法

常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。

```tsx
import { Card, Link } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Card style={{ width: 360 }} title="Arco Card" extra={<Link>More</Link>}>
        ByteDance's core product, Toutiao ("Headlines"), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats.
      </Card>
    </div>
  );
};

export default App;
```

## 鼠标悬浮样式

指定 `hoverable` 来为卡片添加鼠标悬浮样式，同时你可以通过样式覆盖来自定义悬浮样式。

`hoverable` to add a hover style to the card. The hover style can also be customized through style override.

```tsx
import { Card, Link, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space>
      <Card
        style={{ width: 360 }}
        title="Arco Card"
        hoverable
        extra={<Link>More</Link>}
      >
        Card content
        <br />
        Card content
      </Card>
      <Card
        style={{ width: 360 }}
        className="card-custom-hover-style"
        title="Custom hover style"
        hoverable
        extra={<Link>More</Link>}
      >
        Card content <br /> Card content
      </Card>
    </Space>
  );
};

export default App;
```

```css
.card-custom-hover-style {
  transition-property: all;
}

.card-custom-hover-style:hover {
  transform: translateY(-4px);
}
```

## 无边框卡片

设置 `bordered` 为 `false` 来使用无边框卡片。

`bordered` to `false` to use borderless cards.

```tsx
import { Card, Link, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space
      style={{
        padding: 40,
        backgroundColor: 'var(--color-fill-2)',
      }}
      size="large"
    >
      <Card
        style={{ width: 360 }}
        title="Arco Card"
        extra={<Link>More</Link>}
        bordered={false}
      >
        Card content
        <br />
        Card content
      </Card>
      <Card
        style={{ width: 360 }}
        title="Hover me"
        hoverable
        extra={<Link>More</Link>}
        bordered={false}
      >
        Card content
        <br />
        Card content
      </Card>
    </Space>
  );
};

export default App;
```

## 简洁卡片

卡片可以只有内容区域。

```tsx
import {
  Card,
  Avatar,
  Link,
  Typography,
  Space,
} from '@xiaoyaoliu/x-arco-design';
import { IconArrowRight } from '@arco-design/web-react/icon';

const Content = ({ children }) => {
  return (
    <Space
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Space>
        <Avatar
          style={{
            backgroundColor: '#165DFF',
          }}
          size={28}
        >
          A
        </Avatar>
        <Typography.Text>Username</Typography.Text>
      </Space>
      {children}
    </Space>
  );
};

const App = () => {
  return (
    <>
      <Card hoverable style={{ width: 360, marginBottom: 20 }}>
        <Content>
          <Link>More</Link>
        </Content>
      </Card>
      <Card className="card-with-icon-hover" hoverable style={{ width: 360 }}>
        <Content>
          <span className="icon-hover">
            <IconArrowRight
              style={{
                cursor: 'pointer',
              }}
            />
          </span>
        </Content>
      </Card>
    </>
  );
};

export default App;
```

```css
.card-with-icon-hover .icon-hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.1s;
}

.card-with-icon-hover .icon-hover:hover {
  background-color: rgb(var(--gray-2));
}
```

## 更灵活的内容展示

使用 `Card.Meta` 支持更加灵活的内容（封面、头像、 标题、描述信息）

`Card.Meta` to support more flexible content (cover, avatar, title, description)

```tsx
import { Card } from '@xiaoyaoliu/x-arco-design';
const { Meta } = Card;

const App = () => {
  return (
    <Card
      hoverable
      style={{ width: 360 }}
      cover={
        <div style={{ height: 204, overflow: 'hidden' }}>
          <img
            style={{ width: '100%', transform: 'translateY(-20px)' }}
            alt="dessert"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      }
    >
      <Meta
        title="Card Title"
        description={
          <>
            Card content <br /> Card content
          </>
        }
      />
    </Card>
  );
};

export default App;
```

## 栅格卡片

在系统概览页面常常和栅格进行配合。

`Grid` on the overview page of systems.

```tsx
import { Card, Grid, Link } from '@xiaoyaoliu/x-arco-design';
const { Row, Col } = Grid;
const extra = <Link>More</Link>;

const App = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        padding: 40,
        backgroundColor: 'var(--color-fill-2)',
      }}
    >
      <Row gutter={20} style={{ marginBottom: 20 }}>
        <Col span={8}>
          <Card
            title="Arco Card"
            extra={extra}
            bordered={false}
            style={{
              width: '100%',
            }}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Arco Card"
            extra={extra}
            bordered={false}
            style={{ width: '100%' }}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Arco Card"
            extra={extra}
            bordered={false}
            style={{ width: '100%' }}
          >
            Card content
          </Card>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={16}>
          <Card
            title="Arco Card"
            extra={extra}
            bordered={false}
            style={{ width: '100%' }}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Arco Card"
            extra={extra}
            bordered={false}
            style={{ width: '100%' }}
          >
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## 预加载的卡片

结合 `Skeleton` 来在数据读入前显示文本骨架。

`Skeleton` to display the text skeleton before the data is loaded.

```tsx
import { useState } from 'react';
import {
  Card,
  Switch,
  Skeleton,
  Avatar,
  Link,
  Typography,
  Space,
} from '@xiaoyaoliu/x-arco-design';
const { Meta } = Card;

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Switch
        style={{ display: 'block', marginBottom: 10 }}
        checked={!loading}
        onChange={(checked) => setLoading(!checked)}
      />
      <Space align="start" size="large">
        <Card
          style={{ width: 384 }}
          cover={
            <Skeleton
              loading={loading}
              text={{ rows: 0 }}
              image={{
                style: {
                  width: 352,
                  height: 188,
                  margin: '16px 16px 0 16px',
                },
              }}
            >
              <div style={{ height: 204, overflow: 'hidden' }}>
                <img
                  style={{ width: '100%', transform: 'translateY(-20px)' }}
                  alt="dessert"
                  src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
              </div>
            </Skeleton>
          }
        >
          <Meta
            avatar={
              <Skeleton
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 4,
                }}
                loading={loading}
                text={{ rows: 1, width: 64 }}
                image={{
                  shape: 'circle',
                  style: {
                    width: 24,
                    height: 24,
                  },
                }}
              >
                <Space>
                  <Avatar size={24}>A</Avatar>
                  <Typography.Text>Username</Typography.Text>
                </Space>
              </Skeleton>
            }
            title={
              <Skeleton
                loading={loading}
                style={{ marginTop: 0 }}
                text={{
                  rows: 1,
                  width: 72,
                }}
              >
                Card title
              </Skeleton>
            }
            description={
              <Skeleton loading={loading} text={{ rows: 1, width: 150 }}>
                This is the description
              </Skeleton>
            }
          />
        </Card>
        <Card
          style={{ width: 384 }}
          title={
            <Skeleton loading={loading} text={{ rows: 1, width: 72 }}>
              Arco Card
            </Skeleton>
          }
          extra={
            <Skeleton
              loading={loading}
              text={{
                rows: 1,
                width: '100%',
                style: {
                  width: 30,
                  float: 'right',
                },
              }}
            >
              <Link>More</Link>
            </Skeleton>
          }
        >
          <Skeleton
            loading={loading}
            text={{ rows: 2, width: ['100%', '80%'] }}
          >
            ByteDance's core product, Toutiao ("Headlines"), is a content
            platform in China and around the world.
          </Skeleton>

          <Meta
            avatar={
              <Skeleton
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 4,
                }}
                loading={loading}
                text={{ rows: 1, width: 64 }}
                image={{
                  shape: 'circle',
                  style: {
                    width: 24,
                    height: 24,
                  },
                }}
              >
                <Space>
                  <Avatar size={24}>A</Avatar>
                  <Typography.Text>Username</Typography.Text>
                </Space>
              </Skeleton>
            }
          />
        </Card>
      </Space>
    </>
  );
}

export default App;
```

## 网络型内嵌卡片

通过 `Card.Grid` 来使用卡片内容区隔模式。

`Card.Grid` to enable the card content segmentation mode.

```tsx
import { Card, Link } from '@xiaoyaoliu/x-arco-design';
const { Grid } = Card;

const App = () => {
  return (
    <Card bordered={false} style={{ width: '100%' }}>
      {new Array(7).fill(null).map((_, index) => {
        const hoverable = index % 2 === 0;
        return (
          <Grid
            key={index}
            hoverable={hoverable}
            style={{
              width: '25%',
            }}
          >
            <Card
              className="card-demo-in-grid"
              style={{ width: '100%' }}
              title="Arco Card"
              extra={<Link>More</Link>}
              bordered={false}
            >
              {new Array(2).fill(null).map((_, index) => (
                <p style={{ margin: 0 }} key={index}>
                  {hoverable ? 'Card allow to hover' : 'Card content'}
                </p>
              ))}
            </Card>
          </Grid>
        );
      })}
    </Card>
  );
};

export default App;
```

```css
.card-demo-in-grid .arco-card-header {
  border: none;
}
```

## 内部卡片

卡片中可以嵌套其他卡片组件。

```tsx
import { Card, Link } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Card title="Arco Card">
      <Card
        style={{ marginBottom: 20 }}
        title="Inner Card Title"
        extra={<Link>More</Link>}
      >
        Inner Card Content
      </Card>
      <Card title="Inner Card Title" extra={<Link>More</Link>}>
        Inner Card Content
      </Card>
    </Card>
  );
};

export default App;
```

## 带页签的卡片

举例来说，可以在卡片组件里面使用 `Tabs` 标签页组件。

`Tabs` component can be used in card.

```tsx
import { Card, Tabs, Link } from '@xiaoyaoliu/x-arco-design';
const TabPane = Tabs.TabPane;

const App = () => {
  return (
    <Card
      title="Card with Tab"
      extra={<Link>More</Link>}
      style={{
        width: '100%',
      }}
    >
      <Tabs
        style={{
          maxWidth: 350,
          margin: -15,
        }}
      >
        {new Array(4).fill(null).map((_, index) => {
          return (
            <TabPane destroyOnHide key={index} title={`Tab ${index}`}>
              <div
                style={{
                  margin: '0px 16px 16px 16px',
                }}
              >
                {`Content ${index}`}
                <br />
                {`Content ${index}`}
                <br />
                {`Content ${index}`}
              </div>
            </TabPane>
          );
        })}
      </Tabs>
    </Card>
  );
};

export default App;
```

## 支持更多内容配置

`actions` 字段接收一个 `ReactNode` 数组，用于展示底部按钮组。

`actions` field receives an array of `ReactNode`, which will be displayed at the bottom as button group.

```tsx
import { Card, Avatar, Typography, Space } from '@xiaoyaoliu/x-arco-design';
import {
  IconThumbUp,
  IconShareInternal,
  IconMore,
} from '@arco-design/web-react/icon';
const { Meta } = Card;

const App = () => {
  return (
    <Card
      className="card-with-icon-hover"
      style={{ width: 360 }}
      cover={
        <div style={{ height: 204, overflow: 'hidden' }}>
          <img
            style={{ width: '100%', transform: 'translateY(-20px)' }}
            alt="dessert"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      }
      actions={[
        <span className="icon-hover">
          <IconThumbUp />
        </span>,
        <span className="icon-hover">
          <IconShareInternal />
        </span>,
        <span className="icon-hover">
          <IconMore />
        </span>,
      ]}
    >
      <Meta
        avatar={
          <Space>
            <Avatar size={24}>A</Avatar>
            <Typography.Text>Username</Typography.Text>
          </Space>
        }
        title="Card Title"
        description="This is the description"
      />
    </Card>
  );
};

export default App;
```

```css:silent
.card-with-icon-hover .icon-hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.1s;
}

.card-with-icon-hover .icon-hover:hover {
  background-color: rgb(var(--gray-2));
}
```

## API

### Card

| 参数名      | 描述                 | 类型                 | 默认值    |
| ----------- | -------------------- | -------------------- | --------- |
| bordered    | 是否有边框           | boolean              | `true`    |
| hoverable   | 是否可悬浮           | boolean              | `-`       |
| loading     | 是否为加载中         | boolean              | `-`       |
| size        | 卡片尺寸             | 'default' \| 'small' | `default` |
| cover       | 卡片封面             | ReactNode            | `-`       |
| extra       | 卡片右上角的操作区域 | string \| ReactNode  | `-`       |
| title       | 卡片标题             | string \| ReactNode  | `-`       |
| actions     | 卡片底部的操作组     | ReactNode[]          | `-`       |
| bodyStyle   | 内容区域自定义样式   | CSSProperties        | `-`       |
| className   | 节点类名             | string \| string[]   | `-`       |
| headerStyle | 自定义标题区域样式   | CSSProperties        | `-`       |
| style       | 节点样式             | CSSProperties        | `-`       |

### Card.Meta

| 参数名      | 描述     | 类型                | 默认值 |
| ----------- | -------- | ------------------- | ------ |
| avatar      | 头像     | ReactNode           | `-`    |
| description | 描述     | string \| ReactNode | `-`    |
| title       | 标题     | string \| ReactNode | `-`    |
| className   | 节点类名 | string \| string[]  | `-`    |
| style       | 节点样式 | CSSProperties       | `-`    |

### Card.Grid

| 参数名    | 描述         | 类型               | 默认值 |
| --------- | ------------ | ------------------ | ------ |
| hoverable | 是否可以悬浮 | boolean            | `-`    |
| className | 节点类名     | string \| string[] | `-`    |
| style     | 节点样式     | CSSProperties      | `-`    |
