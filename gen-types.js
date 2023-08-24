const fs = require('fs');

const components = [
  // 'Affix',
  // 'Alert',
  // 'Anchor',
  // 'AutoComplete',
  // 'Avatar',
  // 'Button',
  // 'BackTop',
  // 'Badge',
  // 'Breadcrumb',
  // 'Calendar',
  // 'Card',
  // 'Carousel',
  // 'Cascader',
  // 'Checkbox',
  // 'Collapse',
  // 'Comment',
  // 'ConfigProvider',
  // 'DatePicker',
  // 'Descriptions',
  // 'Divider',
  // 'Drawer',
  // 'Dropdown',
  // 'Empty',
  // 'Form',
  // 'Grid',
  // 'Image',
  // 'InputNumber',
  // 'InputTag',
  // 'Layout',
  // 'Link',
  // 'List',
  // 'Mentions',
  // 'Menu',
  'Notification',
  'PageHeader',
  'Pagination',
  'Popconfirm',
  'Popover',
  // 'Portal',
  'Progress',
  'Rate',
  'ResizeBox',
  'Result',
  'Skeleton',
  'Slider',
  'Spin',
  'Statistic',
  'Steps',
  'Switch',
  'Table',
  'Tabs',
  'Timeline',
  'TimePicker',
  'Tooltip',
  'Transfer',
  'Tree',
  'TreeSelect',
  'Trigger',
  'Typography',
  'Upload',
  'Input',
  'Message',
  'Modal',
  'Radio',
  'Select',
  'Space',
  'Tag',
];

components.forEach((component) => {
  const filePath = `./src/${component}/interface.ts`;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(
      filePath,
      `export type { ${component}Props } from '@arco-design/web-react';`,
    );
  }

  const componentEntryPath = `./src/${component}/index.tsx`;
  if (fs.existsSync(componentEntryPath)) {
    // const content = fs.readFileSync(componentEntryPath);
    fs.appendFileSync(
      componentEntryPath,
      `\nexport type * from './interface';`,
    );
  }
});
