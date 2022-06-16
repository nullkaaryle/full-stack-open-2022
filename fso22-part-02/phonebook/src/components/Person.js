import { Button } from './Form';

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
