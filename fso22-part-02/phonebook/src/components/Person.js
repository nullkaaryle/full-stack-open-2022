import { Button } from './Form';

// rendering a person object in a list
// and the delete button
export const Person = (person, props) => {
  return (
    <li key={person.id}>
      {person.name}
      {' '}
      {person.number}
      {' '}
      <Button onClick={() => props.buttonFunction(person.id)} text='DELETE' />
    </li>
  )
}
