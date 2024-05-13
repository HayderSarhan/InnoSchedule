import React, { useEffect } from "react";
import { Form, Button, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import FormItemComponent from "./FormItemComponent";
import moment from "moment";
import { Dayjs } from "dayjs";
import { dataForm } from "@/app/utils/DataForm";
import { Event } from "@/app/utils/EventInteerface";

interface CourseItemProps {
  data: Event | undefined;
}

const CourseItem: React.FC<CourseItemProps> = ({ data }) => {
  const handleDateTimePickerChange = (
    value: [Dayjs | null, Dayjs | null],
    dateString?: [string, string]
  ) => {
    if (data && value[0] && value[1]) {
      if (value) {
        const startDate = moment(data.start).format("YYYY-MM-DD");
        const endDate = moment(data.end).format("YYYY-MM-DD");
        const startTime = moment(startDate)
          .set({ hour: value[0]?.hour(), minute: value[0]?.minute() })
          .format("YYYY-MM-DDTHH:mm");

        const endTime = moment(endDate)
          .set({ hour: value[1]?.hour(), minute: value[1]?.minute() })
          .format("YYYY-MM-DDTHH:mm");
        form.setFieldsValue({ date: [moment(startTime), moment(endTime)] });
      }
    } else {
      form.setFieldsValue({ date: value });
    }
  };

  const [form] = useForm();

  const handleDelete = () => {
    if (data) {
      const id = data.extendedProps.id;
      fetch(`https://inno-schedule-bot.onrender.com/delete/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          message.success("The item has been deleted!");
          window.location.href = "/courses";
        })
        .catch((err) => message.error(err.message));
    }
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
        room: data.extendedProps.room,
        group: data.extendedProps?.group || undefined,
        course: data.extendedProps.course,
        instructorName: data.extendedProps.instructorName,
        date: [moment(data.start), moment(data.end)],
      });
    }
  }, [data, form]);

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      const extendedProps = {
        course: values.course,
        instructorName: values.instructorName,
        room: values.room,
        id: data?.extendedProps?.id,
        group: values.group ? values.group : "None",
      };
      const payload = {
        title: values.title,
        start: moment(form.getFieldValue("date")[0]).format("YYYY-MM-DDTHH:mm"),
        end: moment(form.getFieldValue("date")[1]).format("YYYY-MM-DDTHH:mm"),
        extendedProps,
      };
      fetch(`https://inno-schedule-bot.onrender.com/update/`, {
        method: "PUT",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data: Event) => {
          message.success("the item has updated");
          window.location.href = "/courses";
        })
        .catch((err) => message.error(err.message));
    });
  };
  return (
    <Form form={form} className="form-item">
      {dataForm.map((item) => {
        if (item.name === "group" && data && !data.extendedProps.group) {
          return;
        }
        return (
          <FormItemComponent
            key={item.name}
            name={item.name}
            label={item.label}
            rules={item.rules}
            options={item.options}
            placeholder={item.placeholder}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onChange={handleDateTimePickerChange}
          />
        );
      })}
      <div className="btns">
        <Button type="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button type="primary" danger onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Form>
  );
};

export default CourseItem;
