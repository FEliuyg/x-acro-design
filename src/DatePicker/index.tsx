import React from 'react';
import {
  DatePicker,
  DatePickerProps,
  YearPickerProps,
  MonthPickerProps,
  WeekPickerProps,
  QuarterPickerProps,
  RangePickerProps,
} from '@arco-design/web-react';
import classNames from 'classnames';
import './index.less';

const { YearPicker, MonthPicker, WeekPicker, RangePicker, QuarterPicker } =
  DatePicker;

interface XPickerProps {
  bordered?: boolean;
  open?: boolean;
  suffixIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  superNextIcon?: React.ReactNode;
  superPrevIcon?: React.ReactNode;
  onOpenChange?: (visible?: boolean) => void;
  renderExtraFooter?: () => React.ReactNode;
}

export interface XDatePickerProps extends DatePickerProps, XPickerProps {
  showNow?: boolean;
}

export default function XDatePicker({
  bordered = true,
  open,
  popupVisible,
  className,
  suffixIcon,
  prevIcon,
  nextIcon,
  superNextIcon,
  superPrevIcon,
  icons,
  extra,
  showNow,
  showNowBtn,
  onOpenChange,
  onVisibleChange,
  renderExtraFooter,
  ...restProps
}: XDatePickerProps) {
  const popupVisibleValue = popupVisible ?? open;
  const popupVisibleObj =
    popupVisible === undefined ? {} : { popupVisible: popupVisibleValue };
  return (
    <DatePicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...popupVisibleObj}
      icons={
        icons ?? {
          inputSuffix: suffixIcon,
          prev: prevIcon,
          prevDouble: superPrevIcon,
          next: nextIcon,
          nextDouble: superNextIcon,
        }
      }
      onVisibleChange={onVisibleChange ?? onOpenChange}
      extra={extra ?? renderExtraFooter?.()}
      showNowBtn={showNowBtn ?? showNow}
      {...restProps}
    />
  );
}

interface XYearPickerProps extends YearPickerProps, XPickerProps {}

function XYearPicker({
  bordered = true,
  open,
  popupVisible,
  className,
  suffixIcon,
  prevIcon,
  nextIcon,
  superNextIcon,
  superPrevIcon,
  icons,
  extra,
  onOpenChange,
  onVisibleChange,
  renderExtraFooter,
  ...restProps
}: XYearPickerProps) {
  const popupVisibleValue = popupVisible ?? open;
  const popupVisibleObj =
    popupVisible === undefined ? {} : { popupVisible: popupVisibleValue };

  return (
    <YearPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...popupVisibleObj}
      icons={
        icons ?? {
          inputSuffix: suffixIcon,
          prev: prevIcon,
          prevDouble: superPrevIcon,
          next: nextIcon,
          nextDouble: superNextIcon,
        }
      }
      onVisibleChange={onVisibleChange ?? onOpenChange}
      extra={extra ?? renderExtraFooter?.()}
      {...restProps}
    />
  );
}

interface XMonthPickerProps extends MonthPickerProps, XPickerProps {}

function XMonthPicker({
  bordered = true,
  open,
  popupVisible,
  className,
  suffixIcon,
  prevIcon,
  nextIcon,
  superNextIcon,
  superPrevIcon,
  icons,
  extra,
  onOpenChange,
  onVisibleChange,
  renderExtraFooter,
  ...restProps
}: XMonthPickerProps) {
  const popupVisibleValue = popupVisible ?? open;
  const popupVisibleObj =
    popupVisible === undefined ? {} : { popupVisible: popupVisibleValue };
  return (
    <MonthPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...popupVisibleObj}
      icons={
        icons ?? {
          inputSuffix: suffixIcon,
          prev: prevIcon,
          prevDouble: superPrevIcon,
          next: nextIcon,
          nextDouble: superNextIcon,
        }
      }
      onVisibleChange={onVisibleChange ?? onOpenChange}
      extra={extra ?? renderExtraFooter?.()}
      {...restProps}
    />
  );
}

interface XWeekPickerProps extends WeekPickerProps, XPickerProps {}

function XWeekPicker({
  bordered = true,
  open,
  popupVisible,
  suffixIcon,
  prevIcon,
  nextIcon,
  superNextIcon,
  superPrevIcon,
  icons,
  className,
  extra,
  onOpenChange,
  onVisibleChange,
  renderExtraFooter,
  ...restProps
}: XWeekPickerProps) {
  const popupVisibleValue = popupVisible ?? open;
  const popupVisibleObj =
    popupVisible === undefined ? {} : { popupVisible: popupVisibleValue };
  return (
    <WeekPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...popupVisibleObj}
      icons={
        icons ?? {
          inputSuffix: suffixIcon,
          prev: prevIcon,
          prevDouble: superPrevIcon,
          next: nextIcon,
          nextDouble: superNextIcon,
        }
      }
      onVisibleChange={onVisibleChange ?? onOpenChange}
      extra={extra ?? renderExtraFooter?.()}
      {...restProps}
    />
  );
}

interface XQuarterPickerProps extends QuarterPickerProps, XPickerProps {}

function XQuarterPicker({
  bordered = true,
  open,
  popupVisible,
  className,
  suffixIcon,
  prevIcon,
  nextIcon,
  superNextIcon,
  superPrevIcon,
  icons,
  extra,
  onOpenChange,
  onVisibleChange,
  renderExtraFooter,
  ...restProps
}: XQuarterPickerProps) {
  const popupVisibleValue = popupVisible ?? open;
  const popupVisibleObj =
    popupVisible === undefined ? {} : { popupVisible: popupVisibleValue };
  return (
    <QuarterPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...popupVisibleObj}
      icons={
        icons ?? {
          inputSuffix: suffixIcon,
          prev: prevIcon,
          prevDouble: superPrevIcon,
          next: nextIcon,
          nextDouble: superNextIcon,
        }
      }
      onVisibleChange={onVisibleChange ?? onOpenChange}
      extra={extra ?? renderExtraFooter?.()}
      {...restProps}
    />
  );
}

interface XRangePickerProps extends RangePickerProps, XPickerProps {}

function XRangePicker({
  bordered = true,
  open,
  popupVisible,
  className,
  suffixIcon,
  prevIcon,
  nextIcon,
  superNextIcon,
  superPrevIcon,
  icons,
  extra,
  onOpenChange,
  onVisibleChange,
  renderExtraFooter,
  ...restProps
}: XRangePickerProps) {
  const popupVisibleValue = popupVisible ?? open;
  const popupVisibleObj =
    popupVisible === undefined ? {} : { popupVisible: popupVisibleValue };
  return (
    <RangePicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...popupVisibleObj}
      icons={
        icons ?? {
          inputSuffix: suffixIcon,
          prev: prevIcon,
          prevDouble: superPrevIcon,
          next: nextIcon,
          nextDouble: superNextIcon,
        }
      }
      onVisibleChange={onVisibleChange ?? onOpenChange}
      extra={extra ?? renderExtraFooter?.()}
      {...restProps}
    />
  );
}

XDatePicker.YearPicker = XYearPicker;
XDatePicker.MonthPicker = XMonthPicker;
XDatePicker.WeekPicker = XWeekPicker;
XDatePicker.QuarterPicker = XQuarterPicker;
XDatePicker.RangePicker = XRangePicker;
