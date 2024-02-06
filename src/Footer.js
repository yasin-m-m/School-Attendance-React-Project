import React from 'react'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();   
  return (
    <footer style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'1rem',backgroundColor:'black', color:'white',padding:'0.5rem'}}><p>Project by <a href="https://www.linkedin.com/in/yasinmm/" target='blank' style={{color:"white"}}> Yasin M M</a> . Copyright &copy; {year} </p></footer>
  )
}

export default Footer