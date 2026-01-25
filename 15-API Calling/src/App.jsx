import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([])
  let getdata = async () => {

    let { data } = await axios.get('https://picsum.photos/v2/list')
    setdata(data);
    console.log(data);



    //-------- using axios 3rd party api fetch--------

    // let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    // console.log(response.data);



    // --------Fetch Rest Api --------

    // let api = await fetch('https://jsonplaceholder.typicode.com/photos')
    // console.log(api);
    // console.log(await (api.json()));

  }
  return (
    <div>
      <button onClick={getdata}>Get Data</button>

      {data.map((elem, idx) => {
        return <h3>history{elem.author}{idx}</h3>;
      })}
    </div>
  )
}

export default App