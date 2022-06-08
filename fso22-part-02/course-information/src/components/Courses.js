
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

//returns all courses data with the help of Course component 
const Courses = ({ courses }) => {
    return (
        <>
            {courses.map(course =>
                <Course key={course.id} course={course} />
            )}
        </>
    )
}

export default Courses
