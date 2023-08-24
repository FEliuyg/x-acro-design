import type {
  DatePickerProps,
  YearPickerProps,
  MonthPickerProps,
  WeekPickerProps,
  QuarterPickerProps,
  RangePickerProps,
} from '@arco-design/web-react';

interface XPickerProps {
  bordered?: boolean;
}

interface XDatePickerProps extends DatePickerProps, XPickerProps {}
interface XYearPickerProps extends YearPickerProps, XPickerProps {}
interface XMonthPickerProps extends MonthPickerProps, XPickerProps {}
interface XWeekPickerProps extends WeekPickerProps, XPickerProps {}
interface XQuarterPickerProps extends QuarterPickerProps, XPickerProps {}
interface XRangePickerProps extends RangePickerProps, XPickerProps {}

export type {
  XDatePickerProps as DatePickerProps,
  XYearPickerProps as YearPickerProps,
  XMonthPickerProps as MonthPickerProps,
  XWeekPickerProps as WeekPickerProps,
  XQuarterPickerProps as QuarterPickerProps,
  XRangePickerProps as RangePickerProps,
};
