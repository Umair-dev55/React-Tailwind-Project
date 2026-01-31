import React from 'react'

const Cards = (props) => {
    console.log(props);

    return (
        <div>
            <div className='size-80'>
                <img className='rounded-3xl object-cover h-full w-full   bg-white' src={props.elem.download_url} />
            </div>
            <div>
                <h2 className='text-2xl p-2 font-dancingScript'>{props.elem.author}</h2>
            </div>

        </div>
    )
}

export default Cards