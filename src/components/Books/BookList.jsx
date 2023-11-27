import React from 'react'
import Book from './Book'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Blocks } from  'react-loader-spinner'



const BookList = () => {
  const [books,setBooks]=useState([])
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
      }
      
    } catch (error) {
      setIsLoading(false)
      console.log(error.message)
    }
  }
  useEffect(()=>{
    fetchBooks();
          },[])
  return (
    <div>
   
      <div className='flex justify-center gap-8  m-20 flex-wrap'>
        {
          isLoading?  <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper "
        />:
          books.length===0?'No book found'
          :
          books.map((book)=>{
            return <Book key={book._id} book={book} books={books} setBooks={setBooks}/>
          })
      
        }
      </div>
    </div>
  )
}

export default BookList