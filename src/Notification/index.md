# 通知提醒框 Notification

全局展示通知提醒，将信息及时有效的传达给用户。

## 基础用法

最简单的例子。

```tsx
import { Notification, Button } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Button
      onClick={() =>
        Notification.info({
          closable: false,
          title: 'Notification',
          content: 'This is a notification!',
        })
      }
      type="primary"
    >
      Open Notification
    </Button>
  );
};

export default App;
```

## 不同类型的通知

通知提醒框有 5 种不同的类型，分别为：`info`, `success`, `warning`, `error`, `normal`。

```tsx
import { Notification, Button, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large">
      <Button
        onClick={() =>
          Notification.info({
            title: 'Normal',
            content: 'This is an error Notification!',
          })
        }
        type="primary"
      >
        Info
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            title: 'Success',
            content: 'This is a success Notification!',
          })
        }
        type="primary"
        status="success"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          Notification.warning({
            title: 'Warning',
            content: 'This is a warning Notification!',
          })
        }
        type="primary"
        status="warning"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          Notification.error({
            title: 'Error',
            content: 'This is an error Notification!',
          })
        }
        type="primary"
        status="danger"
      >
        Error
      </Button>
      <Button
        onClick={() =>
          Notification.normal({
            title: 'Normal',
            content: 'This is an normal  Notification!',
          })
        }
        type="secondary"
      >
        Normal
      </Button>
    </Space>
  );
};

export default App;
```

## 更新通知内容

通过指定参数 `id`，可以更新已经存在的通知提醒框。

```tsx
import { Notification, Button } from '@xiaoyaoliu/x-arco-design';

function updateNotification() {
  Notification.warning({
    id: 'need_update',
    title: 'Ready to update',
    content: 'Will update after 2 seconds...',
  });
  setTimeout(() => {
    Notification.success({
      id: 'need_update',
      title: 'Success',
      content: 'Update success!',
    });
  }, 2000);
}

const App = () => {
  return (
    <Button onClick={updateNotification} type="primary">
      Update Notification
    </Button>
  );
};

export default App;
```

## 更新延迟

通过指定参数 `id`，可以更新已经存在的通知提醒框。

```tsx
import { Notification, Button } from '@xiaoyaoliu/x-arco-design';

function updateNotification() {
  Notification.warning({
    id: 'need_update_duration',
    title: 'Ready to update',
    content: 'Will update after 2 seconds...',
    duration: 3000,
  });
  setTimeout(() => {
    Notification.success({
      id: 'need_update_duration',
      title: 'Success',
      content: 'Will close after 3 seconds!',
      duration: 3000,
    });
  }, 2000);
}

const App = () => {
  return (
    <Button onClick={updateNotification} type="primary">
      Update Notification
    </Button>
  );
};

export default App;
```

## 自定义操作按钮

通过指定 `btn` 字段，可以添加操作按钮。

```tsx
import { Notification, Button } from '@xiaoyaoliu/x-arco-design';

function updateNotification() {
  const id = `${Date.now()}`;
  Notification.info({
    id,
    title: 'Notification',
    content: 'This is a notification!',
    duration: 0,
    btn: (
      <span>
        <Button
          type="secondary"
          size="small"
          onClick={() => Notification.remove(id)}
          style={{ margin: '0 12px' }}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => Notification.remove(id)}
        >
          Ok
        </Button>
      </span>
    ),
  });
}

const App = () => {
  return (
    <Button onClick={updateNotification} type="primary">
      Open Notification
    </Button>
  );
};

export default App;
```

## 自定义图标

设置 `icon` 来自定义图标。

```tsx
import { Notification, Button, Space } from '@xiaoyaoliu/x-arco-design';
import {
  SmileFilled,
  InfoCircleFilled,
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
} from '@easyv/react-icons';

const App = () => {
  return (
    <Space size="large">
      <Button
        onClick={() =>
          Notification.info({
            icon: <InfoCircleFilled />,
            title: 'Upgrade',
            content: 'Ready to upgrade ArcoDesign 2.0',
          })
        }
        type="primary"
        style={{ marginBottom: 20 }}
      >
        Info (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            icon: <CheckCircleFilled />,
            title: 'Success',
            content: 'ArcoDesign 2.0 upgrade completed!',
          })
        }
        type="primary"
        status="success"
        style={{ marginBottom: 24 }}
      >
        Success (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.warning({
            icon: <ExclamationCircleFilled />,
            title: 'Warning',
            content: 'Current version is at risk!',
          })
        }
        type="primary"
        status="warning"
        style={{ marginBottom: 24 }}
      >
        Warning (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.error({
            icon: <CloseCircleFilled />,
            title: 'Error',
            content: 'Failed to upgrade ArcoDesign 2.0!',
          })
        }
        type="primary"
        status="danger"
        style={{ marginBottom: 24 }}
      >
        Error (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.info({
            icon: <SmileFilled />,
            title: 'Upgrade',
            content: 'Ready to upgrade ArcoDesign 2.0!',
          })
        }
        type="secondary"
        style={{ marginBottom: 24 }}
      >
        Smile
      </Button>
    </Space>
  );
};

export default App;
```

## 自定义样式

可以设置 `style` 和 `className` 来定制样式。

```tsx
import { Notification, Button } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Button
      onClick={() =>
        Notification.info({
          style: { width: 500 },
          title: 'Notification',
          content:
            'This is a notification! This is a notification! This is a notification! This is a notification! ',
        })
      }
      type="primary"
    >
      Open Notification
    </Button>
  );
};

export default App;
```

## 通知提醒位置

通知提醒框有 4 种不同的弹出位置，分别为：`左上角`, `右上角 (默认)`, `左下角`, `右下角`。

```tsx
import { Notification, Button, Space } from '@xiaoyaoliu/x-arco-design';

const App = () => {
  return (
    <Space size="large">
      <Button
        onClick={() =>
          Notification.success({
            title: 'Title',
            content: 'This is a Notification!',
            showIcon: true,
            position: 'topLeft',
          })
        }
        type="primary"
      >
        Top Left
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            title: 'Title',
            content: 'This is a Notification!',
            showIcon: true,
            position: 'topRight',
          })
        }
        type="primary"
      >
        Top Right
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            title: 'Title',
            content: 'This is a Notification!',
            showIcon: true,
            position: 'bottomLeft',
          })
        }
        type="primary"
      >
        Bottom Left
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            title: 'Title',
            content: 'This is a Notification!',
            showIcon: true,
            position: 'bottomRight',
          })
        }
        type="primary"
      >
        Bottom Right
      </Button>
    </Space>
  );
};

export default App;
```

## Hooks

可以通过 `useNotification`**(2.40.0)** 去创建可以读取 context 的对话框。

```tsx
import React, { createContext } from 'react';
import {
  Notification,
  Button,
  Space,
  ConfigProvider,
} from '@xiaoyaoliu/x-arco-design';

const ConfigContext = createContext({});

const App = () => {
  const [notification, contextHolder] = Notification.useNotification();

  const config = {
    title: 'Profile',
    content: (
      <ConfigContext.Consumer>
        {(name) => `Current user: ${name}`}
      </ConfigContext.Consumer>
    ),
  };
  return (
    <ConfigContext.Provider value="PJY">
      {contextHolder}

      <Space size="large">
        <Button onClick={() => notification.info?.(config)} type="primary">
          Info
        </Button>
        <Button
          onClick={() => notification.success?.(config)}
          type="primary"
          status="success"
        >
          Success
        </Button>
        <Button
          onClick={() => notification.warning?.(config)}
          type="primary"
          status="warning"
        >
          Warning
        </Button>
        <Button
          onClick={() => notification.error?.(config)}
          type="primary"
          status="danger"
        >
          Error
        </Button>
        <Button onClick={() => notification.normal?.(config)} type="secondary">
          Normal
        </Button>
      </Space>
    </ConfigContext.Provider>
  );
};

export default App;
```

## API

### Notification

| 参数名    | 描述                                                                                             | 类型                                                     | 默认值 |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------ |
| closable  | 是否显示关闭按钮                                                                                 | boolean                                                  | `-`    |
| showIcon  | 是否显示图标                                                                                     | boolean                                                  | `true` |
| duration  | 自动关闭的时间，单位为 `ms`                                                                      | number                                                   | `3000` |
| id        | 当前通知的唯一标识，可以用来更新消息                                                             | string                                                   | `-`    |
| position  | 消息的位置，分为 `topLeft` 左上方、`topRight` 右上方、`bottomLeft` 左下方和 `bottomRight` 右下方 | 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' | `-`    |
| btn       | 添加操作按钮                                                                                     | ReactNode                                                | `-`    |
| icon      | 自定义图标                                                                                       | ReactNode                                                | `-`    |
| className | 节点类名                                                                                         | string \| string[]                                       | `-`    |
| content   | 通知内容                                                                                         | ReactNode \| string **(必填)**                           | `-`    |
| style     | 节点样式                                                                                         | CSSProperties                                            | `-`    |
| title     | 通知标题                                                                                         | ReactNode \| string                                      | `-`    |
| onClose   | 关闭时的回调                                                                                     | () => void                                               | `-`    |

### 使用方法

- `Notification.info(config)`
- `Notification.success(config)`
- `Notification.warning(config)`
- `Notification.error(config)`
- `Notification.normal(config)`
- `Notification.remove(id)`
- `Notification.clear()`

### 全局设置

`Notification.config(options)`

| 参数名       |        描述        |        类型         |                默认值 |
| ------------ | :----------------: | :-----------------: | --------------------: |
| maxCount     |    最大通知数量    |      `number`       |                   `-` |
| getContainer |   放置通知的容器   | `() => HTMLElement` | `() => document.body` |
| duration     | 通知自动关闭的时间 |      `number`       |                `3000` |
| prefixCls    |      类名前缀      |      `string`       |                `arco` |
