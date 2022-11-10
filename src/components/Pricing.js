import React from 'react'
import { Link } from 'react-router-dom'
import '../css/App.css'

const Pricing = () => {
  return (
    <div className='price-cont'>
        <div className='title'>
            <span className='stroke'>READY TO START </span>
            <span>YOUR JOURNEY </span>
            <span className='stroke'>NOW WITHUS</span>
        </div>
        <div className='price-card'>
        <i className="fa-solid fa-heart-pulse"></i>
            <span style={{
                fontWeight:'bold'
            }}>Basic Plan</span>
            <span style={{
                fontSize:'30px',
                fontWeight:'bold'
            }}>$25</span>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <span><i className="fa-solid fa-circle-check"></i> 2 hours of exercises</span>
            <span><i className="fa-solid fa-circle-check"></i> Free consultation to coaches</span>
            <span><i className="fa-solid fa-circle-check"></i> Access to the Community</span>
            <span style={{marginTop:'20px'}}>See More benifits &nbsp; {'->'}</span>
            </div>
            <Link className='join-now' to='/about'>Join Now</Link>
        </div>
        <div className='price-card'>
        <i className="fa-solid fa-crown"></i>
            <span style={{
                fontWeight:'bold'
            }}>Premium Plan</span>
            <span style={{
                fontSize:'30px',
                fontWeight:'bold'
            }}>$25</span>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <span><i className="fa-solid fa-circle-check"></i> 5 hours of exercises</span>
            <span><i className="fa-solid fa-circle-check"></i> Free consultation to coaches</span>
            <span><i className="fa-solid fa-circle-check"></i> Access to the minibar</span>
            <span style={{marginTop:'20px'}}>See More benifits &nbsp; {'->'}</span>
            </div>
            <Link className='join-now' to='/about'>Join Now</Link>
        </div>
        <div className='price-card'>
        <i className="fa-solid fa-dumbbell"></i>
            <span style={{
                fontWeight:'bold'
            }}>Pro Plan</span>
            <span style={{
                fontSize:'30px',
                fontWeight:'bold'
            }}>$25</span>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <span><i className="fa-solid fa-circle-check"></i> 8 hours of exercises</span>
            <span><i className="fa-solid fa-circle-check"></i> Free consultation to coaches</span>
            <span><i className="fa-solid fa-circle-check"></i> Free Fitness Merchandises</span>
            <span style={{marginTop:'20px'}}>See More benifits &nbsp; {'->'}</span>
            </div>
            <Link className='join-now' to='/about'>Join Now</Link>
        </div>
        
    </div>
  )
}

export default Pricing