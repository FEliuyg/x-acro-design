// 生成组件脚本
const fs = require('fs');
const path = require('path');

const components = [
  'Affix',
  'Alert',
  'Anchor',
  'AutoComplete',
  'Avatar',
  'Button',
  'BackTop',
  'Badge',
  'Breadcrumb',
  'Calendar',
  'Card',
  'Carousel',
  'Cascader',
  'Checkbox',
  'Collapse',
  'Comment',
  'ConfigProvider',
  'DatePicker',
  'Descriptions',
  'Divider',
  'Drawer',
  'Dropdown',
  'Empty',
  'Form',
  'Grid',
  'Image',
  'InputNumber',
  'InputTag',
  'Layout',
  'Link',
  'List',
  'Mentions',
  'Menu',
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

// let modules = [];
components.forEach((component) => {
  fs.mkdirSync(path.resolve(__dirname, `./src/${component}`));
  // component
  fs.writeFileSync(
    path.resolve(__dirname, `./src/${component}/index.tsx`),
    `
import { ${component} } from '@arco-design/web-react';
import './index.less';

export default ${component};
  `,
  );

  // less
  fs.writeFileSync(
    path.resolve(__dirname, `./src/${component}/index.less`),
    '',
  );

  // md 文档
  const content = fs
    .readFileSync(
      path.resolve(
        __dirname,
        `../../source/arco-design/components/${component}/README.zh-CN.md`,
      ),
    )
    .toString();

  const demos = fs
    .readdirSync(
      path.resolve(
        __dirname,
        `../../source/arco-design/components/${component}/__demo__`,
      ),
    )
    .map((file) =>
      fs
        .readFileSync(
          path.resolve(
            __dirname,
            `../../source/arco-design/components/${component}/__demo__/${file}`,
          ),
        )
        .toString(),
    )
    .sort((a, b) => {
      const aOrder = a.match(/order: (\d+)/)[1];
      const bOrder = b.match(/order: (\d+)/)[1];

      return aOrder - bOrder;
    })
    .map((content) => {
      let res = content.match(/zh-CN: ([a-zA-Z0-9\u4e00-\u9fa5]*)/);
      if (res === null) {
        res = content.match(/title: ([a-zA-Z0-9\u4e00-\u9fa5]*)/);
      }

      const zhCN = res && res[1];

      return content
        .replace(/^---[\s\S]*?---\s*/g, '')
        .replace('zh-CN', zhCN)
        .replace(
          /from ['"]@arco-design\/web-react['"]/g,
          "from '@xiaoyaoliu/x-arco-design'",
        )
        .replace(/## en-US[\s\S]*?`/, '`')
        .replace('```js', '```tsx');
    })
    .join('\n');

  // modules = modules.concat(demos.match(/from ['"](.*)['"]/g));

  fs.writeFileSync(
    path.resolve(__dirname, `./src/${component}/index.md`),
    content
      .replace(/`````[\s\S]*?#/, '#')
      .replace('`````', '')
      .replace('%%Content%%', demos),
  );
});

// console.log(Array.from(new Set(modules)));

let indexStr = '';
components.forEach((component) => {
  indexStr += `export { default as ${component} } from './${component}';\n`;
});
fs.writeFileSync(path.resolve(__dirname, './src/index.ts'), indexStr);
