import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { NavLink, useNavigate } from 'react-router-dom'

function AddBook() {

    const { isLoggedIn } = useFirebase()
    const navigate = useNavigate()

    if (!isLoggedIn) navigate('/')
    // useEffect(() => {
    // }, [isLoggedIn, navigate])

    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [price, setPrice] = useState('')
    const [coverPic, setCoverPic] = useState() 
    const [pdf, setPdf] = useState()
    const [bookDes, setBookDes] = useState('')

    const { createNewBook } = useFirebase()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            createNewBook(bookName, authorName, price, coverPic, pdf, bookDes)
            setBookName('')
            setAuthorName('')
            setPrice('')
            setCoverPic()
            setBookDes('')
            setTimeout(() => {
                navigate('/')
            }, 200)
        } catch (error) {
            console.log('Error', error.message);
        }
    }

    return (
        <>
            
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src=".././public/add-book-bg.webp"
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />

                        <div className="hidden lg:relative lg:block lg:p-12">
                        <NavLink
                                    className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                    to="/"
                                >
                                   <img width="40px" src=".././public/favicon.png" alt="" />
                                </NavLink>

                            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                Welcome to Bookify
                            </h2>

                            <p className="mt-4 mb-4 leading-relaxed text-white/90">
                            At Bookify, we believe that knowledge should be free and shared. We are dedicated to curating high-quality PDFs of books from various fields, offering you an easy and convenient way to explore the world of literature, education, and research.
                            </p>
                        </div>
                    </section>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <div className="relative -mt-16 block lg:hidden">
                                <NavLink
                                    className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                    to="/"
                                >
                                   <img width="40px" src=".././public/favicon.png" alt="" />
                                </NavLink>

                                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                    Welcome to Bookify
                                </h1>

                                <p className="mt-4 mb-4 leading-relaxed text-gray-500">
                                At Bookify, we believe that knowledge should be free and shared. We are dedicated to curating high-quality PDFs of books from various fields, offering you an easy and convenient way to explore the world of literature, education, and research.
                                </p>
                            </div>

                            <h2 className='text-xl font-semibold'>Add Book For Public Contribution</h2>
                            <form action="#" onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">
                                        Book Name
                                    </label>

                                    <input
                                        value={bookName}
                                        onChange={(e) => setBookName(e.target.value)}
                                        className="mt-2 w-full rounded-lg bg-gray-100 border-black200 p-3 text-sm"
                                        type="text"
                                        id="bookName"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="AuthorName" className="block text-sm font-medium text-gray-700">
                                        Author Name
                                    </label>

                                    <input
                                        value={authorName}
                                        onChange={(e) => setAuthorName(e.target.value)}
                                        className="mt-2 w-full rounded-lg bg-gray-100 border-black200 p-3 text-sm"
                                        type="text"
                                        id="AuthorName"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700"> Price </label>

                                    <input
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="mt-2 w-full rounded-lg bg-gray-100 border-black200 p-3 text-sm"
                                        type="text"
                                        id="price"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                                        Book Cover
                                    </label>

                                    <input
                                        onChange={(e) => setCoverPic(e.target.files[0])}
                                        className="mt-2 w-full rounded-lg bg-gray-200 border-gray-200 p-2 text-sm"
                                        type="file"
                                        id="file"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
                                        Upload Pdf
                                    </label>

                                    <input
                                        onChange={(e) => setPdf(e.target.files[0])}
                                        className="mt-2 w-full rounded-lg bg-gray-200 border-gray-200 p-2 text-sm"
                                        type="file"
                                        id="pdf"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="bookDes" className="block text-sm font-medium text-gray-700">
                                        Book Description
                                    </label>

                                    <textarea
                                    value={bookDes}
                                    onChange={(e) => setBookDes(e.target.value)}
                                    className="mt-2 w-full rounded-lg bg-gray-200 border-gray-200 p-3 text-sm"
                                    rows="4"
                                    id="bookDes"
                                ></textarea>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className="w-full inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    >
                                        Add Book
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </>
    )
}

export default AddBook