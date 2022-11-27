import React from 'react'


const GetApp = () => {
  return (
    <section className='container get_the_app'>
     <div className='semiContainer'>
        <div className='left'>
            <img src='https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png' alt='' />
        </div>
        <div className='right'>
            <h1>Get the Zomato App</h1>
            <p>We will send you a link, open it on your phone to download the app</p>
            <div className='buttons_container'>
                <div>
                    <input typeof='radio' id='email' name='download_app'/>
                    <label form='email'>Email</label>
                </div>
                <div>
                    <input typeof='radio' id='phone' name='download_app'/>
                    <label form='email'>Phone</label>
                </div>
            </div>
            <div className='input_container'>
                <input typeof='text' placeholder='Email' />
                <button>Share App Link</button>
            </div>
            <div className='download_app_container'>
             <h5>Download App From</h5>
             
                <img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' alt='apple store'/>
                <img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' alt='play store' />
                </div>
        </div>
     </div>

    </section>
  )
}

export default GetApp
