import { useState, useEffect } from 'react'

function EditCard({isEditCardActive, setEditCardState, currentKey, contentData, setContentData}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    const content = contentData.find((item) => item.id === currentKey);

    if (content) {
      setTitle(content.title);
      setDescription(content.description);
    }
  }, [currentKey]);

  const saveContent = () => {
    if (title.trim() === '' || description.trim() === '') {
      setError('Title ve ya description boş ola bilməz.');
      return;
    } 

    const index = contentData.findIndex((item) => item.id === currentKey);
    if (index !== -1) {
      const updatedContentData = [...contentData];

      updatedContentData[index] = {
        ...updatedContentData[index],
        title: title,
        description: description,
      };

      setContentData(updatedContentData);
      setEditCardState(false);
    }
  };
  
  return isEditCardActive ? (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-99'>
      <form className='absolute flex flex-col justify-center items-center w-full sm:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] h-screen sm:h-[421px] shadow shadow-zinc-700 bg-white rounded-[16px]'>
        <h1 className='text-3xl font-bold mb-5 mt-5'>EDIT CARD</h1>
        <label>Title</label>
        <input
          onChange={(e) => { setTitle(e.target.value); setError(''); }}
          className='border border-zinc-300 rounded-[6px] w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[560px] 2xl:w-[600px] h-[60px] my-3 pl-[18px]'
          type="text"
          placeholder={title}
        />
        <label>Description</label>
        <input
          onChange={(e) => { setDescription(e.target.value); setError(''); }}
          className='border border-zinc-300 rounded-[6px] w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[560px] 2xl:w-[600px] h-[60px] my-3 pl-[18px]'
          type="text"
          placeholder={description}
        />
        {error && <p className="text-red-500">{error}</p>}
        <div className='flex justify-end'>
          <div className='hidden xl:flex-none xl:w-full xl:w-[234px] xl:h-14'></div>
          <div className='flex-grow w-full sm:w-500 h-14 mt-5'>
            <button
              onClick={() => setEditCardState(false)}
              className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-zinc-400 border-solid border-2 border-gray-300'
              type='Submit'
            >
              Close
            </button>
            <button
              onClick={() => saveContent()}
              className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[116px] h-[61px] hover:bg-amber-400 ml-4'
              type='button'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : null
}

export default EditCard