import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './assets/components/Cards'

const App = () => {
    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState(1)
    let getData = async () => {
        let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
        setUserData(response.data)
    }
    useEffect(() => {
        getData()
    }, [index])
    let printUserData = <h3 className='text-gray-400/50 py-4 px-8 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60  text-2xl'> Loading....</h3>
    if (userData.length > 0) {
        {
            printUserData = userData.map((elem, idx) => {
                return <div className='' key={idx}>
                    <Cards elem={elem} />
                </div>
            })
        }
    }
    return (
        <>
            {/* Buttons here  */}
            <div
                className='fixed left-1/2 -translate-x-1/2 bg-black/60 rounded-b-full w-full py-2 lg:py-6'>
                < div
                    className='flex justify-center items-center gap-8 *:rounded   font-semibold *:cursor-pointer *:active:scale-90 text-white ' >
                    <button
                        style={{ opacity: index === 1 ? 0.5 : 1 }}
                        className='px-7 py-2 bg-black/50 '
                        onClick={() => {
                            if (index > 1) {
                                setIndex(index - 1);
                                setUserData([])
                            }
                        }}>
                        Prev
                    </button>
                    <h1
                        className='inline'>
                        Page {index}
                    </h1>
                    <button
                        className='className= px-7 py-2 bg-black/50 '
                        onClick={() => {
                            setIndex(index + 1);
                            setUserData([])
                        }}>Next
                    </button>
                </div >

            </div>
            {/* button end here  */}
            <div className=' h-full text-white'>
                <div className='flex *:shrink-0  flex-wrap gap-5 items-start justify-center p-5'>
                    {printUserData}
                </div>

            </div>
        </>
    )
}

export default App