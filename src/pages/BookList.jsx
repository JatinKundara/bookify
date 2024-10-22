import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { List } from '../components/Index'

function BookList() {
    const { listAllBooks } = useFirebase()
    const [books, setBooks] = useState([])


    useEffect(() => {
        listAllBooks().then((books) => setBooks(books.docs))
    }, [])
    return ( 
        <>
            <section className="text-white bg-slate-900 bg-[url('.././public/hero-bg.webp')] bg-center">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-indigo-100 via-blue-500 to-green-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Book List

                        </h1>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-white mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        {/* <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p> */}
                    </header>

                    <ul className="flex items-center justify-center gap-5 flex-wrap">
                        {books?.map((book) =>
                            <List key={book.id} id={book.id} {...book.data()} />
                        )}

                    </ul>
                </div>
            </section>
        </>
    )
}

export default BookList