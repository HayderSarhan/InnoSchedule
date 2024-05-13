import styles from "./page.module.scss";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InnoSchedule - Your Personal Course Planner",
  description:
    "Organize your courses and stay on top of your academic schedule with InnoSchedule - the ultimate course planner for students at Innopolis University. Never miss a class and make the most of your academic journey.",
  keywords:
    "InnoSchedule, course planner, academic schedule, student app, timetable management, Innopolis University",
  openGraph: {
    title: "InnoSchedule - Your Personal Course Planner",
    description:
      "Organize your courses and stay on top of your academic schedule with InnoSchedule - the ultimate course planner for students at Innopolis University. Never miss a class and make the most of your academic journey.",
  },
};
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          Welcome to <span>Inno</span>Schedule - Your Personal Course Planner!
        </h1>
        <p>Organize Your Courses, Never Miss a Class</p>
        <Link href="/courses">
          <button>Get Started</button>
        </Link>
      </section>
      <section className={styles.features}>
        <h1>Features</h1>
        <div>
          <article>
            <h1>Easy Course Management</h1>
            <p>
              Adding your courses to the calendar is a breeze with InnoSchedule.
              Enter essential details like course names, instructors, and
              schedules effortlessly
            </p>
          </article>
          <article>
            <h1>Customizable Timetable</h1>
            <p>
              Tailor your timetable to suit your preferences. InnoSchedule
              allows you to arrange your courses flexibly, ensuring your
              schedule aligns perfectly with your daily routine
            </p>
          </article>
          <article>
            <h1>Real-time Updates</h1>
            <p>
              Stay up-to-date with real-time updates and reminders. Whether its
              a schedule change or an important announcement, InnoSchedule keeps
              you informed and prepared
            </p>
          </article>
          <article>
            <h1>User-friendly Interface</h1>
            <p>
              InnoSchedule boasts an intuitive and user-friendly interface,
              making it easy for you to navigate and manage your courses without
              any hassle
            </p>
          </article>
        </div>
      </section>
      <section className={styles.use}>
        <h2>How It Works:</h2>
        <ul>
          <li>
            1) Add Your Courses - Input your course details, such as course
            name, instructor, and schedule
          </li>
          <li>
            2) Customize - Edit and arrange your timetable to suit your
            preferences
          </li>
          <li>
            3) Stay Organized - Never miss a class with real-time updates and
            reminders
          </li>
        </ul>
      </section>
    </main>
  );
}
