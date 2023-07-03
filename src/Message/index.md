# Message 全局提示

## 基础用法

```tsx
import React from 'react';
import { Space, Message, Button, message } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space>
      <Button
        onClick={() => {
          Message.info('This is an info message!');
        }}
        type="primary"
      >
        Open Message
      </Button>
      <Button
        onClick={() => {
          // 兼容 antd
          message.info('This is an info message!');
        }}
        type="primary"
      >
        Open Message
      </Button>
    </Space>
  );
};

export default App;
```

## 不同类型

```tsx
import React from 'react';
import { Message, Button, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large">
      <Button
        onClick={() => Message.info('This is an info message!')}
        type="primary"
      >
        Info
      </Button>
      <Button
        onClick={() => Message.success('This is an success message!')}
        type="primary"
        status="success"
      >
        Success
      </Button>
      <Button
        onClick={() => Message.warning('This is an warning message!')}
        type="primary"
        status="warning"
      >
        Warning
      </Button>
      <Button
        onClick={() => Message.error('This is an error message!')}
        type="primary"
        status="danger"
      >
        Error
      </Button>
      <Button
        type="secondary"
        onClick={() => Message.normal('This is a message!')}
      >
        Normal
      </Button>
      <Button
        type="secondary"
        onClick={() => Message.loading('This is an loading message!')}
      >
        Loading
      </Button>
    </Space>
  );
};

export default App;
```

## 显示关闭按钮

```tsx
import React from 'react';
import { Message, Button } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Button
      onClick={() => {
        Message.info({
          content: 'This is a message!',
          closable: true,
          duration: 10000,
        });
      }}
      type="primary"
    >
      Open Message
    </Button>
  );
};

export default App;
```
