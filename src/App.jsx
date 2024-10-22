import { Routes, Route } from 'react-router-dom'
import { Register, Login, AddBook, Home, Bookdetails, Profile, BookList, AboutUs, NotFound } from './pages/Index'
import { Footer, Header } from './components/Index'
// import './App.css'

function App() { 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/book-details/:bookId' element={<Bookdetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/book-list' element={<BookList />} />
        <Route path='/about-us' element={<AboutUs />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
