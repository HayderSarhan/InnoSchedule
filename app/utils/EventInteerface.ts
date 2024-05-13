export interface Event {
  title: string;
  start: string;
  end: string;
  extendedProps: {
    room: string;
    group?: string;
    course: string;
    instructorName: string;
    id?: number;
  };
}
