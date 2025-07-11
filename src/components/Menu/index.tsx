import { ClockFading, HistoryIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export function Menu() {

  type avaibleTheme = "light" | "dark";

  const [theme, setTheme] = useState<avaibleTheme>(() => {
    const storageTheme = localStorage.getItem("theme") as avaibleTheme || "dark";
    return storageTheme;
  });
    
  const nextIcon ={
    dark: <SunIcon />,
    light: <MoonIcon />
  }
  
  function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setTheme(e => {
      const newTheme = e === "dark" ? "light" : "dark";
      return newTheme;
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
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

         <a href="#" className={styles.menuOnly}
          aria-label="mudar tema"
          title="mudar tema"
          onClick={(e) => {handleThemeChange(e)}}>
          {nextIcon[theme]}
        </a>
      </nav>
    </>
  );
}
