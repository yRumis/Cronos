import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Mainform } from "../../components/Mainform";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  const { state, setState } = props;
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
