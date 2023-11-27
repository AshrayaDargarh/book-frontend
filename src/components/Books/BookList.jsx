import React from 'react'
import Book from './Book'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Blocks } from  'react-loader-spinner'
// import SearchBook from './SearchBook'



const BookList = () => {
  const [books,setBooks]=useState([])
  const [filteredBook,setFilteredBook]=useState([])
  const [isLoading,setIsLoading]=useState(false);
  async function fetchBooks()
  {
    try {
      setIsLoading(true)
      const books=await axios.get("https://book-api-lilac.vercel.app/api/books");
      if(books)
      {
        setIsLoading(false)
        setBooks(books?.data);
        setFilteredBook(books?.data)
      }
      
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  }
  
  useEffect(()=>{
    fetchBooks();
          },[])
      function onChange(e)
      {
        const value=e.target.value;
        setFilteredBook(books.filter(book=> book._id.includes(value)));
      }
  return (
    <div>
      <div
      className='flex justify-center mt-6'
      >
        <input
        type="text"
        placeholder="Search..."
        className="border-2 bg-gray-500 border-gray-300 px-4 py-2 rounded-md mr-2"
        onChange={onChange}
      />
      </div>

      <div className='flex justify-center gap-8  m-10 flex-wrap'>
        {
          isLoading? <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper "
        />:
          filteredBook.length===0?'No book found'
          :
          filteredBook.map((book)=>{
            return <Book key={book._id} book={book} filteredBook={filteredBook} setFilteredBook={setFilteredBook}/>
          })
      
        }
      </div>
    </div>
  )
}

export default BookList