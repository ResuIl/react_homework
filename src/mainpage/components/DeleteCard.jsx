import React from 'react'

function DeleteCard({isDeleteCardActive, setDeleteCardState, currentKey, contentData, setContentData}) {

  const deleteContent = () => {
    const index = contentData.findIndex((item) => item.id === currentKey);

    if (index !== -1) {
      const updatedContentData = contentData.filter(item => item.id !== currentKey);

      setContentData(updatedContentData);
      setDeleteCardState(false);
    }
  };

  return isDeleteCardActive ? (
    <>
        <div className='fixed top-0 left-0 w-full h-full flex h-screen justify-center items-center'>
            <form className='flex flex-col items-center  w-[700px] h-[241px] shadow shadow-zinc-700 bg-white rounded-[16px]'>
                <h1 className='text-3xl font-bold m-5'>DELETE CARD</h1>
                <label>Are you sure you want to delete card "Card name"?</label>
                <div className='flex justify-end mt-10'>
                    <button onClick={() => setDeleteCardState(false)} className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-zinc-100 border-solid border-2 border-gray-300' type='Submit'>Close</button>
                    <button onClick={() => deleteContent()} className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-amber-400 ml-4' type='Submit'>Delete</button>
                </div>
                
            </form>
        </div>
    </>
  ) : null
}

export default DeleteCard