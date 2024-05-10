"use client";
import React, { useEffect, useState } from "react";
import { Event } from "@/app/utils/EventInteerface";
import { useSearchParams } from "next/navigation";
import { message } from "antd";
import CourseItem from "@/components/CourseItem";

export default function CoursePage() {
  const [event, setEvent] = useState<Event[]>();
  const searchParams = useSearchParams();
  useEffect(() => {
    fetch("https://inno-schedule-bot.onrender.com/get/", {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEvent(
          data.filter(
            (item: Event) =>
              item.extendedProps.id === Number(searchParams.get("id")),
          ),
        );
      })
      .catch((err) => {
        message.error(err.message);
      });
  }, [searchParams]);

  return (
    <div>
      <CourseItem data={event && event.at(0)} />
    </div>
  );
}
