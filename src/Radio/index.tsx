import { Radio, RadioGroupProps, RadioProps } from '@arco-design/web-react';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import './index.less';

export default function XRadio(props: RadioProps) {
  return <Radio {...props} />;
}

interface XRadioGroupProps extends PropsWithChildren<RadioGroupProps> {
  buttonStyle?: 'solid' | 'semi' | 'transparent';
}

function XRadioGroup({
  buttonStyle = 'transparent',
  ...props
}: XRadioGroupProps) {
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
