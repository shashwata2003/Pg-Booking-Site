import { useState } from 'react'

import { createDoc } from '../Doc/DocSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DocForm() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
       
    
        if (!user) {
          navigate('/login')
        }
    
     
    
      }, [user, navigate])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [aadharUrl,setAadharUrl] = useState('')



  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

dispatch(createDoc({ name,email,contact,aadharUrl}))
  setName('')
  setEmail('')
  setAadharUrl('')
  setContact('')
  

  }

  return (
    
    <section className='form'>
    <center><button className='btn btn-block'><a href="/dashboard">Dashboard</a></button></center>
    <center><p style={{fontFamily:"Helvetica",padding:"2rem"}}>Note- If After Payment You Are Redircted To This Page That Means Your Payment is not proccessed. <br/> Upload Your Documents Again and Retry Your payment once more</p></center>

       <center><h1 style={{padding:"1.5rem",fontFamily:"Helvetica"}}>Upload Your Documents</h1></center>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Student Name</label>
          <input
            type='text'
            name='name'
            id='name'
           value={name}
           onChange={(e) => setName(e.target.value)}  required
          />
       
        <label htmlFor='aadharUrl'>Aadhar Image Url</label>
          <input
            type='text'
            name='aadharUrl'
            id='aadharUrl'
           value={aadharUrl}
            onChange={(e) => setAadharUrl(e.target.value)} required
          />


          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
           value={email}
           onChange={(e) => setEmail(e.target.value)} required
          />
            <label htmlFor='rent'>Contact Number</label>
          <input
            type='text'
            name='contact'
            id='contact'
           value={contact}
           onChange={(e) => setContact(e.target.value)} required
          />
           </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Submit
          </button>
        </div>
      </form>
    <center> <form action="/create-checkout-session" method="POST">
      <button type="submit" className='btn btn-block'>
        Checkout
      </button></form>
      </center>
    </section>
  )
}

export default DocForm