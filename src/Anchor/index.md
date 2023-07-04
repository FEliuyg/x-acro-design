# 锚点 Anchor

通过锚点可快速找到信息内容在当前页面的位置。

## 基本用法

基本用法，随着页面滚动，锚点浮动在页面固定位置。

```tsx
import { Anchor } from '@xiaoyaoliu/x-arco-design';
const AnchorLink = Anchor.Link;

const App = () => {
  return (
    <Anchor offsetTop={60} style={{ backgroundColor: 'var(--color-bg-2)' }}>
      <AnchorLink href="#Basic" title="Basic">
        <AnchorLink href="#Static" title="Static">
          <AnchorLink href="#Lineless-mode" title="Lineless mode" />
          <AnchorLink href="#Affix" title="Affix" />
        </AnchorLink>
      </AnchorLink>
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  );
};

export default App;
```

## 静态位置

设置 `affix=false` 不随着页面滚动，锚点处于固定位置。

`affix=false`, the anchor is on a fixed position and does't scroll with the page.

```tsx
import { Anchor } from '@xiaoyaoliu/x-arco-design';
const AnchorLink = Anchor.Link;

const App = () => {
  return (
    <Anchor affix={false}>
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  );
};

export default App;
```

## 无轴线模式

设置 `lineless` 时，可以使用无左侧轴线的锚点样式。

`lineless=true` to hide axis line on the left.

```tsx
import { Anchor } from '@xiaoyaoliu/x-arco-design';
const AnchorLink = Anchor.Link;

const App = () => {
  return (
    <Anchor affix={false} lineless>
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  );
};

export default App;
```

## 固钉样式

示例中的锚点将会出现在页面右侧。

当设置 `affix` 为 `true` 时，锚点组件将会嵌套在[固钉](/react/components/affix)组件内。通过 `affixStyle` 属性可以设置 `Affix` 组件的样式。

`affix=true` to wrap the anchor within [Affix](/react/components/affix) component. `affixStyle` can be used to set the style of `Affix` component.

```tsx
import { Anchor } from '@xiaoyaoliu/x-arco-design';
const AnchorLink = Anchor.Link;

const App = () => {
  return (
    <Anchor
      offsetBottom={40}
      affixStyle={{
        position: 'absolute',
        right: -170,
        top: '50%',
        zIndex: 1,
      }}
    >
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  );
};

export default App;
```

## 设置锚点滚动偏移量

可以设置 `boundary` 来定制锚点滚动偏移量。

`boundary` to customize the scrolling offset of the anchor.

```tsx
import { Anchor } from '@xiaoyaoliu/x-arco-design';
const AnchorLink = Anchor.Link;

const App = () => {
  return (
    <Anchor affix={false} boundary="center">
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  );
};

export default App;
```

## 点击锚点不记录历史

可以设置点击锚点而不改变浏览器历史。

```tsx
import { Anchor } from '@xiaoyaoliu/x-arco-design';
const AnchorLink = Anchor.Link;

const App = () => {
  return (
    <Anchor affix={false} hash={false}>
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  );
};

export default App;
```

## API

### Anchor

| 参数名          | 描述                                                                                                                                              | 类型                                                | 默认值  | 版本   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- | ------ |
| affix           | 是否固定。当设置为 `true`时，锚点组件将会嵌套在[固钉](/react/components/affix) 组件内                                                             | boolean                                             | `true`  | -      |
| animation       | 是否平滑滚动                                                                                                                                      | boolean                                             | `true`  | -      |
| hash            | 是否改变 hash，设置为 `false` 点击锚点不会改变页面 hash。                                                                                         | boolean                                             | `true`  | -      |
| lineless        | 没有左侧轴线的样式。                                                                                                                              | boolean                                             | `-`     | -      |
| offsetBottom    | 距离窗口底部达到指定偏移量后触发。 `Affix` 固钉组件的 `offsetBottom` 属性                                                                         | number                                              | `-`     | -      |
| offsetTop       | 距离窗口顶部达到指定偏移量后触发。即 `Affix` 固钉组件的 `offsetTop` 属性                                                                          | number                                              | `-`     | -      |
| targetOffset    | 容器中基准线的位置相对容器顶部的偏移量，在没有设置的时候，取值为滚动容器高度的一半。当锚点到达或离开基准线的时候会更新锚点的状态。                | number                                              | `-`     | 2.22.0 |
| boundary        | 滚动边界值，设置该值为数字后，将会在距离滚动容器 boundary 距离时停止滚动。设置为 end, start, center，目标元素将会对应滚动到底部，顶部，中间位置。 | number \| 'end' \| 'start' \| 'center' \| 'nearest' | `start` | -      |
| affixStyle      | 通过该属性可以设置 `Affix` 组件的样式                                                                                                             | CSSProperties                                       | `-`     | -      |
| className       | 节点类名                                                                                                                                          | string \| string[]                                  | `-`     | -      |
| scrollContainer | 滚动容器。传入选择器或者 dom 元素。                                                                                                               | string \| HTMLElement \| Window                     | `-`     | -      |
| style           | 节点样式                                                                                                                                          | CSSProperties                                       | `-`     | -      |
| onChange        | 滚动时锚点改变或点击锚点时触发                                                                                                                    | (newLink: string, oldLink: string) => void          | `-`     | -      |
| onSelect        | 点击锚点时候触发                                                                                                                                  | (newLink: string, oldLink: string) => void          | `-`     | -      |

### Anchor.Link

| 参数名    | 描述                                   | 类型                | 默认值 |
| --------- | -------------------------------------- | ------------------- | ------ |
| href      | 锚点链接                               | string              | `#`    |
| title     | 文本内容。可以是字符串或者自定义节点。 | string \| ReactNode | `-`    |
| className | 节点类名                               | string \| string[]  | `-`    |
| style     | 节点样式                               | CSSProperties       | `-`    |
