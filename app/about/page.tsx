import styles from "./page.module.scss";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About InnoSchedule - Simplifying Students' Lives",
  description:
    "Learn more about InnoSchedule - the app designed by a team of IT students at Innopolis University to simplify students' lives. Discover the key features and mission behind InnoSchedule, and how it empowers students to stay organized and excel in their academic journey.",
  keywords:
    "About InnoSchedule, student app, academic planner, course management, timetable organizer, team behind InnoSchedule, student project, Innopolis University",
  openGraph: {
    title: "About InnoSchedule - Simplifying Students' Lives",
    description:
      "Learn more about InnoSchedule - the app designed by a team of IT students at Innopolis University to simplify students' lives. Discover the key features and mission behind InnoSchedule, and how it empowers students to stay organized and excel in their academic journey",
  },
};

export default function About() {
  return (
    <div>
      <section className={styles.intro}>
        <h2>
          Welcome to <span>Inno</span>Schedule - Simplifying Students Lives
        </h2>
        <p>
          At InnoSchedule, we understand the daily struggles students face when
          managing their academic schedules. With the belief that every minute
          counts in a students life, we have developed a powerful yet
        </p>
      </section>
      <section className={styles.mission}>
        <h2>Our Mission:</h2>
        <p>
          At InnoSchedule, our mission is to empower students by providing them
          with a reliable and intuitive platform for managing their course
          schedules. We are committed to helping students make the most of their
          academic journey, minimizing time wastage, and enhancing productivity.
          Our app is a students companion, ensuring they stay organized and on
          top of their classes throughout their educational pursuits.
        </p>
      </section>
      <section className={styles.reason}>
        <h2>Why Choose InnoSchedule Over Traditional Methods?</h2>
        <p>
          While traditional methods like using Google Sheets can be useful
          initially, they fall short when it comes to long-term, sustainable
          solutions for students. InnoSchedule is purpose-built for academic
          scheduling, offering specialized features that cater to students
          needs. With real-time updates, intuitive editing, and seamless
          integration, InnoSchedule ensures that you have an organized and
          efficient schedule that adapts to your academic journey.
        </p>
      </section>
      <section className={styles.team}>
        <h2>Meet the Team Behind InnoSchedule</h2>
        <ul>
          <li>Hayder Sarhan</li>
          <li>Mohamad Nour Shahin</li>
          <li>Yehia Sobeh</li>
          <li>Ali Hamdan</li>
        </ul>
      </section>
      <section className={styles.start}>
        <h2>Start Your Organized Academic Journey with InnoSchedule Today!</h2>
        <p>
          We invite you to join the thousands of students who have already
          embraced InnoSchedule as their personalized course planning assistant.
          Take control of your academic life and unlock the potential of
          efficient time management. Get started with InnoSchedule now and
          experience the difference it can make in your student journey!
        </p>
        <Link href="/courses">
          <button>Get Started</button>
        </Link>
      </section>
    </div>
  );
}
