import React from 'react'
import ContentCard from './components/ContentCard'
import CreateCard from './components/CreateCard'
import DeleteCard from './components/DeleteCard'

function Mainpage() {
  return (
    <>
      <nav className='flex bg-zinc-400 h-[10vh]'>
        <div class="flex-none h-50 p-7">
          <span className='font-bold'>example@example.com</span>
        </div>
        <div class="shrink w-full"></div>
        <div class="flex-none h-50 p-7">
          <button className='bg-yellow-400 font-bold rounded-[12px] w-[134px] h-[41px] hover:bg-amber-400 text-center' type='Submit'>Log out</button>
        </div>
      </nav>

      <main>
        <button className='bg-yellow-400 font-bold rounded-[12px] w-[134px] h-[41px] hover:bg-amber-400 text-center m-5' type='Submit'>Create Card</button>
        <div className='flex flew-wrap max-w-[2000px]'>
          {/* Burda widthleri sıxılır tek setirde olur alta düşmür niye bilmirem */}
          <ContentCard/>
          <ContentCard/>
          <ContentCard/>
          <ContentCard/>
        </div>     
      </main>
    </>
  )
}

export default Mainpage