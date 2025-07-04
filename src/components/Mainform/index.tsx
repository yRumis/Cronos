import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function Mainform() {

  const handleCreatNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleCreatNewTask} action="" className="form">
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
           <DefaultButton icon={<PlayCircleIcon/>}  />
          </div>
        </form>
  );
}