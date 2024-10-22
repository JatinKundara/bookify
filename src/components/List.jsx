import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'


function List(props) {

    const { getImageUrl } = useFirebase()
    const [url, setURL] = useState(null)
    useEffect(() => {
        getImageUrl(props?.imageURL)
            .then((url) => setURL(url))
    }, [])



    const navigate = useNavigate()

    return (
        <li className='my-2 flex flex-col lg:flex-row lg:w-[80%] w-full bg-indigo-100 p-5 rounded-lg'>
            <img className='rounded-lg mx-auto' src={url} width='220px' alt="" />
            <div className='lg:px-10 px-3 lg:mt-0 mt-5'>
                <h1 className='text-3xl font-semibold'>{props?.bname}</h1>
                <p className='text-lg my-2'>Author - {props?.authorName}</p>
                <p>{props?.bookdes}</p>
                <button onClick={(e) => navigate(`/book-details/${props.id}`)} className='mt-3 bg-black text-white font-semibold text-lg px-7 py-2  rounded-full'>Read More</button> <br />
                <i className='text-lg text-gray-500 mt-2 inline-block'>Uploaded By - {props?.displayName || 'Unknown'}</i>
            </div>
        </li>
    )
}

export default List