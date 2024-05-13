import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import DateTimePicker from "./DateTimePicker";
import { FormItemProps } from "antd/lib/form";
import { RuleInputInterface } from "../app/utils/RuleInputInterface";
import { FormDataValuesInterface } from "../app/utils/FormDataValuesInterface";

import dayjs, { Dayjs } from "dayjs";

const { Option } = Select;

interface FormItemComponentProps extends FormItemProps {
  name: string;
  label: string;
  rules: RuleInputInterface[];
  placeholder?: string;
  onChange: (
    value: [Dayjs | null, Dayjs | null],
    dateString: [string, string]
  ) => void;
  options?: { value: string; label: string }[];
  value?:
    | FormDataValuesInterface[keyof FormDataValuesInterface]
    | [string, string]
    | undefined;
}

const FormItemComponent: React.FC<FormItemComponentProps> = ({
  name,
  label,
  rules,
  placeholder,
  onChange,
  options,
  value,
}) => {
  const convertValueToDateTimePickerValue = (
    value:
      | FormDataValuesInterface[keyof FormDataValuesInterface]
      | [string, string]
      | undefined
  ): [Dayjs | null, Dayjs | null] => {
    if (name === "date" && Array.isArray(value)) {
      return [
        value[0] ? dayjs(value[0]) : null,
        value[1] ? dayjs(value[1]) : null,
      ];
    }
    return [null, null];
  };

  const handleDateTimePickerChange = (
    value: [Dayjs | null, Dayjs | null],
    dateString: [string, string]
  ) => {
    onChange(value, dateString);
  };

  const dateTimePickerValue = convertValueToDateTimePickerValue(value);
  return (
    <Form.Item
      name={name}
      label={label}
      initialValue={value}
      rules={[...rules]}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
    >
      {name === "room" ? (
        <InputNumber type="number" placeholder={placeholder} />
      ) : name === "date" ? (
        <DateTimePicker
          value={dateTimePickerValue}
          onChange={handleDateTimePickerChange}
        />
      ) : name === "group" || name === "course" ? (
        <Select>
          {options?.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Input placeholder={placeholder} />
      )}
    </Form.Item>
  );
};

export default FormItemComponent;
