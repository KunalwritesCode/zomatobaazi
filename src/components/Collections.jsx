import React from 'react'

const Collections = () => {
  return (
    <section className='container collection'>
      <h1>Collections</h1>
      <div className='sub_heading_container'>
        <span>Explore curated lists of top restaurants, cafes, pubs, and bars in Chandigarh, based on trends</span>
        <span>All collections in Chandigarh</span>
      </div>
      <div className='collections_card_container'>
        <div className='card card1'>
            <div className='overlay'></div>
            <div className='content'>
                <h4>Insta-worthy Places</h4>
                <span>7 Places</span>
            </div>
        </div>
        <div className='card card2'>
            <div className='overlay'></div>
            <div className='content'>
                <h4>Best Bars & Pubs</h4>
                <span>9 Places</span>
            </div>
        </div>
        <div className='card card3'>
            <div className='overlay'></div>
            <div className='content'>
                <h4>Stunning Rooftops</h4>
                <span>8 Places</span>
            </div>
        </div>
        <div className='card card4'>
            <div className='overlay'></div>
            <div className='content'>
                <h4>Luxury At Its Best</h4>
                <span>5 Places</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Collections
