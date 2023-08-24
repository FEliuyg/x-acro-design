# 时间轴 Timeline

按照时间顺序或倒序规则的展示信息内容。

## 基础用法

基本用法

```tsx
import React from 'react';
import { Switch, Timeline, Typography } from '@xiaoyaoliu/x-arco-design';

const TimelineItem = Timeline.Item;

class App extends React.Component {
  state = {
    reverse: false,
  };

  render() {
    const { reverse } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 40 }}>
          <Typography.Text style={{ verticalAlign: 'middle', marginRight: 8 }}>
            Reverse
          </Typography.Text>
          <Switch
            style={{ verticalAlign: 'middle' }}
            size="small"
            checked={reverse}
            onChange={() => {
              this.setState({
                reverse: !this.state.reverse,
              });
            }}
          />
        </div>
        <Timeline reverse={this.state.reverse}>
          <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
          <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
          <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default App;
```

## 自定义节点内容

自定义节点内容

```tsx
import { Timeline } from '@xiaoyaoliu/x-arco-design';
import { ExclamationCircleFilled } from '@easyv/react-icons';
const TimelineItem = Timeline.Item;

const App = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem label="2017-03-10" dotColor="#00B42A">
          The first milestone
        </TimelineItem>
        <TimelineItem label="2018-05-22">The second milestone</TimelineItem>
        <TimelineItem label="2020-06-22" dotColor="#F53F3F">
          The third milestone
          <ExclamationCircleFilled
            style={{
              color: 'F53F3F',
              fontSize: 12,
              marginLeft: 4,
            }}
          />
        </TimelineItem>
        <TimelineItem label="2020-09-30" dotColor="#C9CDD4">
          The fourth milestone
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default App;
```

## 自定义节点

可以通过属性 `dotColor`, `dotType` 设置节点的颜色以及节点类型。同时可通过 `dot` 直接传入 `ReactNode`自定义节点样式。优先级高于 `dotColor` 和 `dotType`

`dotColor`, `dotType`. At the same time, you can directly pass in `ReactNode` to customize node styles through `dot`. Priority is higher than `dotColor` and `dotType`

```tsx
import { Timeline, Space } from '@xiaoyaoliu/x-arco-design';
import { ClockCircleOutlined, CheckOutlined } from '@easyv/react-icons';
const TimelineItem = Timeline.Item;

const App = () => {
  return (
    <Space size={40}>
      <Timeline>
        <TimelineItem label="2020-04-12" dotColor="#00B42A">
          The first milestone
        </TimelineItem>
        <TimelineItem label="2020-05-17">The second milestone</TimelineItem>
        <TimelineItem
          label="2020-06-22"
          dot={
            <ClockCircleOutlined style={{ fontSize: 12, color: '#F53F3F' }} />
          }
        >
          The third milestone
        </TimelineItem>
        <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
          The third milestone
        </TimelineItem>
      </Timeline>

      <Timeline>
        <TimelineItem
          label="2020-04-12"
          dot={
            <CheckOutlined
              style={{
                fontSize: 12,
                padding: 2,
                boxSizing: 'border-box',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-light-1)',
              }}
            />
          }
        >
          The first milestone
        </TimelineItem>
        <TimelineItem
          label="2020-05-17"
          dot={
            <CheckOutlined
              style={{
                fontSize: 12,
                padding: 2,
                boxSizing: 'border-box',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-light-1)',
              }}
            />
          }
        >
          The second milestone
        </TimelineItem>
        <TimelineItem label="2020-06-22">The third milestone</TimelineItem>
        <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
          The third milestone
        </TimelineItem>
      </Timeline>

      <Timeline>
        <TimelineItem label="2020-04-12">The first milestone</TimelineItem>
        <TimelineItem label="2020-05-17" dotColor="var(--color-fill-4)">
          The second milestone
        </TimelineItem>
        <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
          The third milestone
        </TimelineItem>
      </Timeline>
    </Space>
  );
};

export default App;
```

## 自定义轴线样式

自定义轴线的示例。

```tsx
import { Timeline, Typography } from '@xiaoyaoliu/x-arco-design';
const TimelineItem = Timeline.Item;

const App = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem label="2017-03-10" lineType="dashed">
          The first milestone
          <br />
          <Typography.Text
            type="secondary"
            style={{
              fontSize: 12,
              marginTop: 4,
            }}
          >
            This is a descriptive message
          </Typography.Text>
        </TimelineItem>
        <TimelineItem label="2018-05-12" lineType="dashed">
          The second milestone
          <br />
          <Typography.Text
            type="secondary"
            style={{
              fontSize: 12,
              marginTop: 4,
            }}
          >
            This is a descriptive message
          </Typography.Text>
        </TimelineItem>
        <TimelineItem label="2020-09-30" lineType="dashed">
          The third milestone
          <br />
          <Typography.Text
            type="secondary"
            style={{
              fontSize: 12,
              marginTop: 4,
            }}
          >
            This is a descriptive message
          </Typography.Text>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default App;
```

## 幽灵节点

当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，通过`pendingDot`定制其轴点。

```tsx
import React from 'react';
import { Timeline, Grid, Checkbox } from '@xiaoyaoliu/x-arco-design';
import { FireOutlined } from '@easyv/react-icons';

const TimelineItem = Timeline.Item;
const { Row } = Grid;

function App() {
  const [pendingProps, setPendingProps] = React.useState<{
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    pending?: string | boolean;
    pendingDot?: React.ReactNode;
  }>({});
  return (
    <div>
      <Row align="center" style={{ marginBottom: 24 }}>
        <Checkbox
          checked={!!pendingProps.direction}
          onChange={(v) => {
            setPendingProps({
              ...pendingProps,
              direction: v ? 'horizontal' : 'vertical',
            });
          }}
        >
          horizontal &nbsp; &nbsp;
        </Checkbox>

        <Checkbox
          checked={!!pendingProps.reverse}
          onChange={(v) => {
            setPendingProps({ ...pendingProps, reverse: v });
          }}
        >
          reverse &nbsp; &nbsp;
        </Checkbox>

        <Checkbox
          checked={!!pendingProps.pending}
          onChange={(v) => {
            setPendingProps({
              ...pendingProps,
              pending: v ? 'This is a pending dot' : false,
            });
          }}
        >
          pending &nbsp; &nbsp;
        </Checkbox>

        <Checkbox
          checked={!!pendingProps.pendingDot}
          onChange={(v) => {
            const newProps = { ...pendingProps };
            delete newProps.pendingDot;

            if (v) {
              newProps.pendingDot = (
                <FireOutlined
                  style={{
                    color: '#e70a0a',
                  }}
                />
              );
            }

            setPendingProps(newProps);
          }}
        >
          custom pendingDot
        </Checkbox>
      </Row>
      <Timeline pending {...pendingProps}>
        <TimelineItem label="2017-03-10" dotColor="#52C419">
          The first milestone
        </TimelineItem>
        <TimelineItem label="2018-05-12" dotColor="#F5222D">
          The second milestone
        </TimelineItem>
        <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
```

## 时间轴展示类型

设置 `mode=alternate`时将会交替展示内容。同时可以通过设置 `TimelineItem` 的 `positon`属性控制时间轴节点的位置.

```tsx
import { Timeline, Grid } from '@xiaoyaoliu/x-arco-design';
const TimelineItem = Timeline.Item;

function Demo({ mode }) {
  return (
    <Timeline mode={mode} style={{ flex: 1 }}>
      <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
      <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
      <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
    </Timeline>
  );
}

const App = () => {
  return (
    <Grid.Row justify="space-between">
      <Demo mode="alternate" />
      <Demo mode="right" />
    </Grid.Row>
  );
};

export default App;
```

## 纵向时间轴

竖直方向的时间轴。

```tsx
import React from 'react';
import { Timeline, Grid, Radio, Typography } from '@xiaoyaoliu/x-arco-design';

const TimelineItem = Timeline.Item;
const { Row } = Grid;

const imageStyle = {
  margin: '0 12px 12px 12px',
};

function App() {
  const [mode, setMode] = React.useState<'left' | 'right' | 'alternate'>(
    'left',
  );
  return (
    <div>
      <Row align="center" style={{ marginBottom: 24 }}>
        <Typography.Text>mode: &nbsp; &nbsp;</Typography.Text>
        <Radio.Group
          value={mode}
          onChange={setMode}
          options={[
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'alternate',
              value: 'alternate',
            },
          ]}
        />
      </Row>
      <Timeline mode={mode} labelPosition="relative">
        <TimelineItem label="2012-08">
          <Row style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              width="40"
              style={imageStyle}
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"
            />
            <div style={{ marginBottom: 12 }}>
              Toutiao
              <div style={{ fontSize: 12, color: '#4E5969' }}>
                Founded in 2012
              </div>
            </div>
          </Row>
        </TimelineItem>
        <TimelineItem label="2017-05">
          <Row style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              width="40"
              style={imageStyle}
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
            />
            <div style={{ marginBottom: 12 }}>
              Xigua Video
              <div style={{ fontSize: 12, color: '#4E5969' }}>
                Founded in 2017
              </div>
            </div>
          </Row>
        </TimelineItem>
        <TimelineItem label="2018-07">
          <Row style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              width="40"
              style={imageStyle}
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/73a34d47f2885cf5182d755aa0c8a7d4.png~tplv-uwbnlip3yd-png.png"
            />
            <div style={{ marginBottom: 12 }}>
              Pipidance
              <div
                style={{
                  fontSize: 12,
                  color: '#4E5969',
                }}
              >
                Founded in 2018
              </div>
            </div>
          </Row>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
```

## 横向时间轴

可以通过 `direction` 设置展示横向时间轴

```tsx
import React from 'react';
import { Timeline, Grid, Radio, Typography } from '@xiaoyaoliu/x-arco-design';

const TimelineItem = Timeline.Item;
const { Row } = Grid;

const imageStyle = {
  margin: '0 12px 12px 12px',
};

function App() {
  const [mode, setMode] = React.useState<'top' | 'bottom' | 'alternate'>('top');
  return (
    <div>
      <Row align="center" style={{ marginBottom: 24 }}>
        <Typography.Text>mode: &nbsp; &nbsp;</Typography.Text>
        <Radio.Group
          value={mode}
          onChange={setMode}
          options={[
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
            {
              label: 'alternate',
              value: 'alternate',
            },
          ]}
        />
      </Row>
      <Timeline direction="horizontal" mode={mode} pending>
        <TimelineItem>
          <Row align="center">
            <img
              width="40"
              style={imageStyle}
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"
            />
            <div style={{ marginBottom: 12 }}>
              Toutiao
              <div style={{ fontSize: 12, color: '#4E5969' }}>
                Founded in 2012
              </div>
            </div>
          </Row>
        </TimelineItem>
        <TimelineItem>
          <Row align="center">
            <img
              width="40"
              style={imageStyle}
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png"
            />
            <div style={{ marginBottom: 12 }}>
              Xigua Video
              <div style={{ fontSize: 12, color: '#4E5969' }}>
                Founded in 2017
              </div>
            </div>
          </Row>
        </TimelineItem>
        <TimelineItem>
          <Row align="center">
            <img
              width="40"
              style={imageStyle}
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/73a34d47f2885cf5182d755aa0c8a7d4.png~tplv-uwbnlip3yd-png.png"
            />
            <div style={{ marginBottom: 12 }}>
              Pipidance
              <div style={{ fontSize: 12, color: '#4E5969' }}>
                Founded in 2018
              </div>
            </div>
          </Row>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
```

## 标签文本位置

通过 `labelPosition` 可以设置标签文本的位置。

```tsx
import React from 'react';
import { Timeline, Grid, Radio, Typography } from '@xiaoyaoliu/x-arco-design';

const TimelineItem = Timeline.Item;
const { Row, Col } = Grid;

function App() {
  const [mode, setMode] = React.useState<'left' | 'right' | 'alternate'>(
    'left',
  );
  const [pos, setLabelPos] = React.useState<'same' | 'relative'>('same');
  return (
    <div>
      <Row align="center">
        <Typography.Text>labelPosition: &nbsp; &nbsp;</Typography.Text>
        <Radio.Group
          value={pos}
          onChange={setLabelPos}
          options={[
            {
              label: 'same',
              value: 'same',
            },
            {
              label: 'relative',
              value: 'relative',
            },
          ]}
        />
      </Row>
      <Row align="center" style={{ margin: '20px 0 24px' }}>
        <Typography.Text>mode: &nbsp; &nbsp;</Typography.Text>
        <Radio.Group
          value={mode}
          onChange={setMode}
          options={[
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'alternate',
              value: 'alternate',
            },
          ]}
        />
      </Row>
      <Timeline mode={mode} labelPosition={pos}>
        <TimelineItem label="2017-03-10" dotColor="#52C419">
          The first milestone
        </TimelineItem>
        <TimelineItem
          label="2018-05-12"
          dotColor="#F5222D"
          labelPosition="same"
        >
          The second milestone
        </TimelineItem>
        <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
```

## API

**注意: 非 `Timeline.Item` 组件将会被过滤掉，不会被展示**

### Timeline

| 参数名        | 描述                                                                                      | 类型                                                  | 默认值                              |
| ------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------- |
| reverse       | 是否倒序                                                                                  | boolean                                               | `-`                                 |
| direction     | 时间轴方向                                                                                | 'horizontal' \| 'vertical'                            | `vertical`                          |
| labelPosition | 设置标签文本的位置                                                                        | 'relative' \| 'same'                                  | `same`                              |
| mode          | 时间轴的展示类型：时间轴在左侧/右侧(垂直方向)、上方/下方（水平方向），或交替出现。        | 'left' \| 'right' \| 'top' \| 'bottom' \| 'alternate' | `left(vertical) \| top(horizontal)` |
| pending       | 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入 ReactNode 时，会作为节点内容展示。 | boolean \| ReactNode                                  | `-`                                 |
| pendingDot    | 可以传入 ReactNode 定制幽灵节点                                                           | ReactNode                                             | `<Spin size={12} />`                |
| className     | 节点类名                                                                                  | string \| string[]                                    | `-`                                 |
| style         | 节点样式                                                                                  | CSSProperties                                         | `-`                                 |

### Timeline.Item

| 参数名         | 描述                                                      | 类型                            | 默认值  |
| -------------- | --------------------------------------------------------- | ------------------------------- | ------- |
| autoFixDotSize | 是否自动适配自定义节点尺寸到 16px                         | boolean                         | `true`  |
| dotColor       | 节点颜色                                                  | string                          | `-`     |
| lineColor      | 时间轴颜色                                                | string                          | `-`     |
| dotType        | 节点类型：空心圆/实心圆                                   | 'hollow' \| 'solid'             | `solid` |
| labelPosition  | 时间轴节点的位置。 在时间轴组件 `mode=alternate` 时候生效 | 'relative' \| 'same'            | `-`     |
| lineType       | 时间轴类型：实线/虚线/点状线                              | 'solid' \| 'dashed' \| 'dotted' | `solid` |
| dot            | 自定义节点                                                | string \| ReactNode             | `-`     |
| label          | 标签文本                                                  | string \| ReactNode             | `-`     |
| className      | 节点类名                                                  | string \| string[]              | `-`     |
| style          | 节点样式                                                  | CSSProperties                   | `-`     |
