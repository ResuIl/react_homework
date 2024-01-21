import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function CreateCard({dispatch, setCards, mail}) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData((prevForm)=> ({
      ...prevForm,
      [name]: value,
      id: uuidv4(),
      author: mail,
    }));
  };

  const createCard = (e) =>{
    e.preventDefault();
    setCards((prevValue) => [...prevValue, formData]);
    dispatch({ type: "reset" });
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex flex h-screen justify-center items-center'>
      <form className='flex flex-col justify-center items-center w-full sm:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] h-screen sm:h-[421px] shadow shadow-zinc-700 bg-white rounded-[16px]'>
        <h1 className='text-3xl text-black font-bold mb-5 mt-5'>CREATE CARD</h1>
        <label>Title</label>
        <input
          name='title'
          onChange={(e) => handleChange(e)}
          className='border border-zinc-300 rounded-[6px] w-full sm:w-[560px] h-[60px] my-3 pl-[18px]'
          type="text"
          required
        />
        <label>Description</label>
        <input
          name='description'
          onChange={(e) => handleChange(e)}
          className='border border-zinc-300 rounded-[6px] w-full sm:w-[560px] h-[60px] my-3 pl-[18px]'
          type="text"
          required
        />
        <div className='flex justify-end'>
          <div className='hidden xl:flex-none xl:w-full xl:w-[234px] xl:h-14'></div>
          <div className='flex-grow w-full sm:w-500 h-14 mt-5'>
            <button
              onClick={() => dispatch({ type: "reset" }) }
              className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-zinc-100 border-solid border-2 border-gray-300'
              type='submit'
            >
              Close
            </button>
            <button
              onClick={(e) => createCard(e)}
              className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-amber-400 ml-4'
              type='submit'
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCard