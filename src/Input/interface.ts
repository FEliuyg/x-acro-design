import type { InputProps } from '@arco-design/web-react';
import type {
  InputSearchProps,
  RefInputType,
} from '@arco-design/web-react/es/Input';

interface XInputProps extends InputProps {
  bordered?: boolean;
}

interface XInputSearchProps extends InputSearchProps {
  bordered?: boolean;
}

export type {
  XInputProps as InputProps,
  XInputSearchProps as InputSearchProps,
  RefInputType,
};
