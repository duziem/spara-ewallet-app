import React from 'react'

const Details = () => {
  return (
    <>
    <div className='container-fluid'>
      <form >
      <div className='form-group'>
        <label forHtml="actname">Account Name</label>
        <input 
        type="text"
        placeholder='Your Account Name'
        /></div>

        <div className='from-group'>
        <label forHtml="actnumb">Account Number</label>
        <input 
        type="text"
        placeholder='Your Account Number'
        /></div>
        <div className='container-fluid'>
        <div className='d-flex justify-content-evenly'>
        <button className='btn btn-type-danger' type='Submit' style={{color:'red'}} value="Back to Dash board">Back to Dash Board</button>
        <button type='Submit' style={{border:'1px solid red'}} value="Back to Dash board">Back to Dash Home</button></div>
        </div>
      </form>
    </div></>
  )
}

export default Details
