//uses Header, Content and Total components for data rendering
const Course = ({ course }) =>
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
  </>

//takes care of rendering the name of the course
const Header = ({ course }) =>
  <h1>
    {course}
  </h1>

//uses Part component to render all the parts
const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}
  </>

//renders the name and number of exercises of one part
const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

//the root component
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Beautiful higher-order functions',
        exercises: 3,
        id: 4
      }
    ]
  }

  return (
    <>
      <Course course={course} />
    </>
  )
}

export default App
