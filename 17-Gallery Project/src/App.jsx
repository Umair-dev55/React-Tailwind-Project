import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState(2)
    let getData = async () => {
        let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
        setUserData(response.data)
        console.log(response.data);
    }
    useEffect(() => {
        getData()
    }, [index])
    let printUserData = <h3 className='text-gray-400 py-4 px-8 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black  text-2xl'> Loading....</h3>
    if (userData.length > 0) {
        {
            printUserData = userData.map((elem, idx) => {
                return <div>
                    <div className='size-80'>
                        <img className='rounded-3xl object-cover h-full w-full   bg-white' src={elem.download_url} />
                    </div>
                    <h2 className='text-2xl p-2 font-dancingScript'>{elem.author}</h2>
                </div>
            })
        }
    }
    return (
        <div className=' h-full text-white '>
            {/* Buttons here  */}
            <div className='flex justify-center items-center gap-8 *:rounded *:bg-cyan-800 *:px-7 *:py-2 pt-5 font-semibold *:cursor-pointer *:active:scale-95'>
                <button onClick={() => {
                    if (index > 1) {
                        setIndex(index - 1);
                        setUserData([])
                    }

                }}>Prev</button>
                <h1>{index}</h1>
                <button onClick={() => {
                    setIndex(index + 1);
                    setUserData([])
                }}>Next</button>
            </div>
            {/* button end here  */}
            <div className='flex *:shrink-0  flex-wrap gap-5 items-start justify-center p-5'>
                {printUserData}
            </div>

        </div>
    )
}

export default App