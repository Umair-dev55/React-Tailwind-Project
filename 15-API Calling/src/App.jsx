import React from 'react'

const App = () => {
  let getdata = async () => {
    let api = await fetch('https://jsonplaceholder.typicode.com/photos')
    // console.log(api);
    console.log(await (api.json()));

  }
  return (
    <div>
      <button onClick={getdata}>Get Data</button>
    </div>
  )
}

export default App