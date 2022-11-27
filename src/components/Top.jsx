import React from 'react'

const Top = () => {
  return (
    
    <div className='top_section_container'>
      <img className='top_Section_Logo' src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' alt='Zomato logo' />
      <h1 className='top_section_title'>
        Discover the best food & drinks in Chandigarh
      </h1>

      <div className='top_section_input_container'> 
      <input className='input_container_location' typeof='text' placeholder='Chandigarh' />
      <input className='input_container_search' typeof='text' placeholder='Search For Restaurents, Cuisine or a Dish ' />
      

      </div>

      </div>
  )
}

export default Top
