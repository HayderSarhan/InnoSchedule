"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import { EventContentArg } from "@fullcalendar/core";
import styles from "../app/courses/calender.module.scss";
import { DateClickArg } from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Event } from "@/app/utils/EventInteerface";
import Link from "next/link";

interface CalenderProps {
  filterEvents: Event[];
  setDate: (date: string) => void;
  setAddModal: (AddModal: boolean) => void;
}

const eventContent = (arg: EventContentArg) => (
  <Link
    href={{
      pathname: `/courses/${arg.event.extendedProps.id}`,
      query: { id: arg.event.extendedProps.id },
    }}
  >
    <div className={styles.event_container}>
      <p className={styles.title_event}>{arg.event.title}</p>
      <p className={styles.time_event}>
        {arg.event.start?.toLocaleTimeString()} -{" "}
        {arg.event.end?.toLocaleTimeString()}
      </p>
    </div>
  </Link>
);

const Calender: React.FC<CalenderProps> = ({
  setAddModal,
  setDate,
  filterEvents,
}) => {
  const handleOnDateClick = (arg: DateClickArg) => {
    setDate(arg.dateStr);
    setAddModal(true);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      initialView="timeGridDay"
      events={filterEvents}
      eventContent={eventContent}
      dateClick={handleOnDateClick}
      dayCellDidMount={(cellInfo) => {
        if (!cellInfo.event) {
          cellInfo.el.style.cursor = "pointer";
        }
      }}
    />
  );
};

export default Calender;
