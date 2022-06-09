
// component for button functions
export const Button = (props) => (
  <button type={props.type}>
    {props.text}
  </button>
)

// component for input fields
export const Input = (props) => (
  <p>
    {props.text}
    <input
      value={props.value}
      onChange={props.onChange} />
  </p>
)

// component for Form rendering
export const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <Input text='Name: ' value={props.valueName} onChange={props.onNameChange} />
      <Input text='Number: ' value={props.valueNumber} onChange={props.onNumberChange} />
      <Button type='submit' text='ADD CONTACT' />
    </form>);
}
