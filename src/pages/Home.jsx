import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { BookCard } from '../components/Index'

function Home() {

    const { listAllBooks } = useFirebase()
    const [books, setBooks] = useState([])


    useEffect(() => {
        listAllBooks().then((books) => setBooks(books.docs))
    }, [])

    return (
        <>
            <section className="text-white bg-slate-900 bg-[url('.././public/hero-bg.webp')] bg-center">
                <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex  lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-indigo-100 via-blue-500 to-green-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Download Free eBook.

                            <span className="sm:block">Best eBooks for Every Reader.</span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Whether you love fiction or non-fiction, find the best eBooks tailored to your reading preferences right here.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Book Collection</h2>

                        {/* <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p> */}
                    </header>

                    <ul className="mt-8 flex items-center justify-center gap-5 flex-wrap">
                            {books?.map((book) =>
                            <BookCard key={book.id} id={book.id} {...book.data()} />
                            )}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Home