"use client";
import React, { useState, useEffect } from "react";
import { message } from "antd";
import AddModal from "@/components/AddModal";
import LayoutCourses from "@/components/LayoutCourses";
import { Filtering } from "../utils/FilteringInterface";
import { Event } from "../utils/EventInteerface";

export default function Courses() {
  useEffect(() => {
    fetch("https://inno-schedule-bot.onrender.com/get/", {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        message.error(error.message);
        setEvents([]);
      });
  }, []);
  const [filterEvents, setFilterEvents] = useState<Event[]>([]);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [events, setEvents] = useState<Event[]>([]);
  const [filtering, setFiltering] = useState<Filtering>({
    type: "",
    value: "",
  });
  return (
    <>
      <LayoutCourses
        setFiltering={setFiltering}
        events={events}
        setFilterEvents={setFilterEvents}
        filterEvents={filterEvents}
        setAddModal={setAddModal}
        setDate={setDate}
      />
      <AddModal
        date={date}
        addModal={addModal}
        setAddModal={setAddModal}
        setfilterEvents={setFilterEvents}
        setEvents={setEvents}
        filtering={filtering}
      />
    </>
  );
}
