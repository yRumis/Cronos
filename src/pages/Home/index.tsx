import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Mainform } from "../../components/Mainform";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
  return (
    <MainTemplate>
          <Container>
              <CountDown />
            </Container>
            
            <Container>
              <Mainform />
            </Container>
      
    </MainTemplate>
  );
}
