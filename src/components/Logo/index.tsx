import { ClockFading } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <a href="#" className={styles.logoLink}>
          <ClockFading />
          <span>Chronos</span>
        </a>
      </div>
    </>
  );
}
