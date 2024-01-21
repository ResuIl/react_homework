import { useState } from 'react'

function EditCard({ dispatch, setCards, activeCard }) {
  const [formData, setFormData] = useState({
    title: activeCard.title,
    description: activeCard.description,
  });
  
  const handleSave = (e) => {
    e.preventDefault()
    const updatedCard = { ...activeCard, ...formData };
    setCards((prevValue) => prevValue.map(card => card.id === activeCard.id ? updatedCard : card))
    dispatch({ type: "reset" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-99'>
      <form className='absolute flex flex-col justify-center items-center w-full sm:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] h-screen sm:h-[421px] shadow shadow-zinc-700 bg-white rounded-[16px]'>
        <h1 className='text-3xl font-bold mb-5 mt-5'>EDIT CARD</h1>
        <label>Title</label>
        <input
          name="title"
          onChange={(e) => { handleChange(e) }}
          className='border border-zinc-300 rounded-[6px] w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[560px] 2xl:w-[600px] h-[60px] my-3 pl-[18px]'
          type="text"
          value={formData.title}
          required
        />
        <label>Description</label>
        <input
          name='description'
          onChange={(e) => { handleChange(e) }}
          className='border border-zinc-300 rounded-[6px] w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[560px] 2xl:w-[600px] h-[60px] my-3 pl-[18px]'
          type="text"
          value={formData.description}
          required
        />
        <div className='flex justify-end'>
          <div className='hidden xl:flex-none xl:w-full xl:w-[234px] xl:h-14'></div>
          <div className='flex-grow w-full sm:w-500 h-14 mt-5'>
            <button
              onClick={() => dispatch({ type: "reset" }) }
              className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-zinc-400 border-solid border-2 border-gray-300'
            >
              Close
            </button>
            <button
              onClick={(e) => handleSave(e)}
              className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-amber-400 ml-4'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditCard