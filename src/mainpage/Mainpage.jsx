import { useState } from 'react'
import Navigation from './components/Navigation'
import ContentCard from './components/ContentCard'
import CreateCard from './components/CreateCard'
import DeleteCard from './components/DeleteCard'
import EditCard from './components/EditCard'

function Mainpage({setAuthorized, mail}) {
  const [isEditCardActive, setEditCardState] = useState(false)
  const [isDeleteCardActive, setDeleteCardState] = useState(false)
  const [isCreateCardActive, setCreateCardState] = useState(false)
  const [currentKey, setCurrentKey] = useState(0)
  const [contentData, setContentData] = useState([
    { id: 1, title: "Content Title 1", description: "Content Description 1"},
    { id: 2, title: "Content Title 2", description: "Content Description 2"},
    { id: 3, title: "Content Title 3", description: "Content Description 3"},
    { id: 4, title: "Content Title 4", description: "Content Description 4"},
  ])

  return (
    <>
      <Navigation setAuthorized={setAuthorized} mail={mail}/>
      <main>
        <button onClick={() => setCreateCardState(true)} className='bg-yellow-400 font-bold rounded-[12px] w-[134px] h-[41px] hover:bg-amber-400 text-center m-5' type='Submit'>Create Card</button>
        <div className='flex flex-wrap'>
          <EditCard contentData={contentData} setContentData={setContentData} currentKey={currentKey} isEditCardActive={isEditCardActive} setEditCardState={setEditCardState}/>
          <DeleteCard contentData={contentData} setContentData={setContentData} currentKey={currentKey} isDeleteCardActive={isDeleteCardActive} setDeleteCardState={setDeleteCardState}/>
          <CreateCard contentData={contentData} setContentData={setContentData} isCreateCardActive={isCreateCardActive} setCreateCardState={setCreateCardState}/>
          
          {contentData.map((content) => (
            <ContentCard key={content.id} currentKey={content.id} title={content.title} description={content.description} setCurrentKey={setCurrentKey} setEditCardState={setEditCardState} setDeleteCardState={setDeleteCardState}/>
          ))}
        </div>     
      </main>
    </>
  )
}

export default Mainpage