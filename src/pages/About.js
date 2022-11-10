import React from 'react'
import Pricing from '../components/Pricing'

const About = () => {
  return (
    <div className='about-cont'>
        <div className='title'>
            <span className='stroke'>EXPLORE OUR </span>
            <span>PROGRAMS </span>
            <span className='stroke'>TO SHAPE YOU</span>
        </div>
        <div className='card-cont'>
          <div className='card'>
            <i className="fa-solid fa-dumbbell"></i>
            <span>Straight Training</span>
            <span>In this program, you are trained to improve your strength through many exercises</span>
            <span>Join Now &nbsp; &nbsp;<span>{'->'}</span></span>
          </div>
          <div className='card'>
            <i className="fa-solid fa-person-running"></i>
            <span>Cardio Training</span>
            <span>In this program, you are trained to improve your strength through many exercises</span>
            <span>Join Now &nbsp; &nbsp;<span>{'->'}</span></span>
          </div>
          <div className='card'>
          <i className="fa-solid fa-fire"></i>
            <span>Fat Burning</span>
            <span>In this program, you are trained to improve your strength through many exercises</span>
            <span>Join Now &nbsp; &nbsp;<span>{'->'}</span></span>
          </div>
          <div className='card'>
          <i className="fa-solid fa-heart-pulse"></i>
            <span>Health Fitness</span>
            <span>In this program, you are trained to improve your strength through many exercises</span>
            <span>Join Now &nbsp; &nbsp;<span>{'->'}</span></span>
          </div>
        </div>
        <Pricing />
        <div style={{
          height:'50px'
        }}>

        </div>
    </div>
  )
}

export default About