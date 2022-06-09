import Person from './Person'
import { Input } from './Form'

// component for filter
// user types in text
// text is used for filtering
export const AddFilter = (props) => (
  <>
    <Input
      text='Filter contacts shown with: '
      value={props.filter}
      onChange={props.onChange} />
  </>
)

// component for rendering contacts list
// the persons shown in contact list
// are filtered 
export const ShowFiltered = (props) => (
  <ul>
    {props.contacts
      .filter(person => person.id.includes((props.filter).toLowerCase()) || person.number.includes(props.filter))
      .map(person => <Person key={person.id} person={person} />)}
  </ul>
);

