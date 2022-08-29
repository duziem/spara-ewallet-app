import React from 'react'
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

// const Apps = () => {
//   const options = {
//     animationData: groovyWalkAnimation,
//     loop: true
//   };

//   const { View } = useLottie(options);

//   return <>{View}</>;
// };

// export default Apps;


  

const Response = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
      };
      const { View } = useLottie(options);
  return (
    <>
    <div className='container-fluid m-4'>
       <h2 className='p-3' style={{fontSize:'4vw',textAlign:'center'}}>Congratulation</h2>
      <div className='container-{Break-point} text-sm-center justify-content-center m-4'  style={{width:'400px', height:'400px'}}>{View}</div>;
    <p style={{fontSize:'4vw',textAlign:'center'}}>Your Account has been created</p>
    </div>
    <div>
        <button className="btn btn-primary" style={{fontSize:'1vw',textAlign:'center'}}> click to view your account number</button>
    </div>
    </>
  )
}

export default Response
