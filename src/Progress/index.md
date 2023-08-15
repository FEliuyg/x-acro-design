# 进度条 Progress

给予用户当前系统执行中任务运行状态的反馈，多用于运行一段时间的场景，有效减轻用户在等待中产生的焦虑感。

## 基本用法

简单的进度条。

```tsx
import { Progress } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Progress percent={30} width="40%" />
    </div>
  );
};

export default App;
```

## 进度条状态

可以通过设置 `status` 使进度条显示内置的状态样式。`color` 属性用于设置进度条的颜色，优先级高于 `status`。

`showText` 属性设置为 `false` 时，将不会展示文本。

```tsx
import React from 'react';
import { Progress, Slider, Space } from '@xiaoyaoliu/x-arco-design';

function Demo() {
  const [value, setValue] = React.useState(30);
  return (
    <div>
      <Space size={20}>
        <div style={{ width: '300px' }}>
          <Progress
            percent={value}
            color="#C9CDD4"
            formatText={() => 'Waiting...'}
            style={{ marginBottom: 20 }}
          />
          <br />
          <Progress
            percent={value}
            status="warning"
            formatText={(val) => `${val} / 100`}
            style={{ marginBottom: 20 }}
          />
          <br />
          <Progress percent={value} buffer />
        </div>
        <div style={{ width: '300px' }}>
          <Progress
            percent={value}
            status="error"
            style={{ marginBottom: 20 }}
          />
          <br />
          <Progress
            percent={value}
            status="success"
            style={{ marginBottom: 20 }}
          />
          <br />
          <Progress percent={value} showText={false} />
        </div>
      </Space>
      <div style={{ marginTop: 40 }}>
        <Slider
          value={value}
          onChange={(value) => {
            if (typeof value === 'number') {
              setValue(value);
            }
          }}
          style={{ width: 100 }}
        ></Slider>
      </div>
    </div>
  );
}

const App = () => {
  return <Demo />;
};

export default App;
```

## 环形进度条

`type = circle` 时候，将会展示环形进度条。

```tsx
import React from 'react';
import { Progress, Slider } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [value, setValue] = React.useState(20);
  return (
    <div>
      <Progress type="circle" percent={value} style={{ marginRight: 80 }} />
      <Progress
        type="circle"
        percent={value}
        status="warning"
        style={{ marginRight: 80 }}
      />
      <Progress
        type="circle"
        percent={value}
        status="error"
        style={{ marginRight: 80 }}
      />
      <Progress
        type="circle"
        percent={value}
        status="success"
        style={{ marginRight: 80 }}
      />
      <div style={{ marginTop: 40 }}>
        <Slider
          value={value}
          onChange={(value) => {
            if (typeof value === 'number') {
              setValue(value);
            }
          }}
          style={{ width: 100 }}
        ></Slider>
      </div>
    </div>
  );
}

export default App;
```

## 微型进度条

`size = mini` 时，将会展示微型进度条。

```tsx
import { Progress, Slider } from '@xiaoyaoliu/x-arco-design';

function Demo() {
  return (
    <div>
      <div>
        <Progress
          size="mini"
          percent={0}
          style={{
            marginRight: 80,
          }}
        />
        <Progress
          size="mini"
          percent={40}
          style={{
            marginRight: 80,
          }}
        />
        <Progress
          size="mini"
          percent={70}
          status="error"
          style={{
            marginRight: 80,
          }}
        />
        <Progress
          size="mini"
          percent={100}
          status="success"
          style={{
            marginRight: 80,
          }}
        />
      </div>
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Progress
          size="mini"
          type="circle"
          percent={0}
          style={{
            marginRight: 80,
          }}
        />
        <Progress
          size="mini"
          type="circle"
          percent={40}
          style={{
            marginRight: 80,
          }}
        />
        <Progress
          size="mini"
          type="circle"
          percent={70}
          status="error"
          style={{
            marginRight: 80,
          }}
        />
        <Progress
          size="mini"
          type="circle"
          percent={100}
          status="success"
          style={{
            marginRight: 80,
          }}
        />
      </div>
    </div>
  );
}

const App = () => {
  return <Demo />;
};

export default App;
```

## 不同尺寸

设置`size`为 `small`、`default`、`large`，可设置小、中、大三种尺寸。

```tsx
import React from 'react';
import {
  Progress,
  Slider,
  Grid,
  Radio,
  Typography,
} from '@xiaoyaoliu/x-arco-design';
import type { ProgressProps } from '@xiaoyaoliu/x-arco-design';

const Row = Grid.Row;
const Col = Grid.Col;

function Demo() {
  const [value, setValue] = React.useState(90);
  const [size, setSize] = React.useState<ProgressProps['size']>('default');

  return (
    <div>
      <Row align="center" style={{ marginBottom: 44 }}>
        <Typography.Text>Size: &nbsp; &nbsp;</Typography.Text>
        <Radio.Group
          options={['small', 'default', 'large']}
          value={size}
          onChange={setSize}
        />
      </Row>
      <Row gutter={44} style={{ marginBottom: 44 }}>
        <Col span={7}>
          <div>
            <Progress
              color="#C9CDD4"
              percent={value}
              size={size}
              formatText={() => 'waiting...'}
              style={{
                marginBottom: 44,
              }}
            />
          </div>
          <div>
            <Progress percent={value} size={size} status="error" />
          </div>
        </Col>
        <Col span={7}>
          <div>
            <Progress
              percent={value}
              size={size}
              style={{
                marginBottom: 44,
              }}
            />
          </div>
          <div>
            <Progress percent={value} size={size} status="success" />
          </div>
        </Col>
      </Row>
      <Row>
        <Progress
          type="circle"
          size={size}
          percent={value}
          style={{
            margin: '0 20px',
          }}
        />
        <Progress
          type="circle"
          size={size}
          percent={value}
          status="error"
          style={{
            margin: '0 20px',
          }}
        />
        <Progress
          type="circle"
          size={size}
          percent={value}
          status="success"
          style={{
            margin: '0 20px',
          }}
        />
      </Row>
      <div style={{ width: 100, marginTop: 44 }}>
        <Slider
          value={value}
          onChange={(value) => {
            if (typeof value === 'number') {
              setValue(value);
            }
          }}
        ></Slider>
      </div>
    </div>
  );
}

const App = () => {
  return <Demo />;
};

export default App;
```

## 动画效果

设置 `animation` 为 `true` 时，将会显示动画效果，仅当 `type = line` 时生效

```tsx
import { Progress } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Progress percent={80} animation width={300} />
      <br />
      <br />
      <Progress percent={80} status="success" animation width={300} />
    </div>
  );
};

export default App;
```

## 渐变色进度条

`color`传入对象时， 会作为 linear-gradient 的属性值设置渐变色。

```tsx
import { Progress } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <div>
      <Progress
        percent={80}
        color={{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }}
        animation
        width={300}
      />
      <br />
      <Progress
        percent={100}
        color={{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }}
        animation
        width={300}
      />
      <br />
      <br />
      <Progress
        style={{
          margin: '0 20px',
        }}
        type="circle"
        color={{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }}
        percent={80}
      />
      <Progress
        type="circle"
        color={{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }}
        percent={100}
      />
    </div>
  );
};

export default App;
```

## 步骤进度条

可以通过设置 `steps` 展示步骤进度条

```tsx
import { Progress } from '@xiaoyaoliu/x-arco-design';

function Demo() {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '40%',
        marginRight: '10%',
      }}
    >
      <Progress steps={3} percent={30} style={{ marginBottom: 20 }} />
      <Progress
        steps={5}
        percent={100}
        status="warning"
        style={{ marginBottom: 20 }}
      />
      <Progress steps={5} size="small" percent={50} status="success" />
    </div>
  );
}

const App = () => {
  return <Demo />;
};

export default App;
```

## 剩余进度条

可以通过 `trailColor` 设置剩余进度条的颜色

```tsx
import { Progress } from '@xiaoyaoliu/x-arco-design';

function Demo() {
  return (
    <div>
      <div style={{ width: '40%', marginBottom: 20 }}>
        <Progress percent={30} trailColor="var(--color-primary-light-1)" />
      </div>
      <div style={{ width: '40%', marginBottom: 20 }}>
        <Progress
          steps={4}
          percent={30}
          trailColor="var(--color-primary-light-1)"
        />
      </div>
      <Progress
        percent={30}
        type="circle"
        trailColor="var(--color-primary-light-1)"
      />
    </div>
  );
}

const App = () => {
  return <Demo />;
};

export default App;
```

## API

### Progress

| 参数名      | 描述                                                                  | 类型                                          | 默认值    | 版本   |
| ----------- | --------------------------------------------------------------------- | --------------------------------------------- | --------- | ------ |
| animation   | 动画效果，仅在 `type=line` 时可用                                     | boolean                                       | `-`       | -      |
| buffer      | 加载中的进度条是否显示缓冲区。仅对 `type=line` 且加载中的进度条有效。 | boolean                                       | `-`       | -      |
| showText    | 是否展示文本                                                          | boolean                                       | `true`    | -      |
| percent     | 百分比                                                                | number **(必填)**                             | `0`       | -      |
| steps       | 显示步骤进度条                                                        | number                                        | `-`       | 2.10.0 |
| strokeWidth | 进度条线的宽度                                                        | number                                        | `-`       | -      |
| trailColor  | 剩余进度条颜色。                                                      | string                                        | `-`       | -      |
| size        | 不同尺寸的进度条                                                      | 'small' \| 'default' \| 'mini' \| 'large'     | `default` | -      |
| status      | 进度条状态                                                            | 'success' \| 'error' \| 'normal' \| 'warning' | `-`       | 2.16.0 |
| type        | 进度条类型                                                            | 'line' \| 'circle'                            | `line`    | -      |
| bufferColor | 缓冲区的颜色                                                          | string \| object                              | `-`       | -      |
| className   | 节点类名                                                              | string \| string[]                            | `-`       | -      |
| color       | 进度条颜色，优先级高于 `status`。传入对象时，会显示渐变色进度条。     | string \| { [key: string]: string }           | `-`       | 2.10.0 |
| style       | 节点样式                                                              | CSSProperties                                 | `-`       | -      |
| width       | 进度条的宽度。`circle` 类型的进度条仅支持数字类型的`width`            | string \| number                              | `-`       | -      |
| formatText  | 进度条文本函数                                                        | (percent: number) => ReactNode                | `-`       | -      |
