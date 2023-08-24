# 全局配置 ConfigProvider

在应用的最外层进行配置，一次设置，全局生效。一般用于设置国际化语言等功能。

## 基础用法

设置国际化语言的基础用法。

```tsx
import { useState } from 'react';
import {
  ConfigProvider,
  Radio,
  Pagination,
  DatePicker,
  TimePicker,
  Popconfirm,
  Button,
  Modal,
} from '@xiaoyaoliu/x-arco-design';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import jaJP from '@arco-design/web-react/es/locale/ja-JP';
import koKR from '@arco-design/web-react/es/locale/ko-KR';
import idID from '@arco-design/web-react/es/locale/id-ID';
import thTH from '@arco-design/web-react/es/locale/th-TH';
import zhHK from '@arco-design/web-react/es/locale/zh-HK';
import frFR from '@arco-design/web-react/es/locale/fr-FR';
import esES from '@arco-design/web-react/es/locale/es-ES';
import deDE from '@arco-design/web-react/es/locale/de-DE';
import itIT from '@arco-design/web-react/es/locale/it-IT';
import viVN from '@arco-design/web-react/es/locale/vi-VN';

function App() {
  const [locale, setLocale] = useState('zh-CN');

  function getLocale() {
    switch (locale) {
      case 'zh-CN':
        return zhCN;

      case 'en-US':
        return enUS;

      case 'ja-JP':
        return jaJP;

      case 'ko-KR':
        return koKR;

      case 'id-ID':
        return idID;

      case 'th-TH':
        return thTH;

      case 'zh-HK':
        return zhHK;

      case 'fr-FR':
        return frFR;

      case 'es-ES':
        return esES;

      case 'de-DE':
        return deDE;

      case 'it-IT':
        return itIT;

      case 'vi-VN':
        return viVN;

      default:
        return zhCN;
    }
  }

  return (
    <ConfigProvider locale={getLocale()}>
      <Radio.Group
        value={locale}
        options={[
          'zh-CN',
          'en-US',
          'zh-HK',
          'ja-JP',
          'ko-KR',
          'id-ID',
          'th-TH',
          'fr-FR',
          'es-ES',
          'de-DE',
          'it-IT',
          'vi-VN',
        ]}
        name="locale"
        type="button"
        mode="fill"
        onChange={setLocale}
        style={{ marginBottom: 40 }}
      />
      <br />
      <Pagination
        total={200}
        showTotal
        sizeCanChange
        style={{ marginBottom: 20, marginRight: 40, minWidth: 550 }}
      />
      <DatePicker.RangePicker
        style={{ marginBottom: 20, marginRight: 40, width: 300 }}
      />
      <TimePicker.RangePicker
        style={{ marginBottom: 20, marginRight: 40, width: 300 }}
      />
      <Popconfirm title="Click to confirm!">
        <Button style={{ marginBottom: 20, marginRight: 20 }} type="primary">
          Popconfirm
        </Button>
      </Popconfirm>
      <Button
        onClick={() =>
          Modal.confirm({
            title: 'Title',
            content: 'Content',
          })
        }
      >
        Modal confirm
      </Button>
    </ConfigProvider>
  );
}

export default App;
```

配置组件主题，可以配置颜色等基本参数。

```tsx
import { useState } from 'react';
import {
  ConfigProvider,
  Button,
  Input,
  Radio,
} from '@xiaoyaoliu/x-arco-design';
const themes = {
  blue: {
    primaryColor: '#3370ff',
  },
  red: {
    primaryColor: '#ee4d38',
  },
  green: {
    primaryColor: '#0fbf60',
  },
  orange: {
    primaryColor: '#f58505',
  },
};

function App() {
  const [theme, setTheme] = useState<
    'blue' | 'red' | 'green' | 'orange' | null
  >(null);
  return (
    <ConfigProvider theme={theme ? themes[theme] : undefined}>
      <Radio.Group
        name="theme"
        options={['blue', 'red', 'green', 'orange']}
        onChange={(theme) => {
          setTheme(theme);
        }}
        style={{ display: 'block', marginBottom: 40 }}
      />
      <Button style={{ marginRight: 40 }} type="primary">
        Button
      </Button>
      <Input style={{ width: 200 }} placeholder="Please Enter ..." />
    </ConfigProvider>
  );
}

export default App;
```

## 表格分页配置

配置全局的表格分页参数，比如可以全局设置 `tablePagination.hideOnSinglePage`, 当表格数据小于等于一页的时候隐藏分页。

```tsx
import { useState } from 'react';
import {
  ConfigProvider,
  Table,
  Switch,
  Space,
  Typography,
} from '@xiaoyaoliu/x-arco-design';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
];

function App() {
  const [hideOnSinglePage, setHideOnSinglePage] = useState(true);
  return (
    <ConfigProvider
      tablePagination={{
        hideOnSinglePage,
      }}
    >
      <Space style={{ marginBottom: 10 }}>
        <Typography.Text>tablePagination.hideOnSinglePage</Typography.Text>
        <Switch
          checked={hideOnSinglePage}
          onChange={(checked) => setHideOnSinglePage(checked)}
        />
      </Space>
      <Table columns={columns} data={data} />
    </ConfigProvider>
  );
}

export default App;
```

## 空元素

通过 `renderEmpty` 可以定义组件内显示的空元素。

```tsx
import { useState } from 'react';
import {
  ConfigProvider,
  Cascader,
  Select,
  TreeSelect,
  List,
  Table,
  Space,
  Empty,
  Typography,
} from '@xiaoyaoliu/x-arco-design';

function renderEmpty(componentName) {
  switch (componentName) {
    case 'Cascader':
      return <Typography.Text>Cascader no data!</Typography.Text>;

    case 'Select':
      return <Typography.Text>Select no data!</Typography.Text>;

    case 'TreeSelect':
      return <Typography.Text>TreeSelect no data!</Typography.Text>;

    case 'List':
      return <Empty description="List no data!" />;

    case 'Table':
      return <Empty description="Table no data!" />;

    default:
      return <Empty />;
  }
}

const App = () => {
  return (
    <ConfigProvider renderEmpty={renderEmpty}>
      <Space>
        <Cascader style={{ width: 200 }} placeholder="Cascader" />
        <Select style={{ width: 200 }} placeholder="Select" />
        <TreeSelect style={{ width: 200 }} placeholder="TreeSelect" />
      </Space>
      <List header="Empty List" style={{ marginTop: 20 }} />
      <Table
        data={[]}
        columns={[
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
          },
        ]}
        style={{ marginTop: 20 }}
      />
    </ConfigProvider>
  );
};

export default App;
```

## 组件配置

全局设置各组件默认配置。

```tsx
import {
  ConfigProvider,
  Button,
  DatePicker,
  Space,
  InputNumber,
  Radio,
  Table,
  Tag,
} from '@xiaoyaoliu/x-arco-design';
import type { ConfigProviderProps } from '@xiaoyaoliu/x-arco-design';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

function App() {
  const componentConfig: ConfigProviderProps['componentConfig'] = {
    Button: {
      type: 'primary',
      shape: 'round',
    },
    DatePicker: {
      dayStartOfWeek: 2,
      utcOffset: 0,
    },
    InputNumber: {
      mode: 'button',
    },
    'Radio.Group': {
      type: 'button',
    },
    Space: {
      size: 'large',
    },
    Table: {
      border: false,
      noDataElement: 'Oops, no data ~',
    },
    Tag: {
      color: 'arcoblue',
      size: 'large',
    },
  };
  return (
    <ConfigProvider componentConfig={componentConfig}>
      <Space direction="vertical">
        <Space>
          <Button>Button 1</Button>
          <Button status="success">Button 2</Button>
          <Button type="secondary">Button 2</Button>
        </Space>
        <Space>
          <Radio.Group
            options={['JavaScript', 'CSS', 'React', 'Vue']}
            defaultValue="JavaScript"
          />
          <Radio.Group options={['Light', 'Dark']} defaultValue="Light" />
        </Space>
        <Space>
          <DatePicker showTime />
          <DatePicker.RangePicker />
        </Space>
        <Space>
          <InputNumber defaultValue={2} />
          <InputNumber defaultValue={3} />
        </Space>
        <Space>
          <Tag>ArcoDesign</Tag>
          <Tag>Design System</Tag>
          <Tag>Component</Tag>
          <Tag>Design Lab</Tag>
        </Space>
        <Table columns={columns} data={[]} />
      </Space>
    </ConfigProvider>
  );
}

export default App;
```

## RTL

设置组件为从右向左阅读的视图。

```tsx
import React, { useState } from 'react';
import {
  ConfigProvider,
  Divider,
  Switch,
  Space,
  Badge,
  Avatar,
  Tabs,
  Tag,
  DatePicker,
  Pagination,
} from '@xiaoyaoliu/x-arco-design';

const TabPane = Tabs.TabPane;

function App() {
  const [rtl, setRtl] = useState(true);

  return (
    <div>
      <Switch
        checkedText="RTL"
        uncheckedText="LTR"
        checked={rtl}
        onChange={(checked) => setRtl(checked)}
      />
      <Divider />
      <ConfigProvider rtl={rtl} effectGlobalNotice={false}>
        <Tabs defaultActiveTab="1" style={{ marginBottom: 20 }}>
          <TabPane key="1" title="Tab 1" />
          <TabPane key="2" title="Tab 2" />
          <TabPane key="3" title="Tab 3" />
        </Tabs>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space size="large">
            <Badge count={9}>
              <Avatar shape="square" />
            </Badge>
            <Badge count={9} dot dotStyle={{ width: 10, height: 10 }}>
              <Avatar shape="square" />
            </Badge>
            <Tag color="red" closable>
              red
            </Tag>
            <Tag color="arcoblue" closable>
              arcoblue
            </Tag>
            <Tag color="green" closable>
              green
            </Tag>
          </Space>
          <Space>
            <DatePicker />
            <DatePicker.RangePicker style={{ width: 300 }} />
          </Space>
          <Pagination defaultCurrent={5} total={200} sizeCanChange />
        </Space>
      </ConfigProvider>
    </div>
  );
}

export default App;
```

## 局部修改

通过 `ConfigProvider` 设置的 `prefixCls` 和 `rtl` 默认会作用在所有的 `Message` 和 `Notification` 上

如果希望能只在 `ConfigProvider` 内部作用，需要结合 `useMessage` 或者 `useNotification` 使用，并且关闭 `effectGlobalNotice`

**此功能在 2.40.0 支持**

```tsx
import {
  Button,
  Message,
  Space,
  ConfigProvider,
  Notification,
  Typography,
} from '@xiaoyaoliu/x-arco-design';
import './demo.css';

function App() {
  const [message, messageHolder] = Message.useMessage();
  const [notification, notificationHolder] = Notification.useNotification();

  return (
    <Space direction="vertical" size={20}>
      <ConfigProvider rtl effectGlobalNotice={false}>
        <Typography.Title heading={6}> 局部 RTL 视图</Typography.Title>
        <div className="demo-holder-wrapper">
          {messageHolder}
          {notificationHolder}
        </div>
        <Space>
          <Button
            onClick={() => {
              message.info && message.info('This is an info message!');
            }}
            type="primary"
          >
            Open Message
          </Button>
          <Button
            onClick={() => {
              notification.info &&
                notification.info({
                  closable: true,
                  title: 'Notification',
                  content: 'This is a notification!',
                });
            }}
            type="primary"
          >
            Open Notification
          </Button>
        </Space>
      </ConfigProvider>
      <div>
        <Typography.Title heading={6}> 正常视图 </Typography.Title>
        <Space>
          <Button
            onClick={() => {
              Message.info('This is an info message!');
            }}
          >
            Open Message
          </Button>

          <Button
            onClick={() => {
              Notification.info({
                closable: true,
                title: 'Notification',
                content: 'This is a notification!',
              });
            }}
          >
            Open Notification
          </Button>
        </Space>
      </div>
    </Space>
  );
}

export default App;
```

## API

### ConfigProvider

| 参数名                  | 描述                                                                                                      | 类型                                                                                      | 默认值                                                       | 版本   |
| ----------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| autoInsertSpaceInButton | 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。                                                      | boolean                                                                                   | `-`                                                          | 2.3.0  |
| effectGlobalNotice      | 是否全局设置所有 `Message` 和 `Notification` 的配置。如果用了 `useMessage` 的 hook 局部设置请设置为 false | boolean                                                                                   | `true`                                                       | 2.40.0 |
| rtl                     | 视图的表现形式是从右开始向左结束。                                                                        | boolean                                                                                   | `-`                                                          | 2.36.0 |
| prefixCls               | 全局组件类名前缀                                                                                          | string                                                                                    | `arco`                                                       | -      |
| size                    | 配置组件的默认尺寸，只会对支持`size`属性的组件生效。                                                      | 'mini' \| 'small' \| 'default' \| 'large'                                                 | `default`                                                    | -      |
| loadingElement          | 全局的加载中图标，作用于所有组件。                                                                        | ReactNode                                                                                 | `-`                                                          | -      |
| componentConfig         | 用于全局配置所有组件的默认参数                                                                            | [ComponentConfig](#componentconfig)                                                       | `-`                                                          | 2.23.0 |
| focusLock               | 全局配置弹出框的 `focusLock`，作用于 `Modal` `Drawer` 组件。                                              | {modal?: boolean \| { autoFocus?: boolean };drawer?: boolean \| { autoFocus?: boolean };} | `{ modal: { autoFocus: true }, drawer: { autoFocus: true }}` | 2.13.0 |
| locale                  | 设置语言包                                                                                                | [Locale](#locale)                                                                         | `-`                                                          | -      |
| tablePagination         | Table 全局的分页配置。                                                                                    | [PaginationProps](pagination#pagination)                                                  | `-`                                                          | 2.6.0  |
| theme                   | 主题配置                                                                                                  | [ThemeConfig](#themeconfig)                                                               | `-`                                                          | -      |
| getPopupContainer       | 全局弹出框挂载的父级节点。                                                                                | (node: HTMLElement) => Element                                                            | `() => document.body`                                        | -      |
| renderEmpty             | 全局配置组件内的空组件。                                                                                  | (componentName?: string) => ReactNode                                                     | `-`                                                          | 2.10.0 |

### ComponentConfig

```js
export type ComponentConfig = {
  Affix?: AffixProps,
  Alert?: AlertProps,
  AutoComplete?: AutoCompleteProps,
  Avatar?: AvatarProps,
  'Avatar.Group'?: AvatarGroupProps,
  Anchor?: AnchorProps,
  'Anchor.Link'?: AnchorLinkProps,
  BackTop?: BackTopProps,
  Badge?: BadgeProps,
  Breadcrumb?: BreadcrumbProps,
  Button?: ButtonProps,
  Calendar?: CalendarProps,
  Card?: CardProps,
  Carousel?: CarouselProps,
  Cascader?: CascaderProps,
  Checkbox?: CheckboxProps,
  Collapse?: CollapseProps,
  Comment?: CommentProps,
  DatePicker?: Omit<
    DatePickerCommonProps,
    | 'placeholder'
    | 'onChange'
    | 'onSelect'
    | 'onOk'
    | 'defaultPickerValue'
    | 'pickerValue'
    | 'onPickerValueChange',
  >,
  Descriptions?: DescriptionsProps,
  Divider?: DividerProps,
  Drawer?: DrawerProps,
  Dropdown?: DropdownProps,
  'Dropdown.Button'?: DropdownButtonProps,
  Empty?: EmptyProps,
  Form?: FormProps,
  'Grid.Row'?: RowProps,
  'Grid.Col'?: ColProps,
  Grid?: GridProps,
  'Grid.GridItem'?: GridItemProps,
  Image?: ImageProps,
  Input?: InputProps,
  InputNumber?: InputNumberProps,
  InputTag?: InputTagProps,
  Layout?: LayoutProps,
  Link?: LinkProps,
  List?: ListProps,
  'List.Item'?: ListItemProps,
  Mentions?: MentionsProps,
  Menu?: MenuProps,
  Modal?: ModalProps,
  PageHeader?: PageHeaderProps,
  Pagination?: PaginationProps,
  Popconfirm?: PopconfirmProps,
  Popover?: PopoverProps,
  Progress?: ProgressProps,
  Radio?: RadioProps,
  'Radio.Group'?: RadioGroupProps,
  Rate?: RateProps,
  ResizeBox?: ResizeBoxProps,
  Result?: ResultProps,
  Select?: SelectProps,
  Skeleton?: SkeletonProps,
  Slider?: SliderProps,
  Space?: SpaceProps,
  Spin?: SpinProps,
  Statistic?: StatisticProps,
  Steps?: StepsProps,
  Switch?: SwitchProps,
  Table?: TableProps,
  Tabs?: TabsProps,
  TreeProps?: TreeProps,
  TriggerProps?: TriggerProps,
  Tag?: TagProps,
  Timeline?: TimelineProps,
  'Timeline.Item'?: TimelineItemProps,
  TimePicker?: TimePickerCommonProps,
  Tooltip?: TooltipProps,
  Transfer?: TransferProps,
  Tree?: TreeProps,
  TreeSelect?: TreeSelectProps,
  Trigger?: TriggerProps,
  Upload?: UploadProps,
};
```

### Locale

```js
export interface Locale {
  locale: string;
  dayjsLocale?: string;
  Calendar: CalendarType;
  DatePicker: {
    Calendar: CalendarType,
    [key: string]: any,
  };
  Drawer: Record<string, any>;
  Empty: Record<string, any>;
  Modal: Record<string, any>;
  Pagination: Record<string, any>;
  Popconfirm: Record<string, any>;
  Table: Record<string, any>;
  TimePicker: Record<string, any>;
  Upload: Record<string, any>;
  Progress: Record<string, any>;
  Typography: Record<string, any>;
  Transfer: Record<string, any>;
  ImagePreview: Record<string, any>;
  Form?: Record<string, any>;
}
```

### CalendarType

```js
type CalendarType = {
  today: string,
  view: Record<string, any>,
  month: {
    short: Record<string, any>,
    long: Record<string, any>,
  },
  week: {
    short: Record<string, any>,
    long: Record<string, any>,
  },
};
```

### ThemeConfig

```js
export type ThemeConfig = Record<string, any>;
```
