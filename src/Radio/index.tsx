import React from 'react';
import { Radio } from '@arco-design/web-react';
import classNames from 'classnames';
import { RadioProps, RadioGroupProps } from './interface';
import './index.less';

export default function XRadio(props: RadioProps) {
  return <Radio {...props} />;
}

function XRadioGroup({
  buttonStyle = 'transparent',
  ...props
}: RadioGroupProps) {
  return (
    <Radio.Group
      className={classNames(
        props.className,
        `arco-radio-button-${buttonStyle}`,
      )}
      {...props}
    />
  );
}

XRadio.Group = XRadioGroup;

export type * from './interface';
