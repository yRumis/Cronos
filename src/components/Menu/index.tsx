import { ClockFading, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <a href="#" className={styles.menuLink}>
          <ClockFading />
        </a>

         <a href="#" className={styles.menuLink}>
          <HistoryIcon />
        </a>

         <a href="#" className={styles.menuLink}>
          <SettingsIcon />
        </a>

         <a href="#" className={styles.menuLink}>
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
