import Person from './Person'
import { Input } from './Form'

export const AddFilter = (props) => (
  <>
    <Input
      text='Filter contacts shown with: '
      value={props.filter}
      onChange={props.onChange} />
  </>
)

export const ShowFiltered = (props) => (
  <ul>
    {props.contacts
      .filter(person => (person.name.toLowerCase()).includes((props.filter).toLowerCase()) || (person.number).includes(props.filter))
      .map(person => <Person key={person.id} person={person} />)}
  </ul>
)

