import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(() => {
    console.log('useEffect is Running');
  }, [num2])
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={() => {
        console.log('Btn Clicked');
        setNum(num + 1)
      }}>Click me</button>

      <button onClick={() => {
        console.log('Btn Clicked');
        setNum2(num2 + 1)
      }}>Click me</button>
    </div>
  )
}

export default App