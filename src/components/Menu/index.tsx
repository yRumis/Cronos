import { ClockFading, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

export function Menu() {

  type avaibleTheme = "light" | "dark";

  const [theme, setTheme] = useState<avaibleTheme>("dark");
  
  function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    console.log(Date.now());
    setTheme(e => {
      const newTheme = e === "dark" ? "light" : "dark";
      return newTheme;
    })
  }
  return (
    
    <>
      <nav className={styles.menu}>
        <h1>{theme}</h1>
        <a href="#" className={styles.menuLink} 
        aria-label="Ir para a home"
        title="ir para a home">
          <ClockFading />
        </a>

         <a href="#" className={styles.menuLink}
          aria-label="ver historico"
          title="ver historico"
        >
          <HistoryIcon/>
        </a>

         <a href="#" className={styles.menuLink}
          aria-label="Configuracoes"
          title="Configuracoes">
          <SettingsIcon />
        </a>

         <a href="#" className={styles.menuLink}
          aria-label="mudar tema"
          title="mudar tema"
          onClick={(e) => {handleThemeChange(e)}}>
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
