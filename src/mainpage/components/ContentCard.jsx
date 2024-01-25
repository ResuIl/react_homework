import { useContext } from 'react'
import Context from '../../ContextWrapper';

function ContentCard({setActiveCard, data}) {
  const { dispatch } = useContext(Context);
  return (
    <div className='w-[440px] h-[235px] border rounded-[5px] border-zinc-300 m-5'>
      <div className='bg-[#E7E7E7] p-[30px] h-[76%]'>
        <h1 className='text-[25px] font-bold'>{data.title}</h1>
        <p className='h-[10vh] text-ellipsis overflow-hidden'>{data.description}</p>
      </div>
      <div className='flex bg-zinc-300 justify-end h-14 border rounded-b-[5px] items-center'>
        <button className='bg-yellow-400 py-2 px-6 rounded-[5px] font-bold hover:bg-yellow-500' onClick={()=>{ setActiveCard(data); dispatch({ type: "edit" }); }}>Edit</button>
        <button className='bg-yellow-400 py-2 px-6 rounded-[5px] font-bold mx-2 hover:bg-yellow-500' onClick={()=>{ setActiveCard(data); dispatch({ type: "delete" }); }}>Delete</button>
      </div>
    </div>
  )
}

export default ContentCard