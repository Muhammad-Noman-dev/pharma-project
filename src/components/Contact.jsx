import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [data , setdata] = useState({
    firstname: "",
    lastname:"",
    email:"",
    subject:"",
    message:"",
  });

  

  const handleClick = (e)=>{
    e.preventDefault();
    console.log(data);
    setdata({
      firstname: "",
    lastname:"",
    email:"",
    subject:"",
    message:"",
    })
    }
   
  
   

  return (
    <div>
      <form onSubmit={handleClick} className='form-flex'>
        <label className='lab' >First-Name</label>
        <input className='inp' type="text" required name="firstname" value={data.firstname} onChange={(e)=> setdata ({ ...data , [e.target.name] : e.target.value})} />
        <label className='lab' >Last-Name</label>
        <input className='inp' type="text" required name="lastname" value={data.lastname} onChange={(e)=> setdata ({ ...data , [e.target.name] : e.target.value})} />
        <label className='lab' >Email</label>
        <input className='inp' type="email" required name="email" value={data.email} onChange={(e)=> setdata ({ ...data , [e.target.name] : e.target.value})} />
        <label className='lab'>Subject</label>
        <input className='inp' type="text" name="subject" value={data.subject} onChange={(e)=> setdata ({ ...data , [e.target.name] : e.target.value})} />
        <label className='lab' >Message</label>
        <input className='msg' type="text" name="message" value={data.message} onChange={(e)=> setdata ({ ...data , [e.target.name] : e.target.value})} />
        <button className='contact-btn' type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
