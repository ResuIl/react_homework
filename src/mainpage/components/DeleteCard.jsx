import React from 'react'

function DeleteCard({dispatch, setCards, activeCard}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards((prevCards) => prevCards.filter(card => card.id != activeCard.id))
    dispatch({ type: "reset" });
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex h-screen justify-center items-center'>
      <form className='flex flex-col justify-center items-center w-full sm:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] h-screen sm:h-[421px] shadow shadow-zinc-700 bg-white rounded-[16px]'>
        <h1 className='text-3xl font-bold m-5'>DELETE CARD</h1>
        <label>Are you sure you want to delete card "Card name"?</label>
        <div className='flex justify-end mt-10'>
          <button onClick={() => dispatch({ type: "reset" }) } className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-zinc-100 border-solid border-2 border-gray-300' type='Submit'>Close</button>
          <button onClick={(e) => handleSubmit(e)} className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-amber-400 ml-4'>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default DeleteCard