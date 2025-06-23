import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainTemplateProps = {
  children: React.ReactNode;
}
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className="App">
      {/* <Heading> welcome to NHK</Heading> */}
      <Container>
        <Logo/>
      </Container>

       <Container>
        <Menu />
      </Container>

       {children}

      
      <Container>
        <Footer/>
      </Container>
    </div>
  );
}
