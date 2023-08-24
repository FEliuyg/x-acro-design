import { PropsWithChildren } from 'react';
import type { RadioProps, RadioGroupProps } from '@arco-design/web-react';

interface XRadioGroupProps extends PropsWithChildren<RadioGroupProps> {
  buttonStyle?: 'solid' | 'semi' | 'transparent';
}

export type { RadioProps, XRadioGroupProps as RadioGroupProps };
