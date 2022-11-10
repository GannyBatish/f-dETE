import React from 'react'
import { Link } from 'react-router-dom'
import '../css/App.css'
import Hero from '../img/hero_image.png'
const Home = () => {
  return (
    <div className='home-cont'>
        <div className='left'>
            <div>
            <div className='best'>
                <div className='div-hover'></div>
                <span className='best-span'>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>
            </div>
            <div className='shape'>
                <span className='stroke'>SHAPE</span>
                <span> YOUR</span><br/>
                <span>IDEAL</span>
                <span> BODY</span>
            </div>
            <div>
                <span style={{color:'white',fontSize:'15px'}}>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
            <div className='number'>
                <div className='single'>
                    <span>+ 140</span>
                    <span>EXPERT COACHES</span>
                </div>
                <div className='single'>
                    <span>+ 985</span>
                    <span>MEMBERS JOINED</span>
                </div>
                <div className='single'>
                    <span>+ 50</span>
                    <span>FITNESS PROGRAMS</span>
                </div>
            </div>
            <div className='btndiv'>
                <Link to='/' className='getbtn'>GET STARTED</Link>
                <Link to='/' className='lrnbtn'>LEARN MORE</Link>
            </div>
        </div>
        <img className='hero-img' src={Hero} alt='hero'/>
        <div className='right'>
             
        </div>
    </div>
  )
}

export default Home