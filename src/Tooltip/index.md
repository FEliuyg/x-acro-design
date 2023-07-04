# 文字气泡 Tooltip

鼠标悬停、聚焦或点击在某个组件时，弹出的文字提示。

## 基础用法

鼠标移入，气泡出现，鼠标移出，气泡消失。

```tsx
import { Tooltip, Typography } from '@xiaoyaoliu/x-arco-design';
const { Text } = Typography;

const App = () => {
  return (
    <div>
      <Tooltip content="This is tooltip content">
        <Text style={{ marginRight: 20 }}>Mouse over to display tooltip</Text>
      </Tooltip>
      <Tooltip content="This is a two-line tooltip content.This is a two-line tooltip content.">
        <Text>Mouse over to display multiple lines tooltip</Text>
      </Tooltip>
    </div>
  );
};

export default App;
```

## 迷你尺寸

适用于小场景或数字气泡样式。

```tsx
import { Tooltip, Typography } from '@xiaoyaoliu/x-arco-design';
const { Text } = Typography;

const App = () => {
  return (
    <Tooltip mini content="123456789">
      <Text>Mouse over to display tooltip</Text>
    </Tooltip>
  );
};

export default App;
```

## 位置

Tooltip 支持 12 个不同的方位。分别为：`上左` `上` `上右` `下左` `下` `下右` `左上` `左` `左下` `右上` `右` `右下`。

`upper left` `upper` `upper right` `lower left` `down` `lower right` `upper left` `left` `lower left` `upper right` `right` `lower right`.

```tsx
import { Tooltip, Button } from '@xiaoyaoliu/x-arco-design';

function getStyle(top, left) {
  return {
    position: 'absolute',
    width: 80,
    top,
    left,
  };
}

const App = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: 440,
        height: 280,
      }}
    >
      <Tooltip position="tl" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(0, 70)}>TL</Button>
      </Tooltip>
      <Tooltip position="top" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(0, 180)}>Top</Button>
      </Tooltip>
      <Tooltip position="tr" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(0, 290)}>TR</Button>
      </Tooltip>
      <Tooltip position="lt" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(60, 10)}>LT</Button>
      </Tooltip>
      <Tooltip position="left" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(120, 10)}>Left</Button>
      </Tooltip>
      <Tooltip position="lb" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(180, 10)}>LB</Button>
      </Tooltip>
      <Tooltip position="rt" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(60, 350)}>RT</Button>
      </Tooltip>
      <Tooltip position="right" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(120, 350)}>Right</Button>
      </Tooltip>
      <Tooltip position="rb" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(180, 350)}>RB</Button>
      </Tooltip>
      <Tooltip position="bl" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(240, 70)}>BL</Button>
      </Tooltip>
      <Tooltip position="bottom" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(240, 180)}>Bottom</Button>
      </Tooltip>
      <Tooltip position="br" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(240, 290)}>BR</Button>
      </Tooltip>
    </div>
  );
};

export default App;
```

## 受控模式

通过 `popupVisible` 和 `onVisibleChange` 控制下拉框的展开和收起。
具体 onVisibleChange 的触发时机可查看[Trigger](/react/components/trigger#受控用法)组件文档

`popupVisible` and `onVisibleChange` to control the expansion and collapse of the drop-down box.
The specific trigger timing of onVisibleChange can be found in the [Trigger](/react/components/trigger#controlled-usage) component document

```tsx
import React from 'react';
import { Tooltip, Button, Switch, Typography } from '@xiaoyaoliu/x-arco-design';

const { Text } = Typography;

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Text style={{ marginRight: 10 }}>
        {visible ? 'Hide' : 'Show'} Tooltip
      </Text>
      <Switch
        onChange={() => {
          setVisible(!visible);
        }}
      ></Switch>
      <br />
      <br />
      <Tooltip
        position="bottom"
        content="Mouse over to display tooltip"
        popupVisible={visible}
      >
        <Button>Be Controled</Button>
      </Tooltip>
    </div>
  );
}

export default App;
```

## 不同颜色

通过 `color` 属性设置不同背景色的 `tooltip`

`color` property

```tsx
import { Tooltip, Button } from '@xiaoyaoliu/x-arco-design';
const colors = ['#3491FA', '#165DFF', '#722ED1'];

const App = () => {
  return (
    <div>
      {colors.map((color) => {
        return (
          <Tooltip key={color} color={color} content="tooltip text">
            <Button
              style={{
                marginRight: 20,
                background: color,
                color: '#fff',
              }}
            >
              {color}
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default App;
```

## API

### Tooltip

| 参数名              | 描述                                                            | 类型                                                                                           | 默认值  | 版本   |
| ------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------- | ------ |
| blurToHide          | 是否在失去焦点的时候关闭弹出框                                  | boolean                                                                                        | `true`  | -      |
| defaultPopupVisible | 默认的弹出框状态                                                | boolean                                                                                        | `-`     | -      |
| disabled            | 是否禁用弹出                                                    | boolean                                                                                        | `-`     | -      |
| mini                | 迷你尺寸                                                        | boolean                                                                                        | `-`     | -      |
| popupHoverStay      | 鼠标移入弹出框的话，弹出框会保留而不销毁                        | boolean                                                                                        | `true`  | -      |
| popupVisible        | 弹出框是打开还是关闭状态                                        | boolean                                                                                        | `-`     | -      |
| unmountOnExit       | 是否在隐藏的时候销毁 DOM 结构                                   | boolean                                                                                        | `true`  | -      |
| childrenPrefix      | 会在打开状态给元素加上一个类，格式为 `${childrenPrefix}-open`。 | string                                                                                         | `-`     | -      |
| color               | 弹出层背景色                                                    | string                                                                                         | `-`     | 2.22.0 |
| position            | 弹出框的方位，有 12 个方位可供选择                              | \| 'top'\| 'tl'\| 'tr'\| 'bottom'\| 'bl'\| 'br'\| 'left'\| 'lt'\| 'lb'\| 'right'\| 'rt'\| 'rb' | `top`   | -      |
| trigger             | 触发方式                                                        | [TriggerProps](trigger#trigger)['trigger']                                                     | `hover` | -      |
| content             | 弹出的内容                                                      | ReactNode                                                                                      | `-`     | -      |
| className           | 节点类名                                                        | string \| string[]                                                                             | `-`     | -      |
| style               | 节点样式                                                        | CSSProperties                                                                                  | `-`     | -      |
| triggerProps        | 可以接受所有 `Trigger` 组件的参数                               | Partial&lt;[TriggerProps](trigger#trigger)&gt;                                                 | `-`     | -      |
| getPopupContainer   | 弹出框挂载的节点                                                | (node: HTMLElement) => Element                                                                 | `-`     | -      |
| onVisibleChange     | 显示或隐藏时触发的回调                                          | (visible: boolean) => void                                                                     | `-`     | -      |
