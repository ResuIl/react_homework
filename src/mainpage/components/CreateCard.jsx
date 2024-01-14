import { useState, useEffect } from 'react'

function CreateCard({isCreateCardActive, setCreateCardState, contentData, setContentData}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const addContent = () => {
    if (title.trim() === '' || description.trim() === '') {
      setError('Title ve ya description boş ola bilməz.');
      return;
    } 

    const newContent = {
      id: Date.now(),
      title: title,
      description: description,
    };

    setContentData([...contentData, newContent]);
    setCreateCardState(false);
  };

  return isCreateCardActive ? (
    <div className='fixed top-0 left-0 w-full h-full flex flex h-screen justify-center items-center'>
      <form className='flex flex-col items-center  w-[700px] h-[421px] shadow shadow-zinc-700 bg-white rounded-[16px]'>
        <h1 className='text-3xl text-black font-bold mb-5 mt-5'>CREATE CARD</h1>
        <label>Title</label>
        <input onChange={(e)=>{ setTitle(e.target.value); setError(''); }} className='border border-zinc-300 rounded-[6px] w-[560px] h-[60px] my-3 pl-[18px]' type="text"/>
        <label>Description</label>
        <input onChange={(e)=>{ setDescription(e.target.value); setError(''); }} className='border border-zinc-300 rounded-[6px] w-[560px] h-[60px] my-3 pl-[18px]' type="text"/>
        {error && <p className="text-red-500">{error}</p>}
        <div className='flex justify-end'>
          <div className='flex-none w-[284px] h-14'></div>
          <div className='shrink w-500 h-14 mt-5'>
            <button onClick={() => setCreateCardState(false)} className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-zinc-100 border-solid border-2 border-gray-300' type='Submit'>Close</button>
            <button onClick={() => addContent()} className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-amber-400 ml-4' type='button'>Create</button>
          </div>    
        </div>
      </form>
    </div>
  ) : null
}

export default CreateCard