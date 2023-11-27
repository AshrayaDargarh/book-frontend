import React,{useState,useEffect} from 'react'
import { Blocks } from 'react-loader-spinner';
import axios from 'axios';
import { useLocation, useParams,useNavigate } from 'react-router-dom';

const UpdateBook = (props) => {
  const [formData, setFormData] = useState({
    bookName: '',
    author: '',
    bookDescription: '',
  });
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate();
  const {id}=useParams();
  const {state}=useLocation();

  useEffect(() => {
    if (state ) {
      const { bookName, author, bookDescription } = state;
      setFormData({
        bookName: bookName || '',
        author: author || '',
        bookDescription: bookDescription || '',
      });
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
   
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const response=await axios.patch(`https://book-api-lilac.vercel.app/api/books/update-book/${id}`,formData);
      console.log(response)
      setIsLoading(false)
    setFormData({
      bookName: '',
      author: '',
      bookDescription: '',
    });
    navigate('/');

    }
     catch (error) {
      setIsLoading(false)
    }
    
  };

  return (
    <div >
      {
        isLoading?
        <div className=' flex justify-center'>
          <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
        </div>
        : 
      <form className="max-w-md mx-auto bg-gray-700 mt-4 text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <div className="mb-4">
        <label htmlFor="bookName" className="text-sm block font-semibold ">
          Book Name:
        </label>
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          className="mt-1 p-2 border bg-gray-700  rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="text-sm bg-gray-700  block font-semibold ">
          Author:
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="mt-1 p-2 bg-gray-700  border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bookDescription" className="text-sm block font-semibold ">
          Book Description:
        </label>
        <textarea
          id="bookDescription"
          name="bookDescription"
          value={formData.bookDescription}
          onChange={handleChange}
          className="mt-1 p-2 border bg-gray-700  rounded-md w-full"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
      }
     
    </div>
    
  );
}

export default UpdateBook