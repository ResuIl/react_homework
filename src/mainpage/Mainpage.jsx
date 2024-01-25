import { useState, useContext, useEffect } from 'react'
import Navigation from './components/Navigation'
import ContentCard from './components/ContentCard'
import CreateCard from './components/CreateCard'
import DeleteCard from './components/DeleteCard'
import EditCard from './components/EditCard'
import Context from '../ContextWrapper'

function Mainpage() {
  const {mail, getData, state, dispatch, cards, openModal } = useContext(Context);
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={`${openModal ? 'overflow-hidden' : null} `}>
      <Navigation/>
      <main>
        <button onClick={() => { dispatch({ type: "create" }) }} className='bg-yellow-400 font-bold rounded-[12px] w-[134px] h-[41px] hover:bg-amber-400 text-center m-5' type='Submit'>Create Card</button>
        <div className='flex flex-wrap'>
          {state.type === "delete" && (
            <DeleteCard activeCard={activeCard}/>
          )}

          {state.type === "edit" && (
            <EditCard activeCard={activeCard}/>
          )}
          
          {state.type === "create" && (
            <CreateCard/>
          )}
                 
          {cards.length ? 
            cards.map((content) => (
              <ContentCard key={content.id} data={content} setActiveCard={setActiveCard}/>
            )) : <h1 className='flex justify-center w-screen'>No Content Data Found</h1> 
          }

        </div>     
      </main>
    </div>
  )
}

export default Mainpage