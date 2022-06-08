//uses Course component to render courses 
const Courses = ({ courses }) =>
  <>
    {courses.map(course =>
      <Course key={course.id} course={course} />
    )}
  </>


//uses Header, Content and Total components for course data rendering
const Course = ({ course }) =>
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>


//takes care of rendering the name of the course
const Header = ({ course }) =>
  <h2>
    {course.name}
  </h2>


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
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1> Web development curriculum </h1>
      <Courses courses={courses} />
    </>
  )
}

export default App
