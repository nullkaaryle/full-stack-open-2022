
//uses Header, Content and Total components for course data rendering
const Course = ({ course }) =>
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>


//takes care of rendering the name of the course
const Header = ({ course }) =>
  <h1>
    {course.name}
  </h1>


//uses Part component to render all the parts
const Content = ({ course }) =>
  <>
    {course.parts.map(part =>
      <Part key={part.id} part={part} />
    )}
  </>


//renders the name and number of exercises of one part
const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>


//uses Sum component to render the total of course exercises
const Total = ({ course }) =>
  <>
    <h3>
      Total number of exercises: <Sum parts={course.parts} />
    </h3>
  </>


//counts together all the exercises in different course parts
const Sum = ({ parts }) =>
  <>
    {parts.reduce((sum, part) =>
      sum + part.exercises, 0)}
  </>


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
