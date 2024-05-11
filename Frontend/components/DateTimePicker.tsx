"use client";
import React, { useState, useEffect } from "react";
import { TimePicker } from "antd";
import { Dayjs } from "dayjs";

const { RangePicker } = TimePicker;

type RangeValue = Parameters<
  NonNullable<React.ComponentProps<typeof RangePicker>["onChange"]>
>[0];

interface DateTimePickerProps {
  value: [Dayjs | null, Dayjs | null];
  onChange: (
    value: [Dayjs | null, Dayjs | null],
    dateString: [string, string]
  ) => void;
}
const convertToRangeValue = (
  values: [Dayjs | null, Dayjs | null]
): RangeValue => {
  return values && values[0] && values[1] ? [values[0], values[1]] : null;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({ value, onChange }) => {
  const [pickerValue, setPickerValue] = useState<RangeValue>(
    convertToRangeValue(value || [null, null])
  );

  useEffect(() => {
    setPickerValue(convertToRangeValue(value));
  }, [value]);

  const handleOnChange = (
    values: RangeValue,
    dateStrings: [string, string]
  ) => {
    const convertedValues: [Dayjs | null, Dayjs | null] = values
      ? [values[0], values[1]]
      : [null, null];
    setPickerValue(values);
    onChange(convertedValues, dateStrings);
  };

  return (
    <RangePicker value={pickerValue} format="HH:mm" onChange={handleOnChange} />
  );
};

export default DateTimePicker;
