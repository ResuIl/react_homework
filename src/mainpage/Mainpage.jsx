import { useState, useContext, useReducer } from 'react'
import Navigation from './components/Navigation'
import ContentCard from './components/ContentCard'
import CreateCard from './components/CreateCard'
import DeleteCard from './components/DeleteCard'
import EditCard from './components/EditCard'
import Context from '../ContextWrapper'

function Mainpage() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "create":
        return {type: state.type = "create"}
      case "edit":
        return {type: state.type = "edit"}
      case "delete":
        return {type: state.type = "delete"}
      case "reset":
        return {type: state.type = ""}
      default:
        return state;
    }
  }

  const { mail } = useContext(Context);
  const [activeCard, setActiveCard] = useState();
  const [state, dispatch] = useReducer(reducer, { type: "" });
  const [cards, setCards] = useState([
    { id: 1, title: "Content Title 1", description: "Content Description 1"},
    { id: 2, title: "Content Title 2", description: "Content Description 2"},
    { id: 3, title: "Content Title 3", description: "Content Description 3"},
    { id: 4, title: "Content Title 4", description: "Content Description 4"},
  ]);

  return (
    <>
      <Navigation/>
      <main>
        <button onClick={() => { dispatch({ type: "create" }) }} className='bg-yellow-400 font-bold rounded-[12px] w-[134px] h-[41px] hover:bg-amber-400 text-center m-5' type='Submit'>Create Card</button>
        <div className='flex flex-wrap'>
          {state.type === "delete" && (
            <DeleteCard activeCard={activeCard} dispatch={dispatch} setCards={setCards}/>
          )}

          {state.type === "edit" && (
            <EditCard activeCard={activeCard} dispatch={dispatch} setCards={setCards}/>
          )}
          
          {state.type === "create" && (
            <CreateCard setCards={setCards} dispatch={dispatch} mail={mail}/>
          )}
                 
          {cards.length ? 
            cards.map((content) => (
              <ContentCard key={content.id} data={content} dispatch={dispatch} setActiveCard={setActiveCard}/>
            )) : <h1 className='flex justify-center w-screen'>No Content Data Found</h1> 
          }

        </div>     
      </main>
    </>
  )
}

export default Mainpage