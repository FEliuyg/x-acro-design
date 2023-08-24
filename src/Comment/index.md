# 评论 Comment

展示评论信息

## 基础用法

一个基本的评论组件，带有作者、头像、时间和操作。

```tsx
import React from 'react';
import { Comment, Avatar } from '@xiaoyaoliu/x-arco-design';
import {
  HeartOutlined,
  MessageOutlined,
  StarOutlined,
  StarFilled,
  HeartFilled,
} from '@easyv/react-icons';
import './demo.css';

const App = () => {
  const [like, setLike] = React.useState<boolean>(false);
  const [star, setStar] = React.useState<boolean>(false);
  const actions = [
    <button
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like)}
    >
      {like ? <HeartFilled style={{ color: '#f53f3f' }} /> : <HeartOutlined />}
      {83 + (like ? 1 : 0)}
    </button>,
    <button
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star)}
    >
      {star ? <StarFilled style={{ color: '#ffb400' }} /> : <StarOutlined />}
      {3 + (star ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="reply">
      <MessageOutlined /> Reply
    </button>,
  ];
  return (
    <Comment
      actions={actions}
      author="Socrates"
      avatar={
        <Avatar>
          <img
            alt="avatar"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
          />
        </Avatar>
      }
      content={<div>Comment body content.</div>}
      datetime="1 hour"
    />
  );
};

export default App;
```

## 对齐

通过 `align` 属性可以设置 `datetime` 和 `actions` 的对齐方式.

```tsx
import React from 'react';
import { Comment, Avatar } from '@xiaoyaoliu/x-arco-design';
import {
  HeartFilled,
  MessageOutlined,
  StarFilled,
  HeartOutlined,
  StarOutlined,
} from '@easyv/react-icons';
import './demo.css';

const App = () => {
  const [like, setLike] = React.useState(true);
  const [star, setStar] = React.useState(true);
  const actions = [
    <button
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like)}
    >
      {like ? <HeartFilled style={{ color: '#f53f3f' }} /> : <HeartOutlined />}
      {83 + (like ? 1 : 0)}
    </button>,
    <button
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star)}
    >
      {star ? <StarFilled style={{ color: '#ffb400' }} /> : <StarOutlined />}
      {3 + (star ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="reply">
      <MessageOutlined /> Reply
    </button>,
  ];
  return (
    <Comment
      actions={actions}
      align="right"
      author="Balzac"
      avatar={
        <Avatar>
          <img
            alt="avatar"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
          />
        </Avatar>
      }
      content={
        <div>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process.
        </div>
      }
      datetime="1 hour"
    />
  );
};

export default App;
```

## 嵌套评论

Comments 组件可以嵌套。

```tsx
import { Comment } from '@xiaoyaoliu/x-arco-design';
import { MessageOutlined } from '@easyv/react-icons';
import './demo.css';

const App = () => {
  const actions = (
    <span className="custom-comment-action">
      <MessageOutlined /> Reply
    </span>
  );
  return (
    <Comment
      actions={actions}
      author={'Socrates'}
      avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
      content={<div>Comment body content.</div>}
      datetime="1 hour"
    >
      <Comment
        actions={actions}
        author="Balzac"
        avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
        content={<div>Comment body content.</div>}
        datetime="1 hour"
      >
        <Comment
          actions={actions}
          author="Austen"
          avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"
          content={<div> Reply content </div>}
          datetime="1 hour"
        />
        <Comment
          actions={actions}
          author="Plato"
          avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          content={<div> Reply content </div>}
          datetime="1 hour"
        />
      </Comment>
    </Comment>
  );
};

export default App;
```

## 配合 List 使用

配合 List 组件展现评论列表。

```tsx
import React from 'react';
import { Comment, List } from '@xiaoyaoliu/x-arco-design';
import {
  HeartOutlined,
  MessageOutlined,
  HeartFilled,
  StarFilled,
  StarOutlined,
} from '@easyv/react-icons';
import './demo.css';

const App = () => {
  const [likes, setLikes] = React.useState<number[]>([]);
  const [stars, setStars] = React.useState<number[]>([]);
  const data = [
    {
      id: 1,
      author: 'Socrates',
      like: 13,
      star: 3,
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
      content: 'Comment body content.',
      datetime: '1 hour',
    },
    {
      id: 2,
      author: 'Balzac',
      like: 12,
      star: 1,
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp',
      content: 'Comment body content.',
      datetime: '2 hour',
    },
  ];
  return (
    <List bordered={false} header={<span>2 comments</span>}>
      {data.map((item) => {
        const like = likes.indexOf(item.id) > -1;
        const star = stars.indexOf(item.id) > -1;
        return (
          <List.Item key={item.id}>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
              actions={[
                <button
                  className="custom-comment-action"
                  key="heart"
                  onClick={() =>
                    setLikes(
                      like
                        ? likes.filter((x) => x !== item.id)
                        : [...likes, item.id],
                    )
                  }
                >
                  {like ? (
                    <HeartFilled style={{ color: '#f53f3f' }} />
                  ) : (
                    <HeartOutlined />
                  )}
                  {item.like + (like ? 1 : 0)}
                </button>,
                <button
                  className="custom-comment-action"
                  key="star"
                  onClick={() =>
                    setStars(
                      star
                        ? stars.filter((x) => x !== item.id)
                        : [...stars, item.id],
                    )
                  }
                >
                  {star ? (
                    <StarFilled style={{ color: '#ffb400' }} />
                  ) : (
                    <StarOutlined />
                  )}
                  {item.star + (star ? 1 : 0)}
                </button>,
                <button className="custom-comment-action" key="reply">
                  <MessageOutlined /> Reply
                </button>,
              ]}
            />
          </List.Item>
        );
      })}
    </List>
  );
};

export default App;
```

## 回复框

实现一个评论回复框。

```tsx
import { Comment, Button, Input } from '@xiaoyaoliu/x-arco-design';
import { MessageOutlined } from '@easyv/react-icons';
import './demo.css';

const App = () => {
  return (
    <Comment
      align="right"
      actions={
        <span className="custom-comment-action">
          <MessageOutlined /> Reply
        </span>
      }
      author="Balzac"
      avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
      content={
        <div>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process.
        </div>
      }
      datetime="1 hour"
    >
      <Comment
        align="right"
        actions={[
          <Button key="0" type="secondary">
            Cancel
          </Button>,
          <Button key="1" type="primary">
            Reply
          </Button>,
        ]}
        avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
        content={
          <div>
            <Input.TextArea placeholder="Here is you content." />
          </div>
        }
      ></Comment>
    </Comment>
  );
};

export default App;
```

## API

### Comment

| 参数名    | 描述                               | 类型                                                                              | 默认值 |
| --------- | ---------------------------------- | --------------------------------------------------------------------------------- | ------ |
| align     | 靠左/靠右 展示 datetime 和 actions | \| 'left'\| 'right'\| {datetime?: 'left' \| 'right';actions?: 'left' \| 'right';} | `-`    |
| actions   | 操作列表                           | ReactNode                                                                         | `-`    |
| author    | 作者名                             | ReactNode                                                                         | `-`    |
| avatar    | 头像                               | ReactNode                                                                         | `-`    |
| content   | 评论内容                           | ReactNode                                                                         | `-`    |
| datetime  | 时间描述                           | ReactNode                                                                         | `-`    |
| className | 节点类名                           | string \| string[]                                                                | `-`    |
| style     | 节点样式                           | CSSProperties                                                                     | `-`    |
