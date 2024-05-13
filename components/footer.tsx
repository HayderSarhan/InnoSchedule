import styles from "./footer.module.scss";
import logo from "@/public/Logo.png";
import github from "@/public/github.svg";
import Image from "next/image";
import Link from "next/link";

export default function footer() {
  return (
    <footer className={styles.footer}>
      <Image src={logo} alt="app logo" />
      <div>
        <Link href="https://github.com/ThePinkPanther77/InnoSchedule">
          <Image src={github} alt="github logo" width="50" height="50" />
        </Link>
      </div>
    </footer>
  );
}
