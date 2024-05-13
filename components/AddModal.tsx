"use client";
import { Divider, Modal, message } from "antd";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItemComponent from "./FormItemComponent";
import { FormatingDateTime } from "@/app/utils/FormatingDateTime";
import { Dayjs } from "dayjs";
import { Event } from "@/app/utils/EventInteerface";
import { Filtering } from "@/app/utils/FilteringInterface";
import { FormDataValuesInterface } from "@/app/utils/FormDataValuesInterface";
import { dataForm } from "@/app/utils/DataForm";

interface AddModalProps {
  addModal: boolean;
  setAddModal: (value: boolean) => void;
  setEvents: (value: Event[]) => void;
  date: string;
  setfilterEvents: (value: Event[]) => void;
  filtering: Filtering;
}

const AddModal: React.FC<AddModalProps> = ({
  addModal,
  setAddModal,
  setEvents,
  date,
  setfilterEvents,
  filtering,
}) => {
  const [form] = useForm();

  const handleCancel = () => {
    setAddModal(false);
    form.resetFields();
  };

  const handleOk = () => {
    form.validateFields().then((values: FormDataValuesInterface) => {
      const start = {
        date: date,
        hours: new Date(values.date[0]).getHours(),
        minutes: new Date(values.date[0]).getMinutes(),
      };
      const end = {
        date: date,
        hours: new Date(values.date[1]).getHours(),
        minutes: new Date(values.date[1]).getMinutes(),
      };
      const data: Event = {
        title: values.title,
        start: FormatingDateTime(start),
        end: FormatingDateTime(end),
        extendedProps: {
          room: values.room.toString(),
          course: values.course,
          group: values.group.toString(),
          instructorName: values.instructorName,
        },
      };
      fetch(`https://inno-schedule-bot.onrender.com/create/`, {
        method: "POST",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((da) => {
          if (filtering.type === "courses") {
            setfilterEvents(
              da.filter(
                (event: Event) => event.extendedProps.course === filtering.value
              )
            );
          } else if (filtering.type === "groups") {
            setfilterEvents(
              da.filter((event: Event) =>
                event.extendedProps.group
                  ? event.extendedProps.group === filtering.value
                  : event
              )
            );
          }
        })
        .catch((error) => message.error(error.message));
      setAddModal(false);
      form.resetFields();
    });
  };

  const handleDateTimePickerChange = (
    value: [Dayjs | null, Dayjs | null],
    dateString?: [string, string]
  ) => {
    form.setFieldValue("date", value);
  };

  return (
    <Modal
      title={`Create event`}
      open={addModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Divider />
      <Form form={form} onFinish={handleOk}>
        {dataForm.map((item) => (
          <FormItemComponent
            key={item.name}
            name={item.name}
            label={item.label}
            rules={item.rules}
            options={item.options}
            placeholder={item.placeholder}
            onChange={handleDateTimePickerChange}
          />
        ))}
      </Form>
    </Modal>
  );
};

export default AddModal;
