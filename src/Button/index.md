# Button 按钮

## 类型

```tsx
import React from 'react';
import { Button, Space } from '@xiaoyaoliu/x-arco-design';

function App() {
  return (
    <Space>
      <Button type="primary">按钮</Button>
      <Button>按钮</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </Space>
  );
}

export default App;
```

## 大小

```tsx
import React from 'react';
import { Button, Space } from '@xiaoyaoliu/x-arco-design';

export default () => {
  return (
    <Space>
      <Button type="primary" size="mini">
        按钮
      </Button>
      <Button type="primary" size="small">
        按钮
      </Button>
      <Button type="primary">按钮</Button>
      <Button type="primary" size="large">
        按钮
      </Button>
    </Space>
  );
};
```

## 图标按钮

```tsx
import React from 'react';
import { Button, Space } from '@xiaoyaoliu/x-arco-design';
import { PlusOutlined, DeleteOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <Space size="large">
      <Button type="primary" icon={<PlusOutlined />} />
      <Button type="primary" icon={<DeleteOutlined />}>
        Delete
      </Button>
    </Space>
  );
};

export default App;
```

## 按钮形状

```tsx
import React from 'react';
import { Button, Space } from '@xiaoyaoliu/x-arco-design';
import { PlusOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <Space size="large">
      <Button type="primary" icon={<PlusOutlined />} />
      <Button shape="circle" type="primary" icon={<PlusOutlined />} />
      <Button shape="round" type="primary">
        Primary
      </Button>
      <Button type="primary">Primary</Button>
    </Space>
  );
};

export default App;
```

## 禁用状态

```tsx
import React from 'react';
import { Button, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Button disabled type="primary">
          Primary
        </Button>
        <Button disabled type="secondary">
          Secondary
        </Button>
        <Button disabled type="dashed">
          Dashed
        </Button>
        <Button disabled type="outline">
          Outline
        </Button>
        <Button disabled type="text">
          Text
        </Button>
      </Space>
      <Space size="large">
        <Button disabled type="primary" status="danger">
          Primary
        </Button>
        <Button disabled type="secondary" status="danger">
          Secondary
        </Button>
        <Button disabled type="dashed" status="danger">
          Dashed
        </Button>
        <Button disabled type="outline" status="danger">
          Outline
        </Button>
        <Button disabled type="text" status="danger">
          Text
        </Button>
      </Space>
      <Space size="large">
        <Button disabled type="primary" status="warning">
          Primary
        </Button>
        <Button disabled type="secondary" status="warning">
          Secondary
        </Button>
        <Button disabled type="dashed" status="warning">
          Dashed
        </Button>
        <Button disabled type="outline" status="warning">
          Outline
        </Button>
        <Button disabled type="text" status="warning">
          Text
        </Button>
      </Space>
      <Space size="large">
        <Button disabled type="primary" status="success">
          Primary
        </Button>
        <Button disabled type="secondary" status="success">
          Secondary
        </Button>
        <Button disabled type="dashed" status="success">
          Dashed
        </Button>
        <Button disabled type="outline" status="success">
          Outline
        </Button>
        <Button disabled type="text" status="success">
          Text
        </Button>
      </Space>
    </Space>
  );
};

export default App;
```

## 加载中

```tsx
import React, { useState } from 'react';
import { Button, Divider } from '@xiaoyaoliu/x-arco-design';
import { PlusOutlined } from '@easyv/react-icons';

function App() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  function onClickBtn1() {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 4000);
  }

  function onClickBtn2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }

  function onClickBtn3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 4000);
  }

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 100px)',
          rowGap: 24,
          columnGap: 24,
          marginLeft: 24,
        }}
      >
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="secondary" loading>
          Loading
        </Button>
        <Button type="dashed" loading>
          Loading
        </Button>
        <Button type="primary" shape="circle" loading />
        <Button type="secondary" shape="circle" loading />
        <Button type="dashed" shape="circle" loading />
      </div>
      <Button
        type="primary"
        loading={loading1}
        onClick={onClickBtn1}
        style={{ margin: 24 }}
      >
        Click Me
      </Button>
      <Button
        type="primary"
        loading={loading2}
        onClick={onClickBtn2}
        style={{ margin: 24 }}
      >
        {!loading2 && <PlusOutlined />}Click Me
      </Button>
      <Divider style={{ width: 440, minWidth: 440 }}>
        loading fixed width
      </Divider>
      <Button
        type="primary"
        loadingFixedWidth
        loading={loading3}
        onClick={onClickBtn3}
        style={{ margin: 24 }}
      >
        Search
      </Button>
    </div>
  );
}

export default App;
```

## 长按钮

```tsx
import React from 'react';
import { Button, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space
      style={{
        width: 360,
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: 20,
      }}
      direction="vertical"
      size="large"
    >
      <Button type="primary" long>
        Primary
      </Button>
      <Button type="secondary" long>
        Secondary
      </Button>
      <Button type="dashed" long>
        Dashed
      </Button>
      <Button type="default" long>
        Default
      </Button>
      <Button type="text" long>
        Text
      </Button>
    </Space>
  );
};

export default App;
```

## 组合按钮

```tsx
import React from 'react';
import { Button, Space } from '@arco-design/web-react';
import {
  LeftOutlined,
  RightOutlined,
  MoreOutlined,
  StarOutlined,
  SettingOutlined,
  MessageOutlined,
  DownOutlined,
} from '@easyv/react-icons';
const ButtonGroup = Button.Group;

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <ButtonGroup>
          <Button>Publish</Button>
          <Button icon={<DownOutlined />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="secondary">Publish</Button>
          <Button type="secondary" icon={<MoreOutlined />} />
        </ButtonGroup>
      </Space>
      <ButtonGroup>
        <Button type="primary">Publish</Button>
        <Button type="primary" icon={<DownOutlined />} />
      </ButtonGroup>
      <Space size="large">
        <ButtonGroup>
          <Button
            type="primary"
            icon={<LeftOutlined />}
            shape="round"
            style={{ padding: '0 8px' }}
          >
            Prev
          </Button>
          <Button type="primary" shape="round" style={{ padding: '0 8px' }}>
            Next
            <RightOutlined />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<StarOutlined />} />
          <Button type="primary" icon={<MessageOutlined />} />
          <Button type="primary" icon={<SettingOutlined />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<StarOutlined />}>
            Favorite
          </Button>
          <Button type="primary" icon={<SettingOutlined />}>
            Setting
          </Button>
        </ButtonGroup>
      </Space>
    </Space>
  );
};

export default App;
```
