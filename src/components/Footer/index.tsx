import styles from "./styles.module.css";



export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="">Entenda como funciona a Tecnica shaolin</a>
        <a href="">
          Pomodoro &copy; { new Date().getFullYear()} - Feito a mao 😁
        </a>

      </footer>
    </>
  );
}
