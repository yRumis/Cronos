import "./styles/theme.css";
import "./styles/global.css";
// import { Heading } from "./components/Heading";
// import { Clock10 } from "lucide-react";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu";
import { Logo } from "./components/Logo";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

export function App() {
  return (
    <div className="App">
      {/* <Heading> welcome to NHK</Heading> */}
      <Container>
        <Logo/>
      </Container>

       <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
      
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id='meuInput' type='text'/>
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
           <button>Enviar</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
