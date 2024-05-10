import { groups } from "./Groups";
import { courses } from "./Courses";
import { ItemMenuInterface } from "./ItemMenuInterface";
export const itemsMenu: ItemMenuInterface[] = [
  {
    key: "courses",
    label: "Courses",
    children: courses.map((course) => ({
      key: course,
      label: course,
    })),
  },
  {
    key: "groups",
    label: "Groups",
    children: groups.map((group) => ({
      key: group,
      label: group,
    })),
  },
];
