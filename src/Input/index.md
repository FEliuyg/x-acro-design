# Input 输入框

## 基本用法

```tsx
import React from 'react';
import { Input } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Input
      style={{ width: 350 }}
      allowClear
      placeholder="Please Enter something"
    />
  );
};

export default App;
```

## 状态

```tsx
import React from 'react';
import { Input, Space } from '@xiaoyaoliu/x-arco-design';
import { UserOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          status="error"
          placeholder="error status"
        />
        <Input
          style={{ width: 350 }}
          status="warning"
          placeholder="warning status"
        />
        <Input style={{ width: 350 }} disabled placeholder="disabled input" />
      </Space>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<UserOutlined />}
          status="error"
          placeholder="error status"
        />
        <Input
          style={{ width: 350 }}
          status="warning"
          prefix={<UserOutlined />}
          placeholder="warning status"
        />
        <Input
          style={{ width: 350 }}
          prefix={<UserOutlined />}
          disabled
          placeholder="disabled input"
        />
      </Space>
    </>
  );
};

export default App;
```

## 前置、后置标签

```tsx
import React from 'react';
import { Input, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Input
          style={{ width: 350 }}
          addAfter="RMB"
          placeholder="Please enter"
        />
        <Input
          style={{ width: 350 }}
          addBefore="+86"
          placeholder="Please enter"
        />
      </Space>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          addBefore="http://"
          addAfter=".com"
          allowClear
          placeholder="Please enter"
        />
        <Input
          style={{ width: 350 }}
          addBefore="www."
          addAfter=".com"
          placeholder="Please enter"
        />
      </Space>
    </Space>
  );
};

export default App;
```

## 前后缀

```tsx
import React from 'react';
import { Input, Space } from '@arco-design/web-react';
import {
  UserOutlined,
  InfoCircleOutlined,
  SearchOutlined,
} from '@easyv/react-icons';

const App = () => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<UserOutlined />}
          placeholder="Please enter"
        />
        <Input
          allowClear
          style={{ width: 350 }}
          suffix={<InfoCircleOutlined />}
          placeholder="Please enter"
        />
      </Space>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<UserOutlined />}
          suffix={<InfoCircleOutlined />}
          placeholder="Please enter"
        />
        <Input
          style={{ width: 350 }}
          addBefore="+86"
          addAfter={<SearchOutlined />}
          prefix={<UserOutlined />}
          suffix={<InfoCircleOutlined />}
          allowClear
          placeholder="Please enter"
        />
      </Space>
    </Space>
  );
};

export default App;
```

## 搜索框

```tsx
import React from 'react';
import { Input } from '@arco-design/web-react';
import { SearchOutlined } from '@easyv/react-icons';

function App() {
  return (
    <Input
      style={{ width: 350 }}
      prefix={<SearchOutlined />}
      allowClear
      placeholder="Please enter"
    />
  );
}

export default App;
```

## 大小

```tsx
import React from 'react';
import { Space, Input } from '@xiaoyaoliu/x-arco-design';
import { SearchOutlined } from '@easyv/react-icons';

const App = () => {
  return (
    <Space direction="vertical">
      <Input
        size="large"
        style={{ width: 350 }}
        allowClear
        placeholder="Please Enter something"
      />
      <Input
        style={{ width: 350 }}
        allowClear
        placeholder="Please Enter something"
      />
      <Input
        size="small"
        style={{ width: 350 }}
        allowClear
        placeholder="Please Enter something"
      />
      <Input
        size="mini"
        style={{ width: 350 }}
        allowClear
        placeholder="Please Enter something"
      />
      <Input
        size="large"
        style={{ width: 350 }}
        prefix={<SearchOutlined />}
        allowClear
        placeholder="Please enter"
      />
      <Input
        style={{ width: 350 }}
        prefix={<SearchOutlined />}
        allowClear
        placeholder="Please enter"
      />
      <Input
        size="small"
        style={{ width: 350 }}
        prefix={<SearchOutlined />}
        allowClear
        placeholder="Please enter"
      />
      <Input
        size="mini"
        style={{ width: 350 }}
        prefix={<SearchOutlined />}
        allowClear
        placeholder="Please enter"
      />
    </Space>
  );
};

export default App;
```

## 密码输入

```tsx
import React from 'react';
import { Input, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space wrap>
      <Input.Password defaultValue="password" style={{ width: 350 }} />
      <Input.Password
        defaultValue="password"
        defaultVisibility={true}
        placeholder="Please enter ..."
        style={{ width: 350 }}
      />
    </Space>
  );
};

export default App;
```

## 文本域

```tsx
import React from 'react';
import { Input, Space } from '@xiaoyaoliu/x-arco-design';
const TextArea = Input.TextArea;

const App = () => {
  return (
    <Space wrap>
      <TextArea
        placeholder="Please enter ..."
        style={{ minHeight: 64, width: 350 }}
      />
      <TextArea
        defaultValue="Disabled"
        style={{ minHeight: 64, width: 350 }}
        disabled
      />
    </Space>
  );
};

export default App;
```
