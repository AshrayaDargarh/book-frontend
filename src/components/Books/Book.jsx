import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Book = ({book,filteredBook,setFilteredBook}) => {
   const {bookName,author,bookDescription,_id}=book;

   async function deleteBook(id)
   {
    try {
        if(window.confirm("Do you really want to delete?"))
        {
        const deletedBook=await axios.delete(`https://book-api-lilac.vercel.app/api/books/delete-book/${id}`);
        setFilteredBook(filteredBook.filter(b=>b._id!==id));      
        }
       
      } catch (error) {
        console.log(error.message)
      }
   }
  return (
    <div className="max-w-md mx-auto  bg-gray-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
     
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500  font-semibold">
          Book ID: {_id}
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
          Book Name: {bookName}
        </p>
        <p className="block mt-1 text-md leading-tight font-medium text-white hover:underline">
          Author: {author}
        </p>
        <p className="mt-2 text-gray-300">Desc: {bookDescription}</p>
        <div className="mt-4">
        <Link  to={`/update-book/${_id}`} state={book} >
          <button className="bg-blue-800 hover:bg-blue-700 rounded-md text-white font-bold py-2 px-4 mr-2">
           Update
          </button>
          </Link>
          <button className="bg-red-800 hover:bg-red-700 rounded-md text-white font-bold py-2 px-4" onClick={()=>deleteBook(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Book