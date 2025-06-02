import "./styles/theme.css";
import "./styles/global.css";
// import { Heading } from "./components/Heading";
// import { Clock10 } from "lucide-react";
import { Container } from "./components/Container";

export function App() {
  return (
    <div className="App">
      {/* <Heading> welcome to NHK</Heading> */}
      <Container>
        <section>LOGO</section>
      </Container>
      <p>This is a simple React application.</p>
    </div>
  );
}
