import React from 'react'

const App = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  console.log(user);


  let student = {
    name: 'umair',
    Semmester: '4th semmester',
    CGPA: 3.1
  }
  console.log(student);

  // JSON.stringify store array 7 object in localstorage in string form
  localStorage.setItem('student', JSON.stringify(student))
  // JSON.parse use for return in orignal type
  let students = JSON.parse(localStorage.getItem('student'));
  console.log(students);
  // set in localStorage
  // localStorage.setItem

  // get from localStorage
  // localStorage.getItem

  // for remove
  // localStorage.removeItem

  // for clear localStorage
  // localStorage.clear
  return (
    <div>App</div>
  )
}

export default App