import { useState } from 'react'

function App() {

  // OPTIONS: 'index', 'create'
  const [currentPage, setCurrentPage] = useState('index')

  // Index page / course list
  const [courses, setCourses] = useState([
    { name: 'Course 1', description: 'description', subject: 'Biology', credits: 3 },
    { name: 'Course 2', description: 'description', subject: 'Algebra', credits: 3 },
    { name: 'Course 3', description: 'description', subject: 'English', credits: 3 },
  ])

  // Create course form
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [courseSubject, setCourseSubject] = useState('')
  const [courseCredits, setCourseCredits] = useState(0)

  const onSubmitCreateCourse = (e) => {
    e.preventDefault()

    console.log("Course Name: ", courseName)
    console.log("Course Description: ", courseDescription)
    console.log("Course Subject: ", courseSubject)
    console.log("Course Credits: ", courseCredits)

    const newCourse = {
      name: courseName,
      description: courseDescription,
      subject: courseSubject,
      credits: parseInt(courseCredits)
    }

    console.log("New Course: ", newCourse);

    const newCourses = courses.concat([newCourse])
    setCourses(newCourses)
    setView('index')
    // courses = newCourses // CANNOT DO THIS IN REACT
    // MUST ****ALWAYS***** use the provided setWhatever functions.
  }

  console.log("Current Selected Page: ", currentPage)

  // Navigation style logic - set active page button
  let homeNavigationButtonClass = 'btn'
  let createNavigationButtonClass = 'btn'

  if (currentPage === 'index') {
    homeNavigationButtonClass += ' btn-primary'
  }

  if (currentPage === 'create') {
    createNavigationButtonClass += ' btn-primary'
  }

  return (
    <>
      <nav className="navbar">
        <div>
          <button className={homeNavigationButtonClass} onClick={() => setCurrentPage('index')}>Home</button>
          <button className={createNavigationButtonClass} onClick={() => setCurrentPage('create')}>Create Course</button>
        </div>
      </nav>

      {currentPage === 'index' && (
        <>
          {courses.length === 0 && (
            'No courses. Please add a course using the button on the page.'
          )}

          <h1 className='mb-3'>Course List</h1>
          {courses.map((course) => {
            return <div className='card mb-3'>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Subject: {course.subject} / Credits: {course.credits}
                </h6>
                <p className="card-text">{course.description}</p>
              </div>
            </div>
          })}
        </>
      )}

      {currentPage === 'create' && (
        <>
          <form onSubmit={onSubmitCreateCourse}>
            <h1>Create New Course</h1>

            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">Course Name</label>
              <input id="courseName" className="form-control" type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="College Algebra"></input>
            </div>

            <div className="mb-3">
              <label htmlFor="courseDescription" className="form-label">Course Description</label>
              <textarea id="courseDescription" className="form-control" rows="3" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} placeholder="A study of linear, quadratic, polynomial, and exponential functions. Emphasis on problem solving and mathematical reasoning."></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="courseSubject" className="form-label">Course Subject</label>
              <input id="courseSubject" className="form-control" type="text" value={courseSubject} onChange={(e) => setCourseSubject(e.target.value)} placeholder="Mathematics"></input>
            </div>

            <div className="mb-3">
              <label htmlFor="courseCredits" className="form-label">Course Credits</label>
              <input id="courseCredits" className="form-control" type="number" value={courseCredits} onChange={(e) => setCourseCredits(e.target.value)} placeholder="3"></input>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary" type="submit">Create New Course</button>
            </div>
          </form>
        </>
      )}
    </>
  )
}

export default App
