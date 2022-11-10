import React from 'react'

const Error = () => {
  return (
    <div style={{
      height:'100vh',
      backdropFilter:'blur(20px)',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    }}>
      <h1 style={{
        color:'white',
        fontSize:'50px'
      }}>Error 404</h1>
      <h2 style={{
        color:'white'
      }}>Webpage Not found</h2>
    </div>
  )
}

export default Error