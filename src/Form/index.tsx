import { Form } from '@arco-design/web-react';
import type {
  FormInstance,
  FormProps,
  FormItemProps,
} from '@arco-design/web-react';
import './index.less';
import { Ref, forwardRef } from 'react';
import { getFormInstance } from '@arco-design/web-react/es/Form/useForm';

const {
  Item,
  List,
  useForm,
  useFormState,
  Provider,
  useFormContext,
  useWatch,
  Control,
} = Form;

interface XFormProps extends FormProps {
  onFinish?: FormProps['onSubmit'];
  onFinishFailed?: FormProps['onSubmitFailed'];
  requiredMark?: boolean;
}

type FormComponent = typeof Form;

interface XFormComponent extends FormComponent {
  useFormInstance: typeof useFormInstance;
}

const XForm = forwardRef(
  (
    {
      requiredMark,
      requiredSymbol,
      onFinish,
      onFinishFailed,
      onSubmit,
      onSubmitFailed,
      ...restProps
    }: XFormProps,
    ref?: Ref<FormInstance<any, any, any>>,
  ) => {
    return (
      <Form
        ref={ref}
        requiredSymbol={requiredSymbol ?? requiredMark}
        onSubmit={onSubmit ?? onFinish}
        onSubmitFailed={onSubmitFailed ?? onFinishFailed}
        {...restProps}
      />
    );
  },
) as any as XFormComponent;

interface XFormItemProps extends FormItemProps {
  name?: string;
  valuePropName?: string;
}

const XFormItem: typeof Item = forwardRef(
  (
    {
      name,
      field,
      valuePropName,
      triggerPropName,
      ...restProps
    }: XFormItemProps,
    ref?: Ref<any>,
  ) => {
    return (
      <Item
        ref={ref}
        field={field ?? name}
        triggerPropName={triggerPropName ?? valuePropName}
        {...restProps}
      />
    );
  },
) as any as typeof Item;

function useFormInstance() {
  return getFormInstance();
}

XForm.Item = XFormItem;
XForm.List = List;
XForm.Provider = Provider;
XForm.Control = Control;
XForm.useForm = useForm;
XForm.useFormState = useFormState;
XForm.useFormContext = useFormContext;
XForm.useWatch = useWatch;
XForm.useFormInstance = useFormInstance;

export { FormInstance };

export default XForm as XFormComponent;
