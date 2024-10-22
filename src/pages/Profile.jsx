import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { BookCard } from '../components/Index'
import { useNavigate, NavLink } from 'react-router-dom'

function Profile() {

  const { fetchMyBooks, isLoggedIn, user, Logout, deleteBookById } = useFirebase()
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
if (!isLoggedIn) return navigate('/')
    
  }, [isLoggedIn, navigate])

  useEffect(() => { 
    if (isLoggedIn)
      fetchMyBooks(user.uid)?.then((books) => setBooks(books.docs))
  }, [fetchMyBooks])


  const handleDelete = async (bookId) => {
    await deleteBookById(bookId);
    setBooks(books.filter(book => book.id !== bookId)) // Remove the book from the local state after deleting
  }

  return (
    <div className='w-full flex lg:flex-row flex-col-reverse'>
      <div className='lg:w-2/3 w-full p-5 px-10'>
        <h1 className='mt-5 font-semibold text-2xl'>Book Uploaded By You :-</h1>
        <ul className="mt-8 flex items-center justify-center gap-5 flex-wrap">
          {/* {books?.map((book) =>
            <BookCard key={book.id} id={book.id} {...book.data()} />
          )} */}
          {books?.map((book) => (
            <div key={book.id} className="book-card">
              <BookCard id={book.id} {...book.data()} />
              {/* Only show delete button if the book was uploaded by the logged-in user */}
              {user?.uid === book.data().userID && (                
                <button
                  onClick={() => handleDelete(book.id)}
                  className='bg-black text-sm mt-3 text-white font-semibold px-2 py-1 rounded-lg'
                >
                  Remove Book
                </button>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className='lg:w-1/3 h-[15rem] w-full rounded-b-3xl border-t-[1px] border-indigo-600 bg-indigo-100  p-5 py-8 px-10'>
        <h1 className='text-2xl font-semibold'>User Details</h1>
        {user ? <div className='mt-5'>
           <p>Name : <span className='text-lg font-semibold'>{user?.displayName || 'Unknown'}</span></p>
          <p>Email : <span className='text-lg font-semibold'>{user?.email || 'Unknown'}</span></p>
        </div> : null}
        <NavLink
        to='/add-book'
        >
        <button
          className='bg-indigo-600 mt-5 text-white me-4 font-semibold px-6 py-2 rounded-lg'
        >Add New Book</button>
        </NavLink>
        <button
          onClick={Logout}
          className='bg-black mt-5 text-white font-semibold px-6 py-2 rounded-lg'
        >Logout</button>
      </div>
    </div>
  )
}

export default Profile