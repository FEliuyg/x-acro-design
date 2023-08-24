import React from 'react';
import { DatePicker } from '@arco-design/web-react';
import classNames from 'classnames';
import {
  DatePickerProps,
  YearPickerProps,
  MonthPickerProps,
  QuarterPickerProps,
  WeekPickerProps,
  RangePickerProps,
} from './interface';
import './index.less';

const { YearPicker, MonthPicker, WeekPicker, RangePicker, QuarterPicker } =
  DatePicker;

export default function XDatePicker({
  bordered = true,
  className,
  ...restProps
}: DatePickerProps) {
  return (
    <DatePicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

function XYearPicker({
  bordered = true,
  className,
  ...restProps
}: YearPickerProps) {
  return (
    <YearPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

function XMonthPicker({
  bordered = true,
  className,
  ...restProps
}: MonthPickerProps) {
  return (
    <MonthPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

function XWeekPicker({
  bordered = true,
  className,

  ...restProps
}: WeekPickerProps) {
  return (
    <WeekPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

function XQuarterPicker({
  bordered = true,

  className,

  ...restProps
}: QuarterPickerProps) {
  return (
    <QuarterPicker
      className={classNames(className, {
        'arco-picker-borderless': !bordered,
      })}
      {...restProps}
    />
  );
}

function XRangePicker({
  bordered = true,
  className,
  ...restProps
}: RangePickerProps) {
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

export type * from './interface';
