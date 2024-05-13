import { FormDataFieldsInterface } from "./FormDataFieldsInterface";
import RulesInput from "./RulesInput";
export const dataForm: FormDataFieldsInterface[] = [
  {
    name: "title",
    label: "Title:",
    placeholder: "Enter the title of event.",
    rules: RulesInput("title"),
  },
  {
    name: "room",
    label: "Room Number:",
    placeholder: "Enter the room number.",
    rules: RulesInput("Room Number"),
  },
  {
    name: "date",
    label: "Date:",
    placeholder: "Enter the date.",
    rules: RulesInput("Date"),
  },
  {
    name: "instructorName",
    label: "Name instructor:",
    placeholder: "Enter the name instructor.",
    rules: RulesInput("Instructor name"),
  },
  {
    name: "course",
    label: "Course:",
    options: [
      { value: "B22", label: "B22" },
      { value: "B21", label: "B21" },
      { value: "B20", label: "B20" },
      { value: "B219", label: "B19" },
    ],
    rules: RulesInput("Course"),
  },
  {
    name: "group",
    label: "Group:",
    options: [
      { value: "CS-01", label: "CS-01" },
      { value: "CS-02", label: "CS-02" },
      { value: "CS-03", label: "CS-03" },
      { value: "CS-04", label: "CS-04" },
      { value: "CS-05", label: "CS-05" },
      { value: "CS-06", label: "CS-06" },
      { value: "DSAI-01", label: "DSAI-01" },
      { value: "DSAI-02", label: "DSAI-02" },
      { value: "DSAI-03", label: "DSAI-03" },
      { value: "DSAI-04", label: "DSAI-04" },
    ],
    rules: RulesInput("Group"),
  },
];
