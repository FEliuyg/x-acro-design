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
}

export interface XDatePickerProps extends DatePickerProps, XPickerProps {}

export default function XDatePicker({
  bordered = true,
  className,
  ...restProps
}: XDatePickerProps) {
  return (
    <DatePicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

interface XYearPickerProps extends YearPickerProps, XPickerProps {}

function XYearPicker({
  bordered = true,
  className,
  ...restProps
}: XYearPickerProps) {
  return (
    <YearPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

interface XMonthPickerProps extends MonthPickerProps, XPickerProps {}

function XMonthPicker({
  bordered = true,
  className,
  ...restProps
}: XMonthPickerProps) {
  return (
    <MonthPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

interface XWeekPickerProps extends WeekPickerProps, XPickerProps {}

function XWeekPicker({
  bordered = true,
  className,

  ...restProps
}: XWeekPickerProps) {
  return (
    <WeekPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

interface XQuarterPickerProps extends QuarterPickerProps, XPickerProps {}

function XQuarterPicker({
  bordered = true,

  className,

  ...restProps
}: XQuarterPickerProps) {
  return (
    <QuarterPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

interface XRangePickerProps extends RangePickerProps, XPickerProps {}

function XRangePicker({
  bordered = true,
  className,
  ...restProps
}: XRangePickerProps) {
  return (
    <RangePicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

XDatePicker.YearPicker = XYearPicker;
XDatePicker.MonthPicker = XMonthPicker;
XDatePicker.WeekPicker = XWeekPicker;
XDatePicker.QuarterPicker = XQuarterPicker;
XDatePicker.RangePicker = XRangePicker;

export {
  XDatePickerProps as DatePickerProps,
  XYearPickerProps as YearPickerProps,
  XMonthPickerProps as MonthPickerProps,
  XWeekPickerProps as WeekPickerProps,
  XQuarterPickerProps as QuarterPickerProps,
  XRangePickerProps as RangePickerProps,
};
