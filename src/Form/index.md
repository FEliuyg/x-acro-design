# 表单 Form

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 基础用法

非受控模式的用法。

```tsx
import { Form, Input, Button, Checkbox } from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

const App = () => {
  return (
    <Form
      style={{ width: 600 }}
      autoComplete="off"
      onSubmit={(values) => console.log(values)}
    >
      <FormItem label="Username" field="username">
        <Input placeholder="please enter your username..." />
      </FormItem>
      <FormItem label="Post" field="password">
        <Input placeholder="please enter your post..." />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Checkbox>I have read the manual</Checkbox>
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};

export default App;
```

## 表单布局

`Form` 支持三种排列方式：

horizontal 水平排列 (**默认**)、 vertical 垂直排列、 inline 行内排列

```tsx
import React from 'react';
import {
  Form,
  Input,
  Checkbox,
  Button,
  Radio,
} from '@xiaoyaoliu/x-arco-design';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function App() {
  const [layout, setLayout] = React.useState<
    'vertical' | 'horizontal' | 'inline'
  >('horizontal');
  return (
    <Form
      style={
        layout === 'inline'
          ? {
              width: '100%',
            }
          : {
              maxWidth: 600,
            }
      }
      autoComplete="off"
      layout={layout}
    >
      <FormItem label="Layout">
        <RadioGroup
          onChange={setLayout}
          type="button"
          name="layout"
          value={layout}
        >
          <Radio value="horizontal">horizontal</Radio>
          <Radio value="vertical">vertical</Radio>
          <Radio value="inline">inline</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem
        label="Username"
        field="username"
        tooltip={<div>Username is required </div>}
        rules={[{ required: true }]}
      >
        <Input style={{ width: 270 }} placeholder="please enter your name" />
      </FormItem>
      <FormItem label="Post">
        <Input style={{ width: 270 }} placeholder="please enter your post" />
      </FormItem>
      <FormItem
        wrapperCol={
          layout === 'horizontal'
            ? {
                offset: 5,
              }
            : {}
        }
      >
        <Checkbox>I have read the manual</Checkbox>
      </FormItem>
      <FormItem
        wrapperCol={
          layout === 'horizontal'
            ? {
                offset: 5,
              }
            : {}
        }
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

## 受控表单

可以在`Form.Item`传入`field`属性，即可使控件变为受控组件，表单项的值都将会被 `Form` 收集。

<ol>
  <li>
  受控模式下`Form.Item`会接管控件，自动给表单控件添加相应的 `value`（或 `triggerPropName` 指定的其他属性）和`onChange`（或 `trigger` 指定的其他属性)，所有的数据收集都由 `Form` 内部完成。
  </li>
  <li>
  受控下不要为表单控件添加 `defaultValue`。默认值可以通过 `Form` 的 `initialValues` 或 `Form.Item` 的 `initialValue` 来设置。
  </li>
</ol>

```tsx
import { useRef, useEffect, useState } from 'react';
import {
  Form,
  AutoComplete,
  Input,
  Select,
  TreeSelect,
  Button,
  Checkbox,
  Switch,
  Radio,
  Cascader,
  Message,
  InputNumber,
  Rate,
  Slider,
  Upload,
  DatePicker,
  Modal,
  FormInstance,
} from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;
const cascaderOptions = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'beijingshi',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
const noLabelLayout = {
  wrapperCol: {
    span: 17,
    offset: 7,
  },
};

function App() {
  const formRef = useRef<FormInstance>();
  const [size, setSize] = useState<'mini' | 'small' | 'default' | 'large'>(
    'default',
  );
  useEffect(() => {
    formRef.current?.setFieldsValue({
      rate: 5,
    });
  }, []);

  const onValuesChange = (
    changeValue: Partial<any>,
    values: Partial<any>[],
  ) => {
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <div style={{ maxWidth: 650 }}>
      <Form
        ref={formRef}
        autoComplete="off"
        {...formItemLayout}
        size={size}
        initialValues={{
          slider: 20,
          'a.b[0].c': ['b'],
        }}
        onValuesChange={onValuesChange}
        scrollToFirstError
      >
        <FormItem label="Form size">
          <Radio.Group type="button" value={size} onChange={setSize}>
            <Radio value="mini">mini</Radio>
            <Radio value="small">small</Radio>
            <Radio value="default">default</Radio>
            <Radio value="large">large</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem label="Username" field="name" rules={[{ required: true }]}>
          <Input placeholder="please enter..." />
        </FormItem>
        <FormItem
          label="Age"
          field="age"
          rules={[{ type: 'number', required: true }]}
        >
          <InputNumber placeholder="please enter" />
        </FormItem>
        <FormItem
          label="Province"
          field="province"
          rules={[
            {
              type: 'array',
              required: true,
            },
            {
              type: 'array',
              length: 4,
            },
          ]}
        >
          <Cascader
            showSearch
            placeholder="please select"
            allowClear
            options={cascaderOptions}
          />
        </FormItem>
        <FormItem
          label="Auto-complete"
          field="autocomplete"
          rules={[{ required: true }]}
        >
          <AutoComplete
            placeholder="please enter"
            data={['123', '234', '345', '456']}
          />
        </FormItem>
        <FormItem label="Post" field="post" rules={[{ required: true }]}>
          <Select
            placeholder="please select"
            options={[
              {
                label: 'one',
                value: 0,
              },
              {
                label: 'two',
                value: 1,
              },
              {
                label: 'three',
                value: 2,
              },
            ]}
            allowClear
          />
        </FormItem>
        <FormItem
          label="Multiple Choice"
          required
          field="a.b[0].c"
          rules={[{ type: 'array', minLength: 1 }]}
        >
          <Select
            mode="multiple"
            allowCreate
            placeholder="please select"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>
        <FormItem
          label="TreeSelect"
          field="treenode"
          rules={[{ required: true }]}
        >
          <TreeSelect allowClear placeholder="please select">
            <TreeSelect.Node key="node1" title="Trunk(node1)">
              <TreeSelect.Node key="node2" title="Leaf(node2)" />
            </TreeSelect.Node>
            <TreeSelect.Node key="node3" title="Trunk2(node3)">
              <TreeSelect.Node key="node4" title="Leaf(node4)" />
              <TreeSelect.Node key="node5" title="Leaf(node5)" />
            </TreeSelect.Node>
          </TreeSelect>
        </FormItem>
        <FormItem
          label="Score"
          field="score"
          rules={[{ required: true, type: 'number' }]}
        >
          <Rate />
        </FormItem>
        <FormItem label="Date" field="date" rules={[{ required: true }]}>
          <DatePicker showTime />
        </FormItem>
        <FormItem
          label="Switch"
          field="switch"
          triggerPropName="checked"
          rules={[{ type: 'boolean', true: true }]}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Radio"
          field="radio"
          rules={[
            {
              validator: (value, callback) => {
                if (value !== 'b') {
                  callback('you can only choose b');
                }
              },
            },
          ]}
        >
          <Radio.Group>
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio disabled value="c">
              C
            </Radio>
            <Radio value="d"> D </Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label="Slide"
          field="slider"
          rules={[
            {
              validator: (value, callback) => {
                if (value < 50) {
                  callback('must be greater than 50!');
                }
              },
            },
          ]}
        >
          <Slider></Slider>
        </FormItem>
        <Form.Item
          label="Upload"
          field="upload"
          triggerPropName="fileList"
          initialValue={[
            {
              uid: '-1',
              url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
              name: '20200717',
            },
          ]}
        >
          <Upload
            listType="picture-card"
            multiple
            name="files"
            action="/"
            onPreview={(file) => {
              Modal.info({
                title: 'Preview',
                content: (
                  <img
                    src={file.url || URL.createObjectURL(file.originFile!)}
                    style={{
                      maxWidth: '100%',
                    }}
                  ></img>
                ),
              });
            }}
          />
        </Form.Item>
        <FormItem
          {...noLabelLayout}
          field="readme"
          triggerPropName="checked"
          rules={[{ type: 'boolean', true: true }]}
        >
          <Checkbox>I have read the employee manual</Checkbox>
        </FormItem>
        <FormItem {...noLabelLayout}>
          <Button
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  Message.info('校验通过，提交成功！');
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
            type="primary"
            style={{ marginRight: 24 }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              formRef.current?.resetFields();
            }}
          >
            Reset
          </Button>
          <Button
            type="text"
            onClick={() => {
              Message.info(
                `fields: ${formRef.current?.getTouchedFields().join(',')}`,
              );
            }}
          >
            Get touched fields
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default App;
```

## 低版本受控模式

在`1.15.0` 以下版本让表单控件变为受控组件，需要用到 Form.Control。

**注意：**

受控模式会接管表单控件，会自动给表单控件添加相应的 trigger (默认是 onChange)函数，并且会自动收集表单数据。
也可以进行表单验证。也就是说，你不需要给表单控件添加 onChange 等事件了。
通过给 Form.Control 设置 initialValue 来设置初始值，而不是 defaultValue。

```tsx
import React from 'react';
import { Form, Input, InputNumber, Message } from '@xiaoyaoliu/x-arco-design';

const FormItem = Form.Item;
const FormControl = Form.Control;

class App extends React.Component {
  onSubmit = () => {
    this.form
      .validate()
      .then((values) => {
        Message.info('提交成功！');
        console.log('Values: ', values);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.errors);
      });
  };
  onValuesChange = (value, allValues) => {
    console.log(value, allValues);
  };

  render() {
    return (
      <Form
        ref={(ref) => (this.form = ref)}
        autoComplete="off"
        style={{ maxWidth: 650 }}
        onValuesChange={this.onValuesChange}
      >
        <FormItem
          label="姓名"
          required
          extra="请输入长度在 1 - 10 的名字，注意不要使用特殊符号。"
        >
          <FormControl
            field="name"
            rules={[
              {
                required: true,
              },
              {
                maxLength: 10,
                message: '最多可以输入十个字!',
              },
            ]}
          >
            <Input placeholder="please enter..." />
          </FormControl>
        </FormItem>
        <FormItem label="数字" required>
          <FormControl
            field="number"
            rules={[{ type: 'number', required: true }]}
          >
            <InputNumber placeholder="请输入数字" />
          </FormControl>
        </FormItem>
      </Form>
    );
  }
}

export default App;
```

## 表单方法调用

在函数式组件里可以使用`Form.useForm`获取表单实例。通过该实例调用表单方法，例如设置表单字段值，重置表单等。
在类组件里可以使用`ref` 获取表单实例。

```tsx
import { Form, Input, Button, InputNumber } from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      style={{ width: 600 }}
      initialValues={{ name: 'admin' }}
      autoComplete="off"
      onValuesChange={(v, vs) => {
        console.log(v, vs);
      }}
      onSubmit={(v) => {
        console.log(v);
      }}
    >
      <FormItem label="Username" field="name" rules={[{ required: true }]}>
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem
        label="Age"
        field="age"
        rules={[{ required: true, type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber placeholder="please enter your age" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
          Submit
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
        <Button
          type="text"
          onClick={() => {
            form.setFieldsValue({
              name: 'admin',
              age: 11,
            });
          }}
        >
          Fill Form
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

## 控制表单项错误状态

通过 `setFields` 方法的 `error` 参数，可以在外部控制表单项的错误状态。

```tsx
import { Form, Input, Button, InputNumber } from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      style={{ width: 600 }}
      initialValues={{ name: 'admin' }}
      autoComplete="off"
      onValuesChange={(v, vs) => {
        console.log(v, vs);
      }}
      onSubmit={(v) => {
        console.log(v);
      }}
    >
      <FormItem label="Username" field="name" rules={[{ required: true }]}>
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem
        label="Age"
        field="age"
        rules={[{ required: true, type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber placeholder="please enter your age" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
          Submit
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
        <Button
          type="text"
          onClick={() => {
            form.setFields({
              age: {
                value: 200,
                error: {
                  message: 'Maximum is 200',
                },
                warning: <div>warning info ...</div>,
              },
            });
          }}
        >
          Set Error Age
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

## 复杂类型的数据

通过设置 `field` 为 `a.b.c` 格式，可以得到 `{a:{b:{c: xx}}}`。

```tsx
import React from 'react';
import { Form, Input, Button, Modal } from '@xiaoyaoliu/x-arco-design';

function App() {
  const [values, setValues] = React.useState();
  return (
    <div>
      <Form
        style={{ maxWidth: 650 }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        autoComplete="off"
        onValuesChange={(_, values) => {
          console.log(values);
          setValues(values);
        }}
      >
        <Form.Item
          label="Username"
          field="user.username"
          rules={[{ required: true }]}
        >
          <Input placeholder="please enter your username" />
        </Form.Item>
        <Form.Item label="Post" field="user.post" rules={[{ required: true }]}>
          <Input placeholder="please enter your post" />
        </Form.Item>

        <Form.Item label="Volunteers">
          <Form.Item
            label="Volunteer1"
            field="user.volunteers[0]"
            rules={[{ required: true }]}
          >
            <Input placeholder="please enter your post" />
          </Form.Item>

          <Form.Item
            label="Volunteer2"
            field="user.volunteers[1]"
            rules={[{ required: true }]}
          >
            <Input placeholder="please enter your post" />
          </Form.Item>
        </Form.Item>
      </Form>
      <div style={{ color: 'var(--color-text-2)' }}>
        <p>Form data:</p>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
```

## 表单控件嵌套

`Form.Item` 可以互相嵌套。

```tsx
import {
  Form,
  Input,
  Button,
  Grid,
  Select,
  InputNumber,
  Tooltip,
  Space,
} from '@xiaoyaoliu/x-arco-design';
import { IconExclamationCircle } from '@arco-design/web-react/icon';
import { useRef, useState } from 'react';

function App() {
  const formRef = useRef();
  const [values, setValues] = useState({});
  return (
    <div>
      <Form
        ref={formRef}
        style={{ maxWidth: 500 }}
        initialValues={{ city: 'Beijing' }}
        autoComplete="off"
        onSubmit={(values) => {
          console.log(values);
        }}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
      >
        <Form.Item label="User" required style={{ marginBottom: 0 }}>
          <Grid.Row gutter={8}>
            <Grid.Col span={12}>
              <Form.Item field="name" rules={[{ required: true }]}>
                <Input placeholder="please enter you username" />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={12}>
              <Form.Item field="age" rules={[{ required: true }]}>
                <Input placeholder="please enter your age" />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>
        </Form.Item>
        <Form.Item label="Gender" required>
          <Grid.Row align="center">
            <Form.Item
              field="gender"
              noStyle={{ showErrorTip: true }}
              rules={[{ required: true }]}
            >
              <Select
                options={['male', 'female', 'other']}
                placeholder="please enter you gender"
                style={{ flex: 1 }}
              />
            </Form.Item>
            <Tooltip content="必须填写哦">
              <IconExclamationCircle
                style={{ margin: '0 8px', color: 'rgb(var(--arcoblue-6))' }}
              />
            </Tooltip>
          </Grid.Row>
        </Form.Item>
        <Form.Item
          label="Province"
          field="province"
          rules={[{ required: true }]}
        >
          <Select
            allowClear
            placeholder="please select"
            options={['Beijing', 'Shanghai']}
          ></Select>
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {(values) => {
            return values.province ? (
              <Form.Item field="city" key="city" label="City">
                <Select
                  allowClear
                  placeholder="please select"
                  options={[values.province]}
                ></Select>
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
        <Form.Item label=" ">
          <Space size={24}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              onClick={() => {
                formRef.current.resetFields();
              }}
            >
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
```

## 表单控件联动

可以通过`shouldUpdate` 实现控件间的联动。

```tsx
import { useRef, useState, useEffect } from 'react';
import {
  Form,
  Input,
  Message,
  Radio,
  Button,
  Select,
} from '@xiaoyaoliu/x-arco-design';

function App() {
  const [form] = Form.useForm();
  return (
    <div>
      <Form
        form={form}
        autoComplete="off"
        style={{ maxWidth: 650 }}
        onValuesChange={(_, vs) => {
          console.log(vs);
        }}
      >
        <Form.Item field="type" label="Type">
          <Radio.Group options={['A', 'B']}></Radio.Group>
        </Form.Item>
        <Form.Item shouldUpdate noStyle>
          {(values) => {
            return values.type === 'A' ? (
              <Form.Item field="Name A" label="Select A">
                <Input placeholder="Please enter name A" />
              </Form.Item>
            ) : (
              values.type === 'B' && (
                <Form.Item field="B" label="Name B">
                  <Select
                    options={['B1', 'B2', 'B3']}
                    placeholder="Please select name B"
                  />
                </Form.Item>
              )
            );
          }}
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.type !== next.type}
        >
          {(values) => {
            return values.type ? (
              <Form.Item field="remark" label="Remark">
                <Input.TextArea placeholder={values.type + ' remark'} />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 17, offset: 5 }}>
          <Button
            onClick={() => {
              console.log(form.getFieldsValue());
            }}
          >
            Ok
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
```

## 动态增减表单项

通过`Form.List`管理数组类型的表单结构。设置校验规则时 `Form.List` 会渲染出额外的 `DOM` 节点用来展示校验信息，如果不需要可以传入 `noStyle=false`，并通过 `Form.useFormState` 自定义校验信息的展示。

```tsx
import { useRef, useState } from 'react';
import { Form, Input, Button, Grid, Space } from '@xiaoyaoliu/x-arco-design';
import {
  IconArrowRise,
  IconArrowFall,
  IconDelete,
} from '@arco-design/web-react/icon';

function App() {
  const [form] = Form.useForm();
  const postsState = Form.useFormState('posts', form) || {};

  console.log(postsState, '____');

  return (
    <div>
      <Form
        form={form}
        style={{ width: 600 }}
        autoComplete="off"
        initialValues={{
          users: ['Username'],
          posts: ['post1'],
        }}
        onSubmit={(v) => {
          console.log(v);
        }}
        onValuesChange={(_, v) => {
          console.log(_, v);
        }}
      >
        <Form.Item label="Username" field="username" style={{ width: 370 }}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Form.List
            rules={[
              {
                validator(v, cb) {
                  if (v?.length < 2) {
                    return cb('必须超过两条');
                  }
                  return cb();
                },
              },
            ]}
            field="posts"
          >
            {(fields, { add, remove, move }) => {
              return (
                <div>
                  {fields.map((item, index) => {
                    return (
                      <Grid.Row key={item.key}>
                        <Form.Item
                          field={item.field}
                          label={'Post-' + index}
                          style={{
                            width: 370,
                          }}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Button
                          icon={<IconDelete />}
                          shape="circle"
                          status="danger"
                          style={{
                            margin: '0 20px',
                          }}
                          onClick={() => remove(index)}
                        ></Button>
                        <Button
                          shape="circle"
                          onClick={() =>
                            move(index, index > 0 ? index - 1 : index + 1)
                          }
                        >
                          {index > 0 ? <IconArrowRise /> : <IconArrowFall />}
                        </Button>
                      </Grid.Row>
                    );
                  })}
                  <Space size={20}>
                    <Button
                      onClick={() => {
                        add();
                      }}
                    >
                      Add post
                    </Button>
                    <Button
                      onClick={() => {
                        add('new 2', 1);
                      }}
                    >
                      Add post to the second slot
                    </Button>
                  </Space>
                </div>
              );
            }}
          </Form.List>
        </Form.Item>
        <Form.Item style={{ marginTop: 20 }}>
          <Space size={20}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              onClick={() => {
                form.resetFields();
              }}
            >
              Reset
            </Button>
            <Button
              status="danger"
              onClick={() => {
                form.setFields({
                  'posts[0]': {
                    error: {
                      message: 'error',
                    },
                  },
                });
              }}
            >
              Set `Post-0` to error state
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
```

## 动态增减嵌套类型的表单项

通过`Form.List`管理数组类型的表单结构。可以通过对 `field` 进行一些处理，实现动态增减复杂类型的表单项

```tsx
import { useRef, useState } from 'react';
import { Form, Space, Input, Button, Grid } from '@xiaoyaoliu/x-arco-design';
import {
  IconArrowRise,
  IconArrowFall,
  IconDelete,
} from '@arco-design/web-react/icon';

function App() {
  const formRef = useRef();
  return (
    <div>
      <Form
        ref={formRef}
        style={{ width: 600 }}
        autoComplete="off"
        initialValues={{
          users: [
            {
              username: 'aaa',
              address: 'bbb',
            },
          ],
        }}
        onValuesChange={(_, v) => {
          console.log(_, v);
        }}
      >
        <Form.List field="users">
          {(fields, { add, remove, move }) => {
            return (
              <div>
                {fields.map((item, index) => {
                  return (
                    <div key={item.key}>
                      <Form.Item label={'User ' + index}>
                        <Space>
                          <Form.Item
                            field={item.field + '.username'}
                            rules={[{ required: true }]}
                            noStyle
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            field={item.field + '.address'}
                            rules={[{ required: true }]}
                            noStyle
                          >
                            <Input />
                          </Form.Item>
                          <Button
                            icon={<IconDelete />}
                            shape="circle"
                            status="danger"
                            onClick={() => remove(index)}
                          ></Button>
                        </Space>
                      </Form.Item>
                    </div>
                  );
                })}
                <Form.Item wrapperCol={{ offset: 5 }}>
                  <Button
                    onClick={() => {
                      add();
                    }}
                  >
                    Add User
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      </Form>
    </div>
  );
}

export default App;
```

## 自定义表单控件

`Form.Item` 会给自己的直接子节点（必须是唯一子节点）传递 `onChange` 和 `value` 属性，自定义控件只有在调用这个`onChange` 之后，自己的值才能被 `Form.Item` 收集到 。

```tsx
import { useRef, useState, useEffect } from 'react';
import { Form, Input, Select, Typography } from '@xiaoyaoliu/x-arco-design';

function CustomInput(props) {
  const value = props.value || {};

  const handleChange = (newValue) => {
    props.onChange && props.onChange(newValue);
  };

  return (
    <Input
      value={value.input}
      onChange={(v) => {
        handleChange({ ...value, input: v });
      }}
      addBefore={
        <Select // select component has defined error style
          error={props.error}
          placeholder="Please select ..."
          style={{ width: 100 }}
          value={value.select}
          options={['aaa', 'bbb']}
          onChange={(v) => {
            handleChange({ ...value, select: v });
          }}
        />
      }
    />
  );
}

function App() {
  const formRef = useRef();
  const [values, setValues] = useState({});
  return (
    <div>
      <Form
        ref={formRef}
        style={{ maxWidth: 650 }}
        autoComplete="off"
        onValuesChange={(_, v) => setValues(v)}
      >
        <Form.Item
          rules={[
            {
              required: true,
            },
            {
              validator: (val, cb) => {
                console.log(val);

                if (val.select !== 'bbb') {
                  cb('Please select bbb');
                }

                cb();
              },
            },
          ]}
          label="Custom"
          field="customInput"
        >
          <CustomInput />
        </Form.Item>
      </Form>
      <Typography.Paragraph>
        <p>Form Data:</p>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Typography.Paragraph>
    </div>
  );
}

export default App;
```

## 处理表单项的值

首先，在使用受控表单时，所有表单项的值在改变时，都会被 `Form` 收集到。如果需要对表单项的值进行处理后再存储在 `Form` 中，可以使用 `normalize` 属性。与之相对，在进行表单项的渲染时，都会从 `Form` 中取值，并作为 `value` 属性传递给对应的表单项，如果需要对从 `Form` 中取出的值进行转换再传递给表单项，可以使用 `formatter` 属性。

```tsx
import { Form, DatePicker, Input, Button } from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

const App = () => {
  return (
    <Form style={{ width: 600 }}>
      <FormItem
        label="Number"
        extra="Please enter number"
        field="number"
        autoComplete="off"
        rules={[{ required: true, message: 'Please enter number' }]}
        normalize={(value) => {
          if (value) {
            const val = value.replace(/[^\d]/g, '');
            return `$ ${val}`;
          }

          return value;
        }}
      >
        <Input placeholder="please enter..." />
      </FormItem>
      <FormItem
        label="Date"
        extra="Please enter number"
        field="date"
        rules={[{ required: true, message: 'Please enter number' }]}
        normalize={(value) => {
          return {
            begin: value && value[0],
            end: value && value[1],
          };
        }}
        formatter={(value) => {
          return value && value.begin ? [value.begin, value.end] : [];
        }}
      >
        <DatePicker.RangePicker placeholder="please enter..." />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Ok
        </Button>
      </FormItem>
      <FormItem shouldUpdate>
        {(value) => {
          return <pre>{JSON.stringify(value, null, 2)}</pre>;
        }}
      </FormItem>
    </Form>
  );
};

export default App;
```

## 注册表单

填写必须的信息以注册新用户

```tsx
import { Form, Input, Button, Message } from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      style={{ width: 320 }}
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      onValuesChange={(v, vs) => {
        console.log(v, vs);
      }}
      onSubmit={(v) => {
        console.log(v);
        Message.success('success');
      }}
    >
      <FormItem
        field="name"
        rules={[{ required: true, message: 'username is required' }]}
      >
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem
        field="password"
        rules={[{ required: true, message: 'password is required' }]}
      >
        <Input placeholder="please enter your password" />
      </FormItem>
      <FormItem
        field="confirm_password"
        dependencies={['password']}
        rules={[
          {
            validator: (v, cb) => {
              if (!v) {
                return cb('confirm_password is required');
              } else if (form.getFieldValue('password') !== v) {
                return cb('confirm_password must be equal with password');
              }
              cb(null);
            },
          },
        ]}
      >
        <Input placeholder="please confirm your password" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" long>
          Register
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

## 全局禁用

给 `Form` 组件设置 `disabled` 可以全局禁用所有表单控件。

```tsx
import { useRef, useEffect, useState } from 'react';
import {
  Form,
  AutoComplete,
  Input,
  Select,
  Button,
  Tooltip,
  Checkbox,
  Switch,
  Radio,
  Cascader,
  Message,
  InputNumber,
  Rate,
  Slider,
  Upload,
  Grid,
  DatePicker,
  Modal,
} from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;
const cascaderOptions = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'beijingshi',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
const noLabelLayout = {
  wrapperCol: {
    span: 17,
    offset: 7,
  },
};

function App() {
  const formRef = useRef();
  const [size, setSize] = useState('default');
  useEffect(() => {
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  const onValuesChange = (changeValue, values) => {
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <div style={{ maxWidth: 650 }}>
      <Form
        disabled
        autoComplete="off"
        ref={formRef}
        {...formItemLayout}
        size={size}
        initialValues={{
          slider: 20,
          'a.b[0].c': ['b'],
        }}
        onValuesChange={onValuesChange}
        scrollToFirstError
      >
        <FormItem label="Form size">
          <Radio.Group type="button" value={size} onChange={setSize}>
            <Radio value="mini">mini</Radio>
            <Radio value="small">small</Radio>
            <Radio value="default">default</Radio>
            <Radio value="large">large</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label="Username"
          field="name"
          rules={[{ required: true, message: 'username is required' }]}
        >
          <Input placeholder="please enter..." />
        </FormItem>
        <FormItem
          label="Age"
          field="age"
          rules={[{ type: 'number', required: true }]}
        >
          <InputNumber placeholder="please enter" />
        </FormItem>
        <FormItem
          label="Province"
          field="province"
          rules={[
            {
              type: 'array',
              required: true,
            },
            {
              type: 'array',
              length: 4,
              message: 'Must choose a node of length four',
            },
          ]}
        >
          <Cascader
            showSearch
            placeholder="please select"
            allowClear
            options={cascaderOptions}
          />
        </FormItem>
        <FormItem
          label="Auto-complete"
          field="autocomplete"
          rules={[{ required: true }]}
        >
          <AutoComplete
            placeholder="please enter"
            data={['123', '234', '345', '456']}
          />
        </FormItem>
        <FormItem label="Post" field="post" rules={[{ required: true }]}>
          <Select
            placeholder="please select"
            options={[
              {
                label: 'one',
                value: 0,
              },
              {
                label: 'two',
                value: 1,
              },
              {
                label: 'three',
                value: 2,
              },
            ]}
            allowClear
          />
        </FormItem>
        <FormItem
          label="Multiple Choice"
          required
          field="a.b[0].c"
          rules={[
            { type: 'array', minLength: 1, message: 'choice is required' },
          ]}
        >
          <Select
            mode="multiple"
            allowCreate
            placeholder="please select"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>
        <FormItem
          label="Score"
          field="score"
          rules={[{ required: true, type: 'number' }]}
        >
          <Rate />
        </FormItem>
        <FormItem
          label="Date"
          field="date"
          rules={[{ required: true, message: 'date is required' }]}
        >
          <DatePicker showTime />
        </FormItem>
        <FormItem
          label="Switch"
          field="switch"
          triggerPropName="checked"
          rules={[{ type: 'boolean', true: true, message: 'must be true' }]}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Radio"
          field="radio"
          rules={[
            {
              validator: (value, callback) => {
                if (value !== 'b') {
                  callback('you can only choose b');
                }
              },
            },
          ]}
        >
          <Radio.Group>
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio disabled value="c">
              C
            </Radio>
            <Radio value="d"> D </Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label="Slide"
          field="slider"
          rules={[
            {
              validator: (value, callback) => {
                if (value < 50) {
                  callback('must be greater than 50!');
                }
              },
            },
          ]}
        >
          <Slider></Slider>
        </FormItem>
        <Form.Item
          label="Upload"
          field="upload"
          triggerPropName="fileList"
          initialValue={[
            {
              uid: '-1',
              url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
              name: '20200717',
            },
          ]}
        >
          <Upload
            listType="picture-card"
            multiple
            name="files"
            action="/"
            onPreview={(file) => {
              Modal.info({
                title: 'Preview',
                content: (
                  <img
                    src={file.url || URL.createObjectURL(file.originFile)}
                    style={{
                      maxWidth: '100%',
                    }}
                  ></img>
                ),
              });
            }}
          />
        </Form.Item>
        <FormItem
          {...noLabelLayout}
          field="readme"
          triggerPropName="checked"
          rules={[
            {
              type: 'boolean',
              true: true,
              message: 'must be true',
            },
          ]}
        >
          <Checkbox>I have read the employee manual</Checkbox>
        </FormItem>
        <FormItem {...noLabelLayout}>
          <Button
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  Message.info('pass verification, submit succeed!');
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error(
                    'verification failed, Please check the fields!',
                  );
                }
              }
            }}
            type="primary"
            style={{
              marginRight: 24,
            }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              formRef.current.resetFields();
            }}
          >
            Reset
          </Button>
          <Button
            type="text"
            onClick={() => {
              Message.info(
                `fields: ${formRef.current.getTouchedFields().join(',')}`,
              );
            }}
          >
            Get touched fields
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default App;
```

## 不同尺寸

通过 `size` 属性可以设置不同尺寸的表单

```tsx
import { useRef, useEffect, useState } from 'react';
import {
  Form,
  AutoComplete,
  Input,
  Select,
  TreeSelect,
  Button,
  Radio,
  Cascader,
  Message,
  InputNumber,
  DatePicker,
} from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;
const cascaderOptions = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'beijingshi',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
const noLabelLayout = {
  wrapperCol: {
    span: 17,
    offset: 7,
  },
};

function App() {
  const formRef = useRef();
  const [size, setSize] = useState('default');

  const onValuesChange = (changeValue, values) => {
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <div style={{ maxWidth: 650 }}>
      <Form
        ref={formRef}
        {...formItemLayout}
        size={size}
        autoComplete="off"
        onValuesChange={onValuesChange}
        scrollToFirstError
      >
        <FormItem label="Form size">
          <Radio.Group type="button" value={size} onChange={setSize}>
            <Radio value="mini">mini</Radio>
            <Radio value="small">small</Radio>
            <Radio value="default">default</Radio>
            <Radio value="large">large</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem label="Username">
          <Input placeholder="please enter..." />
        </FormItem>
        <FormItem label="Age">
          <InputNumber placeholder="please enter" />
        </FormItem>
        <FormItem label="Province">
          <Cascader
            showSearch
            placeholder="please select"
            allowClear
            options={cascaderOptions}
          />
        </FormItem>
        <FormItem label="Auto-complete">
          <AutoComplete
            placeholder="please enter"
            data={['123', '234', '345', '456']}
          />
        </FormItem>
        <FormItem label="Post">
          <Select
            placeholder="please select"
            options={[
              {
                label: 'one',
                value: 0,
              },
              {
                label: 'two',
                value: 1,
              },
              {
                label: 'three',
                value: 2,
              },
            ]}
            allowClear
          />
        </FormItem>
        <FormItem label="Multiple Choice">
          <Select
            mode="multiple"
            allowCreate
            placeholder="please select"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>
        <FormItem label="TreeSelect">
          <TreeSelect allowClear placeholder="please select">
            <TreeSelect.Node key="node1" title="Trunk(node1)">
              <TreeSelect.Node key="node2" title="Leaf(node2)" />
            </TreeSelect.Node>
            <TreeSelect.Node key="node3" title="Trunk2(node3)">
              <TreeSelect.Node key="node4" title="Leaf(node4)" />
              <TreeSelect.Node key="node5" title="Leaf(node5)" />
            </TreeSelect.Node>
          </TreeSelect>
        </FormItem>
        <FormItem label="Date">
          <DatePicker showTime />
        </FormItem>
      </Form>
    </div>
  );
}

export default App;
```

## 自定义表单校验状态

`Form.Item` 支持通过 hasFeedback`validateStatus` 和 `help` 属性自定义表单校验状态及校验文案。

```tsx
import React from 'react';
import {
  Form,
  AutoComplete,
  Input,
  Select,
  Cascader,
  InputNumber,
  Grid,
  DatePicker,
  TreeSelect,
  TimePicker,
  Radio,
} from '@xiaoyaoliu/x-arco-design';

const FormItem = Form.Item;

function App() {
  const [status, setStatus] = React.useState('error');
  const [size, setSize] = React.useState('default');
  return (
    <div style={{ maxWidth: 650 }}>
      <Form
        labelCol={{ span: 8 }}
        autoComplete="off"
        wrapperCol={{ span: 16 }}
        size={size}
      >
        <div>
          <Radio.Group
            value={status}
            type="button"
            onChange={setStatus}
            options={['validating', 'success', 'error', 'warning']}
          ></Radio.Group>
          <br />
          <br />

          <Radio.Group
            type="button"
            onChange={setSize}
            options={['mini', 'small', 'default', 'large']}
          ></Radio.Group>
        </div>
        <br />
        <FormItem
          hasFeedback
          validateStatus={status}
          help="This is custom message"
          extra="This is extra text"
        >
          <Input placeholder="Input... " />
        </FormItem>
        <FormItem
          hasFeedback
          validateStatus={status}
          help="This is custom message"
          extra="This is extra text"
        >
          <div>
            <Input placeholder="Input... " allowClear />
          </div>
        </FormItem>
        <FormItem
          hasFeedback
          validateStatus={status}
          help="Choose at least one"
        >
          <AutoComplete
            style={{ width: '100%' }}
            placeholder="AutoComplete..."
            data={['123', '234', '345', '456']}
          />
        </FormItem>
        <FormItem hasFeedback validateStatus={status}>
          <DatePicker.RangePicker
            style={{ width: '100%' }}
            showTime
            onChange={(a) => {
              console.log(a);
            }}
            placeholder={['Start Time', 'End Time']}
          />
        </FormItem>
        <FormItem help="Please select date" validateStatus={status}>
          <Input.Group>
            <DatePicker style={{ width: '48%' }} placeholder="Select date" />
            <span
              style={{
                width: '4%',
                display: 'inline-block',
                textAlign: 'center',
              }}
            >
              -
            </span>
            <TimePicker
              placeholder="Select time"
              style={{ width: '48%' }}
              hasFeedback
            />
          </Input.Group>
        </FormItem>
        <FormItem
          hasFeedback
          validateStatus={status}
          help="Choose at least one"
        >
          <Cascader placeholder="Cascader..." allowClear options={[]} />
        </FormItem>
        <FormItem hasFeedback validateStatus={status}>
          <Select
            mode="multiple"
            allowCreate
            placeholder="Select..."
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>
        <FormItem
          hasFeedback
          validateStatus={status}
          help="This is InputNumber"
        >
          <InputNumber placeholder="InputNumber..." />
        </FormItem>
        <FormItem help="Select tree node" hasFeedback validateStatus={status}>
          <TreeSelect placeholder="TreeSelect...">
            <TreeSelect.Node key="node1" title="Node 1">
              <TreeSelect.Node key="node2" title="Node 2" />
            </TreeSelect.Node>
          </TreeSelect>
        </FormItem>
      </Form>
    </div>
  );
}

export default App;
```

## 表单校验

可以通过 `form.validate` 方法进行表单字段的校验。可以通过参数指定校验特定字段。

```tsx
import {
  Form,
  Input,
  Button,
  Message,
  InputNumber,
} from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form form={form} autoComplete="off" style={{ width: 600 }}>
      <FormItem
        label="Username"
        field="name"
        required
        rules={[
          {
            validator(value, cb) {
              if (value !== 'hahaha') {
                return cb('必须填写hahaha');
              }

              return cb();
            },
          },
        ]}
      >
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem
        label="Age"
        field="age"
        rules={[{ required: true, type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber placeholder="please enter your age" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button
          type="primary"
          onClick={async () => {
            try {
              await form.validate();
              Message.success('校验通过');
            } catch (e) {
              Message.error('校验失败');
            }
          }}
          style={{ marginRight: 24 }}
        >
          Validate Form
        </Button>
        <Button
          type="primary"
          onClick={async () => {
            try {
              await form.validate(['name']);
              Message.success('Username 校验通过');
            } catch (e) {
              Message.error('Username 校验失败');
            }
          }}
          style={{ marginRight: 24 }}
        >
          Validate Username
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

## 表单异步校验

在 `rules` 中自定义 `validator` 方法，并返回一个 `Promise` 即可实现表单的异步校验。

p.s: 如果用 `lodash.debounce` 不生效，建议使用 `debounce.promise` ，它返回的是一个 `promise`。

```tsx
import {
  Form,
  Input,
  Button,
  Message,
  InputNumber,
} from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      autoComplete="off"
      style={{
        width: 600,
      }}
    >
      <FormItem
        label="Username"
        field="name"
        required
        rules={[
          {
            validator: async (value, callback) => {
              return new Promise((resolve) => {
                if (value !== 'admin') {
                  setTimeout(() => {
                    callback('Name must be admin');
                    resolve();
                  }, 3000);
                } else {
                  resolve();
                }
              });
            },
          },
        ]}
      >
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
          Submit
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

## 表单校验信息模板

可以通过 `validateMessages` 属性设置校验信息提示模板(`2.32.0`支持)。[示例](https://github.com/arco-design/arco-design/blob/main/components/locale/zh-CN.tsx#L165)

也可以在 `ConfigProvider` 组件的 `componentConfig` 参数，为全局的 `Form` 组件设置 `validateMessages` 。

```tsx
import {
  Form,
  Input,
  Button,
  Message,
  InputNumber,
} from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      autoComplete="off"
      style={{ width: 600 }}
      validateMessages={{
        required: (_, { label }) => `必须填写 ${label}`,
        string: {
          length: `字符数必须是 #{length}`,
          match: `不匹配正则 #{pattern}`,
        },
        number: {
          min: `最小值为 #{min}`,
          max: `最大值为 #{max}`,
        },
      }}
    >
      <FormItem
        label="Username"
        field="name"
        required
        rules={[
          {
            type: 'string',
            required: true,
            length: 3,
            match: /abc/,
          },
        ]}
      >
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem
        label="Age"
        field="age"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber placeholder="please enter your age" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
          Validate
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

```tsx
import { useRef, useState } from 'react';
import { Form, Input, Button } from '@xiaoyaoliu/x-arco-design';

function App() {
  const formRef = useRef();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          formRef.current && formRef.current.scrollToField('users[9]');
        }}
      >
        Scroll to the last field
      </Button>
      <Form
        ref={formRef}
        style={{
          maxWidth: 500,
          marginTop: 20,
          paddingRight: 16,
          height: 300,
          overflow: 'auto',
        }}
        autoComplete="off"
        initialValues={{
          users: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        }}
      >
        <Form.List field="users">
          {(fields, { add, remove }) => {
            return fields.map((field, index) => {
              return (
                <Form.Item
                  label={'user' + index}
                  key={field.key}
                  field={field.field}
                >
                  <Input placeholder="user" />
                </Form.Item>
              );
            });
          }}
        </Form.List>
      </Form>
    </div>
  );
}

export default App;
```

## 表单校验失败不阻塞提交

可以通过 `validateLevel` 设置表单校验失败是显示为 `warning` 状态，不阻塞表单提交。

```tsx
import {
  Form,
  Input,
  Button,
  Message,
  InputNumber,
} from '@xiaoyaoliu/x-arco-design';
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form form={form} autoComplete="off" style={{ width: 600 }}>
      <Form.Item
        field="email"
        label="Email"
        rules={[
          {
            type: 'email',
            validateLevel: 'warning',
          },
          {
            required: true,
            type: 'string',
            minLength: 6,
          },
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <FormItem
        label="Age"
        field="age"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber placeholder="please enter your age" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button
          type="primary"
          onClick={async () => {
            try {
              await form.validate();
              Message.success('校验通过');
            } catch (e) {
              Message.error('校验失败');
            }
          }}
          style={{ marginRight: 24 }}
        >
          Validate Form
        </Button>
        <Button
          type="primary"
          onClick={async () => {
            try {
              await form.validate(['email']);
              Message.success('Email 校验通过');
            } catch (e) {
              Message.error('Email 校验失败');
            }
          }}
          style={{ marginRight: 24 }}
        >
          Validate Email
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
```

## 多表单联动

可以通过 `Form.Provider` 组件管理多个表单的数据。`2.30.0` 支持。需要想要获得对应的表单实例，需要为 `Form` 组件设置 `id` 属性。

```tsx
import React from 'react';
import {
  Form,
  Grid,
  Input,
  Button,
  Modal,
  Message,
  Tag,
  Typography,
  Table,
  Select,
  InputNumber,
  Space,
} from '@xiaoyaoliu/x-arco-design';

const defaultData = [...new Array(5)].map((_, index) => {
  return {
    key: index,
    name: 'Jane Doe ' + index,
    salary: 23000,
    email: 'jane.doe@example.com',
    gender: index % 2 > 0 ? 'male' : 'female',
    age: 20 + index,
  };
});

function ModalForm(props) {
  return (
    <div>
      <Modal visible title="Add" footer={null} onCancel={props.onCancel}>
        <Form id="modalForm" autoComplete="off">
          <Form.Item field="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 5 }} label="">
            <Space>
              <Button onClick={props.onCancel}>Cancel</Button>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

function RefreshForm() {
  return (
    <Form id="refreshForm" layout="inline" style={{ width: 'auto' }}>
      <Form.Item field="keyword">
        <Input.Search placeholder="enter keyword" />
      </Form.Item>
      <Button htmlType="submit">Refresh</Button>
    </Form>
  );
}

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Form.Provider
        onFormValuesChange={(name, changedValues, info) => {
          console.log('onFormValuesChange: ', name, changedValues, info);
        }}
        onFormSubmit={(name, values, info) => {
          console.log('onFormSubmit: ', name, values, info);

          if (name === 'modalForm') {
            info.forms.searchForm.setFieldsValue({
              email: values.email,
            });
            setVisible(false);
          }

          Message.info({
            icon: <span></span>,
            content: (
              <div style={{ textAlign: 'left' }}>
                <span>form values:</span>
                <pre>
                  {JSON.stringify(
                    {
                      ...info.forms.searchForm.getFieldsValue(),
                      ...info.forms.refreshForm.getFieldsValue(),
                    },
                    null,
                    2,
                  )}
                </pre>
              </div>
            ),
          });
        }}
      >
        <Form id="searchForm" layout="vertical">
          <Grid.Row gutter={24}>
            <Grid.Col span={8}>
              <Form.Item label="Name" field="name">
                <Input placeholder="enter name" />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item label="Gender" field="gender">
                <Select
                  placeholder="select gender"
                  options={['All', 'Female', 'Male', 'Unknown']}
                />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item label="Age" field="age">
                <InputNumber placeholder="enter age" />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>
          <Space>
            <Form.Item field="email" shouldUpdate noStyle>
              {(values) => {
                return (
                  <Tag color="arcoblue">email: {values.email || 'null'}</Tag>
                );
              }}
            </Form.Item>
            <Button htmlType="submit" type="primary">
              Search
            </Button>
            <Button
              onClick={() => {
                setVisible(true);
              }}
            >
              Add filter
            </Button>
          </Space>
        </Form>

        <br />
        <br />
        <Grid.Row justify="space-between" align="center">
          <Typography.Text style={{ fontSize: 18 }} bold>
            Result
          </Typography.Text>
          <RefreshForm />
        </Grid.Row>
        <br />
        {visible && (
          <ModalForm
            onCancel={() => {
              setVisible(false);
            }}
          />
        )}
      </Form.Provider>
      <Table
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
          },
          {
            title: 'Salary',
            dataIndex: 'salary',
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
          },
          {
            title: 'Age',
            dataIndex: 'age',
          },
          {
            title: 'Email',
            dataIndex: 'email',
          },
        ]}
        data={defaultData}
      />
    </div>
  );
}

export default App;
```

## useWatch

可以通过 `Form.useWatch` 监听表单内部字段值的变动。（`2.33.0` 支持）

```tsx
import {
  Form,
  Typography,
  Input,
  InputNumber,
} from '@xiaoyaoliu/x-arco-design';

function App() {
  const [form] = Form.useForm();
  const name = Form.useWatch('name', form);
  const age = Form.useWatch('age', form);
  return (
    <div>
      <Form form={form} autoComplete="off">
        <Form.Item label="Name" field="name">
          <Input placeholder="enter name" />
        </Form.Item>

        <Form.Item label="Age" field="age">
          <InputNumber placeholder="enter age" />
        </Form.Item>
        <Form.Item label=" ">
          <Typography.Text code>
            Name: {name}; Age: {age}
          </Typography.Text>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
```

## 获取表单上下文

在函数式组件里可以使用 `Form.useFormContext` 获取 Form 组件上下文，便于表单控件的封装。(version `2.33.0`, `isSubmitting` in `2.44.0`). `isSubmitting` 仅在通过 `type=submit` 的 `button` 触发表单 `Form` 的 `onSubmit` 属性进行提交时有效。如果 `onSubmit` 内部包含异步逻辑，请返回一个 Promise.

```tsx
import React, { useEffect, useRef } from 'react';
import {
  Form,
  Input,
  Button,
  Switch,
  InputNumber,
  Message,
} from '@xiaoyaoliu/x-arco-design';

const FormItem = Form.Item;

function DemoButton() {
  const { form, disabled, isSubmitting } = Form.useFormContext();
  const messageRef = useRef(null);

  useEffect(() => {
    if (isSubmitting) {
      messageRef.current = 'id-' + Date.now();
      Message.loading({
        id: messageRef.current,
        content: 'submitting',
        duration: 0,
      });
    } else {
      if (messageRef.current) {
        const isError = Object.keys(form.getFieldsError()).length > 0;

        Message[isError ? 'error' : 'success']({
          id: messageRef.current,
          content: isError ? 'validate failed' : 'submitted',
          duration: 3000,
        });
      }
      messageRef.current = null;
    }
  }, [isSubmitting]);

  return (
    <>
      <Button
        type="primary"
        htmlType="submit"
        disabled={disabled}
        loading={isSubmitting}
        style={{ marginRight: 24 }}
      >
        Submit
      </Button>
      <Button
        disabled={disabled}
        style={{ marginRight: 24 }}
        onClick={() => {
          form.resetFields();
        }}
      >
        Reset
      </Button>
    </>
  );
}

function App() {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = React.useState(false);

  return (
    <Form
      form={form}
      autoComplete="off"
      style={{ width: 600 }}
      initialValues={{ name: 'admin' }}
      disabled={disabled}
      onValuesChange={(v, vs) => {
        console.log(v, vs);
      }}
      onSubmit={(v) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(1);
          }, 3000);
        });
      }}
    >
      <FormItem label="Disabled" disabled={false}>
        <Switch onChange={setDisabled}></Switch>
      </FormItem>
      <FormItem label="Username" field="name" rules={[{ required: true }]}>
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem
        label="Age"
        field="age"
        rules={[{ required: true, type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber placeholder="please enter your age" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <DemoButton />
      </FormItem>
    </Form>
  );
}

export default App;
```

## useFormState

可以通过 `Form.useFormState` 监听表单内部状态的变动。（`2.44.0` 支持）

`Form.useFormState` to monitor the changes of status inside the form. (`2.44.0` support)

```tsx
import {
  Form,
  Typography,
  Input,
  InputNumber,
  Space,
  Button,
} from '@xiaoyaoliu/x-arco-design';

function App() {
  const [form] = Form.useForm();
  const ageState = Form.useFormState('age', form) || {};

  console.log(ageState);

  return (
    <div>
      <Form form={form} autoComplete="off">
        <Form.Item
          label="Age"
          field="age"
          rules={[
            { required: true },
            {
              validator: async (value, callback) => {
                return new Promise((resolve) => {
                  if (value !== 20) {
                    setTimeout(() => {
                      callback('Age must be 20');
                      resolve();
                    }, 1000);
                  } else {
                    resolve();
                  }
                });
              },
            },
          ]}
        >
          <InputNumber placeholder="enter age" />
        </Form.Item>
        <Form.Item label=" ">
          <div>
            表单提交中:
            <Typography.Text code>
              {JSON.stringify(ageState.isSubmitting)}
            </Typography.Text>
          </div>
          <div>
            校验状态:
            <Typography.Text code>{ageState.validateStatus}</Typography.Text>
          </div>
          <div>
            错误信息:
            <Typography.Text code>
              {JSON.stringify(ageState.errors, null, 2)}
            </Typography.Text>
          </div>
          <div>
            警告信息:
            <Typography.Text code>
              {JSON.stringify(ageState.warnings, null, 2)}
            </Typography.Text>
          </div>
        </Form.Item>

        <Form.Item label=" ">
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
```

## API

### Form

| 参数名             | 描述                                                                                                                                | 类型                                                                                                                                                                                                                                                                                | 默认值                    | 版本                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------- |
| disabled           | 统一配置表单控件是否可用                                                                                                            | boolean                                                                                                                                                                                                                                                                             | `-`                       | -                    |
| id                 | 设置后，会作为表单控件 `id`的前缀。                                                                                                 | string                                                                                                                                                                                                                                                                              | `-`                       | -                    |
| labelAlign         | 标签的文本对齐方式                                                                                                                  | 'left' \| 'right'                                                                                                                                                                                                                                                                   | `right`                   | -                    |
| layout             | 表单的布局，有三种布局，水平、垂直、多列。                                                                                          | 'horizontal' \| 'vertical' \| 'inline'                                                                                                                                                                                                                                              | `horizontal`              | -                    |
| requiredSymbol     | 是否在 required 的时候显示加重的红色星号，设置 position 可选择将星号置于 label 前/后                                                | boolean \| { position: 'start' \| 'end' }                                                                                                                                                                                                                                           | `true`                    | `position` in 2.24.0 |
| size               | 不同尺寸。                                                                                                                          | 'mini' \| 'small' \| 'default' \| 'large'                                                                                                                                                                                                                                           | `-`                       | -                    |
| colon              | 是否显示标签后的一个冒号，优先级小于 `Form.Item` 中 `colon` 的优先级。(`ReactNode` in `v2.41.0`)                                    | boolean \| ReactNode                                                                                                                                                                                                                                                                | `-`                       | -                    |
| className          | 节点类名                                                                                                                            | string \| string[]                                                                                                                                                                                                                                                                  | `-`                       | -                    |
| form               | form                                                                                                                                | [FormInstance](#forminstance)&lt;FormData, FieldValue, FieldKey&gt;                                                                                                                                                                                                                 | `-`                       | -                    |
| initialValues      | 设置表单初始值                                                                                                                      | Partial&lt;FormData&gt;                                                                                                                                                                                                                                                             | `-`                       | -                    |
| labelCol           | `<label>`标签布局，同[<Grid.Col>](/react/components/grid)组件接收的参数相同，可以配置`span`和`offset`值，会覆盖全局的`labelCol`设置 | [ColProps](grid#col)                                                                                                                                                                                                                                                                | `{ span: 5, offset: 0 }`  | -                    |
| onChange           | 表单项值改变时候触发。和 onValuesChange 不同的是只会在用户操作表单项时触发                                                          | (value: Partial&lt;FormData&gt;, values: Partial&lt;FormData&gt;) =&gt; void                                                                                                                                                                                                        | `-`                       | -                    |
| onValuesChange     | 任意表单项值改变时候触发。第一个参数是被改变表单项的值，第二个参数是所有的表单项值                                                  | (value: Partial&lt;FormData&gt;, values: Partial&lt;FormData&gt;) =&gt; void                                                                                                                                                                                                        | `-`                       | -                    |
| scrollToFirstError | 验证失败后滚动到第一个错误字段。(`ScrollIntoViewOptions` 类型在 `2.19.0` 开始支持)                                                  | boolean \| ScrollIntoViewOptions                                                                                                                                                                                                                                                    | `-`                       | -                    |
| style              | 节点样式                                                                                                                            | CSSProperties                                                                                                                                                                                                                                                                       | `-`                       | -                    |
| validateMessages   | 校验提示信息模板 [demo](/react/components/form#表单校验信息模板)                                                                    | Partial&lt;{[key in keyof ValidateMessagesTemplateType]: ValidateMessagesTemplateType[key] extends string? ValidateMessagesTemplateType[key] \| ((data, { label }) =&gt; any): Record&lt;keyof ValidateMessagesTemplateType[key], string \| ((data, { label }) =&gt; any)&gt;;}&gt; | `-`                       | 2.32.0               |
| validateTrigger    | 触发验证的时机。                                                                                                                    | string \| string[]                                                                                                                                                                                                                                                                  | `onChange`                | 2.28.0               |
| wrapper            | 配置最外层标签，可以是 html 标签或是组件                                                                                            | [ComponentType](#componenttype)                                                                                                                                                                                                                                                     | `form`                    | -                    |
| wrapperCol         | 控件布局，同`labelCol`的设置方法一致，会覆盖全局的`wrapperCol`设置，[ColProps](/react/components/grid)                              | [ColProps](grid#col)                                                                                                                                                                                                                                                                | `{ span: 19, offset: 0 }` | -                    |
| wrapperProps       | 配置 `wrapper` 之后，可以传一些参数到 wrapper 上。                                                                                  | [IndexedObject](#indexedobject)                                                                                                                                                                                                                                                     | `-`                       | -                    |
| onSubmit           | 数据验证成功后回调事件                                                                                                              | (values: FormData) => void                                                                                                                                                                                                                                                          | `-`                       | -                    |
| onSubmitFailed     | 数据验证失败后回调事件                                                                                                              | (errors: { [key: string]: [FieldError](#fielderror) }) => void                                                                                                                                                                                                                      | `-`                       | 2.21.0               |

### Form.Item

| 参数名            | 描述                                                                                                                                                                                                                              | 类型                                                                                                                                                                                     | 默认值     | 版本                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------- |
| disabled          | 是否禁用，优先级高于 `Form` 的 `disabled` 属性                                                                                                                                                                                    | boolean                                                                                                                                                                                  | `-`        | -                    |
| hasFeedback       | 是否显示校验图标，配置 validateStatus 使用。                                                                                                                                                                                      | boolean                                                                                                                                                                                  | `-`        | -                    |
| hidden            | 隐藏表单项. 表单字段值仍然会被获取                                                                                                                                                                                                | boolean                                                                                                                                                                                  | `-`        | 2.29.0               |
| required          | 是否必选，会在 `label` 标签前显示加重红色符号，如果这里不设置，会从 rules 中寻找是否是 required                                                                                                                                   | boolean                                                                                                                                                                                  | `-`        | -                    |
| trigger           | 接管子节点，搜集子节点值的时机。                                                                                                                                                                                                  | string                                                                                                                                                                                   | `onChange` | -                    |
| triggerPropName   | 子节点被接管的值的属性名，默认是 `value`,比如 `<Checkbox>` 为 `checked`。                                                                                                                                                         | string                                                                                                                                                                                   | `value`    | -                    |
| labelAlign        | 标签的文本对齐方式，优先级高于 `Form`                                                                                                                                                                                             | 'left' \| 'right'                                                                                                                                                                        | `right`    | -                    |
| requiredSymbol    | 是否在 required 的时候显示加重的红色星号，设置 position 可选择将星号置于 label 前/后                                                                                                                                              | boolean \| { position: 'start' \| 'end' }                                                                                                                                                | `true`     | `position` in 2.24.0 |
| validateStatus    | 校验状态                                                                                                                                                                                                                          | 'success' \| 'warning' \| 'error' \| 'validating'                                                                                                                                        | `-`        | -                    |
| colon             | 是否显示标签后的一个冒号，优先级小于 `Form.Item` 中 `colon` 的优先级。(`ReactNode` in `v2.41.0`)                                                                                                                                  | boolean \| ReactNode                                                                                                                                                                     | `-`        | -                    |
| extra             | 额外的提示内容。                                                                                                                                                                                                                  | ReactNode                                                                                                                                                                                | `-`        | -                    |
| help              | 自定义校验文案                                                                                                                                                                                                                    | ReactNode                                                                                                                                                                                | `-`        | -                    |
| label             | 标签的文本                                                                                                                                                                                                                        | ReactNode                                                                                                                                                                                | `-`        | -                    |
| className         | 节点类名                                                                                                                                                                                                                          | string \| string[]                                                                                                                                                                       | `-`        | -                    |
| dependencies      | 依赖的字段。                                                                                                                                                                                                                      | string[]                                                                                                                                                                                 | `-`        | 2.40.0               |
| field             | 受控组件的唯一标示                                                                                                                                                                                                                | FieldKey                                                                                                                                                                                 | `-`        | -                    |
| initialValue      | 设置控件初始值.(初始值，请不要使用受控组件的 defaultValue 了)                                                                                                                                                                     | FieldValue                                                                                                                                                                               | `-`        | -                    |
| labelCol          | `<label>`标签布局，同[<Grid.Col>](/react/components/grid)组件接收的参数相同，可以配置`span`和`offset`值，会覆盖全局的`labelCol`设置                                                                                               | [ColProps](grid#col)                                                                                                                                                                     | `-`        | -                    |
| normalize         | 将控件的 `value` 进行一定的转换再保存到 form 中。                                                                                                                                                                                 | (value: FieldValue \| undefined,prevValue: FieldValue \| undefined,allValues: Partial&lt;FormData&gt;) =&gt; any                                                                         | `-`        | -                    |
| noStyle           | 不渲染任何外部标签/样式，只进行字段绑定。**注意**: 设置该属性为 true 时，该字段若未通过校验，错误信息将不会显示出来。可以传入对象，并设置 showErrorTip（ `2.5.0` 开始支持） 为 true，错误信息将会展示在上层 formItem 节点下。     | boolean \| { showErrorTip: boolean }                                                                                                                                                     | `-`        | -                    |
| rules             | 受控模式下的验证规则，[RulesProps](#rules)                                                                                                                                                                                        | RulesProps&lt;FieldValue&gt;[]                                                                                                                                                           | `-`        | -                    |
| shouldUpdate      | 是否在其他控件值改变时候重新渲染当前区域。设置为 true 时候，表单的任意改变都会重新渲染该区域。                                                                                                                                    | \| boolean\| ((prevValues: Partial&lt;FormData&gt;,currentValues: Partial&lt;FormData&gt;,info: {isFormList?: boolean;field?: FieldKey \| FieldKey[];isInner?: boolean;}) =&gt; boolean) | `-`        | -                    |
| style             | 节点样式                                                                                                                                                                                                                          | CSSProperties                                                                                                                                                                            | `-`        | -                    |
| tooltip           | 提示文本                                                                                                                                                                                                                          | ReactNode \| ([TooltipProps](tooltip#tooltip) & { icon?: ReactElement })                                                                                                                 | `-`        | 2.43.0               |
| validateTrigger   | 触发验证的时机。取值和跟包裹的控件有关系，控件支持的触发事件，都可以作为值。例如`Input`支持的 `onFocus`、 `onBlur`、 `onChange` 都可以作为 `validateTrigger` 的值。传递为 `[]` 时，仅会在调用表单 `validate` 方法时执行校验规则。 | string \| string[]                                                                                                                                                                       | `onChange` | -                    |
| wrapperCol        | 控件布局，同`labelCol`的设置方法一致，会覆盖全局的`wrapperCol`设置，[ColProps](/react/components/grid)                                                                                                                            | [ColProps](grid#col)                                                                                                                                                                     | `-`        | -                    |
| formatter         | 将 Form 内保存的当前控件对应的值进行一定的转换，再传递给控件。                                                                                                                                                                    | (value: FieldValue \| undefined) => any                                                                                                                                                  | `-`        | 2.23.0               |
| getValueFromEvent | 指定在子节点触发`onChange`事件时如何处理值。（如果自定义了`trigger`属性，那么这里的参数就是对应的事件回调函数的参数类型）                                                                                                         | (...args) => FieldValue                                                                                                                                                                  | `-`        | 2.23.0               |

### Form.List

| 参数名       | 描述                                                                                       | 类型                                                                                                                                                                                                                            | 默认值 | 版本   |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ |
| noStyle      | FormItemProps['noStyle'].`rules` 存在时默认为 `false`(需要渲染校验信息)，否则默认为 `true` | [FormItemProps](form#formitem)['noStyle']                                                                                                                                                                                       | `-`    | 2.46.0 |
| field        | 字段名                                                                                     | FieldKey **(必填)**                                                                                                                                                                                                             | `-`    | -      |
| initialValue | 初始值                                                                                     | SubFieldValue[]                                                                                                                                                                                                                 | `-`    | 2.22.0 |
| rules        | 受控模式下的验证规则，[RulesProps](#rules)                                                 | RulesProps&lt;SubFieldValue[]&gt;[]                                                                                                                                                                                             | `-`    | 2.46.0 |
| children     | 函数类型的 children                                                                        | (fields: { key: number; field: SubFieldKey }[],operation: {add: (defaultValue?: SubFieldValue, index?: number) => void;remove: (index: number) => void;move: (fromIndex: number, toIndex: number) => void;}) => React.ReactNode | `-`    | -      |

### Form.Provider(`2.30.0`)

| 参数名             | 描述                                             | 类型                                                                                                                | 默认值 |
| ------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ------ |
| onFormSubmit       | 包裹的任意 `Form` 组件触发提交时，该方法会被调用 | (id: string \| undefined,values,{forms,}: {forms: {[key: string]: [FormInstance](#forminstance);};}) => void        | `-`    |
| onFormValuesChange | 包裹的任意 `Form` 组件的值改变时，该方法会被调用 | (id: string \| undefined,changedValues,{forms,}: {forms: {[key: string]: [FormInstance](#forminstance);};}) => void | `-`    |

### FormInstance

```js
export type FormInstance<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData
> = Pick<
  Store<FormData, FieldValue, FieldKey>,
  | "getFieldsValue"
  | "getFieldValue"
  | "getFieldError"
  | "getFieldsError"
  | "getTouchedFields"
  | "getFields"
  | "setFieldValue"
  | "setFieldsValue"
  | "setFields"
  | "resetFields"
  | "clearFields"
  | "submit"
  | "validate"
  | "getFieldsState"
> & {
  scrollToField: (field: FieldKey, options?: ScrollIntoViewOptions) => void;
  getInnerMethods: (
    inner?: boolean
  ) => InnerMethodsReturnType<FormData, FieldValue, FieldKey>;
};
```

### InnerMethodsReturnType

```js
export type InnerMethodsReturnType<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData
> = Pick<
  Store<FormData, FieldValue, FieldKey>,
  | "registerField"
  | "registerStateWatcher"
  | "registerWatcher"
  | "innerSetInitialValues"
  | "innerSetInitialValue"
  | "innerSetCallbacks"
  | "innerSetFieldValue"
  | "innerGetStore"
  | "innerCollectFormState"
  | "innerGetFieldValue"
>;
```

### ComponentType

```js
export type ComponentType =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;
```

### IndexedObject

```js
export type IndexedObject = {
  [key: string]: any,
};
```

### FieldError

```js
export type FieldError<FieldValue = any> = {
  value?: FieldValue,
  message?: ReactNode,
  type?: string,
  requiredError?: boolean,
};
```

### Rules

底层使用 [b-validate](https://github.com/PengJiyuan/b-validate)。

```js
export interface RulesProps {
  // 触发校验的时机
  validateTrigger?: string | string[];
  // 校验失败时候以 `error` 或 `warning` 形式展示错误信息。当设置为 `warning` 时不会阻塞表单提交
  validateLevel?: 'error' | 'warning';
  required?: boolean;
  type?: string;
  length?: number;
  // Array
  maxLength?: number;
  minLength?: number;
  includes?: boolean;
  deepEqual?: any;
  empty?: boolean;
  // Number
  min?: number;
  max?: number;
  equal?: number;
  positive?: boolean;
  negative?: boolean;
  // Object
  hasKeys?: string[];
  // String
  match?: RegExp;
  uppercase?: boolean;
  lowercase?: boolean;
  // Boolean
  true?: boolean;
  false?: boolean;
  // custom
  validator?: (value, callback: (error?: ReactNode) => void) => void;
  message?: string;
}
```

### this.form

通过`ref`可以拿到`this.form`，`this.form`包含了表单的验证、设值等常用操作。

```js
<Form ref={(ref) => (this.form = ref)}>
  <FormItem>...</FormItem>
</Form>
```

| 方法             |                                                                          描述                                                                          |                                                               类型 |     版本 |
| ---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------------------------------------------------------: | -------: |
| validate         |                校验并获取表单输入域的值与 Errors，如果不设置 fields 的话，会验证所有的 fields。支持 callback 和 promise 两种使用方法。                 |    `Function(fields?: string[], callback(errors, values) => void)` |
| submit           |                                                                        提交表单                                                                        |                                                         `Function` |
| setFieldValue    |                                                                  设置一个表单控件的值                                                                  |                                   `Function(field: string, value)` |
| setFields        |                                                              设置一组表单控件的值和报错。                                                              | `Function({ [field]: string: { value: any, error: FieldError } })` |
| setFieldsValue   |                                                                  设置多个表单控件的值                                                                  |                               `Function({[field]: string, value})` |
| getFieldValue    |                       获取一个表单控件的值。**请不要把返回值直接作为 useEffect 的依赖，其返回值会被深克隆，引用地址会发生改变**                        |                                          `Function(field: string)` |
| getFields        |           获取全部表单项的值，包括被创建后销毁的表单项。**请不要把返回值直接作为 useEffect 的依赖，其返回值会被深克隆，引用地址会发生改变**            |                                                         `Function` |
| getFieldsValue   | 获取一组表单控件的值，如果不设置 fields 的话，会获取所有的 fields。**请不要把返回值直接作为 useEffect 的依赖，其返回值会被深克隆，引用地址会发生改变** |                                       `Function(fields: string[])` |
| getFieldError    |                                                               获取一个表单控件的错误状态                                                               |                                          `Function(field: string)` |
| getFieldsError   |                                    获取一组表单控件的错误状态，如果不设置 fields 的话，会获取所有的控件的错误状态。                                    |                                      `Function(fields?: string[])` |
| scrollToField    |          滚动到指定表单字段位置。[ScrollIntoViewOptions](https://github.com/stipsan/scroll-into-view-if-needed/blob/master/src/index.ts#L16)           |         `Function(field: string, options?: ScrollIntoViewOptions)` |
| getTouchedFields |                                                                   获取被操作过的字段                                                                   |                                                   `() => string[]` |
| resetFields      |                                                               重置表单控件的值变为初始值                                                               |                                       `Function(field?: string[])` |
| clearFields      |                  清除表单控件的值以及校验状态。等同于 `form.setFields({ [field]: { value: undefined; error: null, warning: null } })`                  |                                       `Function(field?: string[])` | `2.29.0` |

### `validate` 用法

```js
this.form.validate((errors, values) => {
  console.log(errors, values);
});
// 或者
this.form
  .validate()
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error.name);
    console.log(error.message);
    console.log(error.errors);
  });
// 或者 (注意要在 async 方法中使用)
try {
  const values = await this.form.validate();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.errors);
}
```

### `setFields` 用法

```js
this.form.setFields({
  name: {
    value: 'pjy',
    error: {
      message: 'Yes, I know!',
    },
    warning: 'warning...',
  },
});
```

## 常见问题

### `Switch` 、 `Checkbox` 的选中状态不受 `Form.Item` 的控制？

在 `FormItem` 上设置 `triggerPropName` 为 `checked`。
其他表单控件受控属性不是 `value` 时，可类似方式处理。
如 `<Form.Item field="upload" triggerPropName="fileList"><Upload/></Form.Item>`

### 如何设置表单控件的默认值？（为什么给控件例如 Input ，直接设置 defaultValue 不生效）

在被 FormItem 包裹，并且 Form.Item 设置了 field 属性的控件上，不要再设置 defaultValue 和 value 属性。 可以在 Form.Item 上通过 initialValue 或 Form 的 initialValues 属性来设置默认值。

### 为什么无法调用 `Modal` 里嵌套的 `Form` 的方法？

例如以下使用方式：

```js
// ...
const [form] = Form.useForm();
useEffect(() => {
  form.setFieldsValue({});
}, []);
return (
  <div>
    <Modal visible={visible}>
      <Form form={form}>{/** ... */}</Form>
    </Modal>
  </div>
);
```

这是因为在调用 form 的方法时，`Modal` 还未挂载，`Form` 还未创建。 可以设置 Modal 的 `mountOnEnter=false` 。

### Form.Control

非常非常极其不建议直接使用`Form.Control`. 在`1.15.0`及以上版本，组件库对 `Form.Item` 进行了较多功能扩展，简化了受控表单的写法，不再推荐直接使用`Form.Control` 组件（当然`1.x`兼容了此写法）。但升级到`2.0`后，`Form.Control`作为`Form`的一个内部组件，为了功能升级或 bugfix，可能会进行一些改动，较少考虑到外部直接使用的`场景`，所以非常建议使用`Form.Item`代替`Form.Control`。
