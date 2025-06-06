type DefaultInputProps = {
  id:string;
} & React.ComponentProps<'input'>;


export function DefaultInput({id, type}: DefaultInputProps) {
  return (
  <>
    <label htmlFor={id}>Task</label>
    <input id={id}  type={type}/>
  </>
  )
}