import { Input } from './Form'
import { Person } from './Person'


// uses Input component
// component for the user to add search term
// and to filter shown contacts
export const AddFilter = ({ filter, onChange }) => (
  <>
    <Input
      text='Filter contacts shown with: '
      value={filter}
      onChange={onChange} />
  </>
)

// filters and maps persons list
// based on the filter the user has typed
// search is made from contact name or number
export const ShowFiltered = (props) => (
  <ul>
    {props.contacts
      .filter(person =>
        (person.name.toLowerCase()).includes((props.filter).toLowerCase()) || (person.number).includes(props.filter))
      .map(person => {
        return Person(person, props)
      }
      )}
  </ul>
)


