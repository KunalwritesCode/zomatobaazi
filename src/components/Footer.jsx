import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    
    <footer className='container footer'>
     <div className='footer_section1'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' alt='zomato logo'  />
        <div className='section1__buttonContainer'>
            <button>
                <img src='https://th.bing.com/th/id/OIP.v2xHxMeKF0Guv_YGO0gEUQHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7' alt='' style={{width :'17px' ,}}/>
                India
             </button>
             <button>
                <LanguageIcon />
                English
             </button>
        </div>
     </div>

     <div className='navigation_container'>
        <div className='link__container'>
            <h5>About Zomato</h5>
            <a className='footer__link'href='#'>Who we are</a>
            <a className='footer__link'href='#'>Blog</a>
            <a className='footer__link'href='#'>Work with us</a>
            <a className='footer__link'href='#'>Investor Relations</a>
            <a className='footer__link'href='#'>Report Fraud</a>
            <a className='footer__link'href='#'>Contact Us</a>
        </div>
        <div className='link__container'>
            <h5>ZOMAVERSE</h5>
            <a className='footer__link'href='#'>Zomato</a>
            <a className='footer__link'href='#'>Blinkit</a>
            <a className='footer__link'href='#'>Feeding India</a>
            <a className='footer__link'href='#'>HYPERPURE </a>
            <a className='footer__link'href='#'>Zomaland</a>
            
        </div>
        <div className='link__container'>
            <h5>FOR RESTAURANTS</h5>
            <a className='footer__link'href='#'>Partner With Us </a>
            <a className='footer__link'href='#'>Apps For You </a>
            <br />
            <h5>FOR ENTERPRISES</h5>
            <a className='footer__link'href='#'>Zomato For Work</a>
        </div>
        <div className='link__container'>
          <h5>LEARN MORE</h5>
          <a className='footer__link' href="#">Privacy</a>
          <a className='footer__link' href="#">Security</a>
          <a className='footer__link' href="#">Terms</a>
          <a className='footer__link' href="#">Sitemap</a>
        </div>
        <div className='link__container'>
            <h5>SOCIAL LINKS</h5>
            <div className='social__links_container'>
            <button><LinkedInIcon /> </button>
            <button><InstagramIcon /> </button>
            <button><TwitterIcon /> </button>
            <button><YouTubeIcon /> </button>
            <button><FacebookIcon /> </button>
            </div>
             <br />
          <img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' alt='' className='footer__store_logos' />
       
        <img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' alt='play' className='footer__store_logos' />
        </div>
     </div>

    </footer>
  )
}

export default Footer