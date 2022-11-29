import React from 'react'
import Header from './Header'
import Top from './Top'
import WeOffer from './WeOffer' 
import Collections from './Collections'
import GetApp from './GetApp'
import Footer from './Footer'



const App = () => {
  return (
   <div>
    <section className='Top_section'>
    <Header />
    <Top />
    </section>
    <div>
    <WeOffer />
    <Collections />
    <GetApp />
    <Footer />
   </div>
    
  </div>
    
    
  )
}

export default App