import "./styles/theme.css";
import "./styles/global.css";
// import { Heading } from "./components/Heading";
// import { Clock10 } from "lucide-react";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu";
import { Logo } from "./components/Logo";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";

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
            <DefaultInput 
            id='meuInput' 
            type='text' 
            labelText="Task" 
            title="titulo"
            placeholder="Digite algo aqui"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
           <DefaultButton icon={<PlayCircleIcon/>} />
          </div>
        </form>
      </Container>
    </div>
  );
}
