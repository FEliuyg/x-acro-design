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
      <Button size="mini">按钮</Button>
      <Button size="small">按钮</Button>
      <Button>按钮</Button>
      <Button size="large">按钮</Button>
    </Space>
  );
};
```
