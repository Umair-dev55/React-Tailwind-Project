import React from 'react'

const App = () => {
  let getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);


  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App