# Radio 单选

## 单选组

```tsx
import { Radio } from '@xiaoyaoliu/x-arco-design';
const RadioGroup = Radio.Group;

export default () => {
  return (
    <RadioGroup type="button" name="lang" defaultValue="Guangzhou">
      <Radio value="Beijing">Beijing</Radio>
      <Radio value="Shanghai">Shanghai</Radio>
      <Radio value="Guangzhou">Guangzhou</Radio>
      <Radio value="Shenzhen">Shenzhen</Radio>
    </RadioGroup>
  );
};
```

## 单选组大小

```tsx
import { Radio, Space } from '@xiaoyaoliu/x-arco-design';
const RadioGroup = Radio.Group;

export default () => {
  return (
    <Space direction="vertical">
      <RadioGroup
        type="button"
        name="lang"
        defaultValue="Guangzhou"
        size="mini"
      >
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio value="Guangzhou">Guangzhou</Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>

      <RadioGroup
        type="button"
        name="lang"
        defaultValue="Guangzhou"
        size="small"
      >
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio value="Guangzhou">Guangzhou</Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>

      <RadioGroup type="button" name="lang" defaultValue="Guangzhou">
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio value="Guangzhou">Guangzhou</Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>

      <RadioGroup
        type="button"
        name="lang"
        defaultValue="Guangzhou"
        size="large"
      >
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio value="Guangzhou">Guangzhou</Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>
    </Space>
  );
};
```

## 单选组类型

```tsx
import { Radio, Space } from '@xiaoyaoliu/x-arco-design';
const RadioGroup = Radio.Group;

export default () => {
  return (
    <Space direction="vertical">
      <RadioGroup
        type="button"
        name="lang"
        defaultValue="Guangzhou"
        buttonStyle="solid"
      >
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio value="Guangzhou">Guangzhou</Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>

      <RadioGroup
        type="button"
        name="lang"
        defaultValue="Guangzhou"
        buttonStyle="semi"
      >
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio value="Guangzhou">Guangzhou</Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>

      <RadioGroup type="button" name="lang" defaultValue="Guangzhou">
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio value="Guangzhou">Guangzhou</Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>
    </Space>
  );
};
```
