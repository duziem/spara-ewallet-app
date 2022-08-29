import React from 'react'
import img from './OIP.jpg'
import img2 from './vector.png'
import './Services.css'
const Conditions = () => {
  return (
    <div className='justify-content-center'>
    <div className='container-{breakpoint}'>
    <div id='conditions'>
      <h2 style={{paddingTop:'10%',paddingBottom:'2%'}}><b>Terms And Conditions</b></h2>
      <img className="img-responsive" src={img} style={{paddingTop:'1%',paddingBottom:'1%',marginBottom:'2%', height:'100px' , width:'150px'}} alt=''/>
      </div>
      
      <div id='writeup'>
        <p>This AGREEMENT is BETWEEN: Spara Wallet , a company registered under the CBN and Allied Matters Act 2022 <br/>with registered address at 5B Water Corporation Road Landmark Towers Victoria Island, Eti-Osa 101233, Lagos that<br/> all the above listed informations are strictly for me and would be arrested if found incorrect.</p>



        <p>Spara is licensed by the Central Bank of Nigeria (“CBN”) to operate as an E-wallet financial services to customers of<br/>partner banks in Nigeria. 
</p>


<p>I have read and understand that this terms and conditions are important that must have effect on me if applicable.</p>



<button type="submit" className="btn btn-primary" style={{fontSize:'1vw',textAlign:'center'}}>Download Terms and conditions</button>
<img className="col-lg-4" style={{marginLeft:'0.5%', height:'20px' , width:'20px'}} src={img2}  alt=''/>

<p className="fw-bold " style={{marginRight:'12%',textAlign:'right' }}><b>Maintain the same footer</b></p></div>
</div> </div>

  )
}

export default Conditions
