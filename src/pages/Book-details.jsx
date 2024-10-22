import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom';


function Bookdetails() {

    const param = useParams();

    const { getDocById, getImageUrl, isLoggedIn, placeOrder } = useFirebase()
    const [data, setData] = useState(null)
    const [pdfUrl, setPdfUrl] = useState(null);
    const [qty, setQty] = useState(1)
    const [url, setURL] = useState(null) 
    const navigate = useNavigate()

    
    useEffect(() => {
        if (!isLoggedIn) navigate('/login')
    }, [isLoggedIn, navigate])

    useEffect(() => {
        getDocById(param.bookId).then(value => setData(value.data()));
    }, [])

    useEffect(() => {
        if (data) {
            const bookImageURL = data.imageURL
            getImageUrl(bookImageURL).then((url) => setURL(url))

            const bookPdfURL = data.pdfURL;
            getImageUrl(bookPdfURL).then((url) => setPdfUrl(url));
        }
    }, [data])
    


    // const buyNow = async () => {
    //     const result = await placeOrder(param.bookId, qty)
    //     console.log("Place Order", result);        
    // }

    console.log(data);


    return (data ? <>
        <div className='lg:p-20 p-6 flex justify-center lg:flex-row flex-col  bg-gray-200 gap-x-36'>
            <img className='lg:w-[18rem] w-full' src={url} alt="Book Cover" />
            <div className='lg:w-1/2 w-full mt-5'>
                <h1 className='text-4xl font-semibold'>{data.bname}</h1>
                <p className='mt-3 text-lg'>Author - {data?.authorName || 'Unknown'}</p>
                <p className='mt-3'>{data.bookdes}</p>

                <p className='my-3 text-3xl'><span className='font-semibold line-through text-gray-500'>&#8377;{data.price}</span> <span className='font-semibold'>FREE</span> <i className='text-sm text-gray-500'>(Download Free PDF)</i></p>

                {/* PDF Download Button */}
                {pdfUrl ? (
                        <a 
                            href={pdfUrl} 
                            download={`${data.bname}.pdf`}
                            target='_blank'
                            className='bg-indigo-600 cursor-pointer text-white font-semibold text-lg px-7 py-2 rounded-full'
                        >
                            Download Free PDF
                        </a>
                    ) : (
                        <p>Loading PDF...</p>
                    )}

                <p className='mt-3'><i>Uploaded By - {data?.displayName || 'Unknown'}</i></p>
            </div>
        </div>
    </> : <h1 className='text-3xl text-center py-56 text-white bg-slate-900' >Loading...</h1>)
}

export default Bookdetails