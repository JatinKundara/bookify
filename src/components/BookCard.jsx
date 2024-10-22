import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'

function BookCard(props) {

    const { getImageUrl } = useFirebase()
    const [url, setURL] = useState(null)
    useEffect(() => {
        getImageUrl(props?.imageURL)
        .then((url) => setURL(url))
    }, [])

    

    const navigate = useNavigate()

    return (
        <li className='overflow-hidden'>
            <a onClick={(e) => navigate(`/book-details/${props.id}`)} className="group overflow-hidden cursor-pointer">
                <img
                    src={url}
                    alt="Book Cover"
                    className="h-[250px] object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                />

                <div className="relative bg-white pt-1">
                    <h3 className="text-xl font-semibold text-black group-hover:underline group-hover:underline-offset-4">
                        {/* The Kite Runner */}
                        {props?.bname}
                    </h3>

                    <p>
                        <span className="text-sm tracking-wider text-gray-900"> Author - {props?.authorName || 'Unknown'}
                        </span>
                    </p>
                    <p>
                        <span className="text-[12px] tracking-wider text-gray-900"> Uploaded By - {props?.displayName || 'Unknown'}
                        </span>
                    </p>
                </div>
            </a>
        </li>
    )
}

export default BookCard