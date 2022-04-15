import { useState } from 'react'

import { createGoal } from '../Goals/goalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function GoalForm() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
       
    
        if (!user) {
          navigate('/login')
        }
    
     
    
      }, [user, navigate])
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('')
  const [rent, setRent] = useState('')
  const [imgUrl, setImgUrl] = useState('')


  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

dispatch(createGoal({ address,email,rent,imgUrl,type }))
  setAddress('')
  setEmail('')
  setType('')
  setRent('')
  setImgUrl('')

  }

  return (
    <section className='form'>
         <center><button className='btn btn-block'><a href="/dashboard">Dashboard</a></button></center>
       <center><h1 style={{padding:"1.5rem",fontFamily:"Helvetica"}}>List Your Property</h1></center>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
           value={address}
           onChange={(e) => setAddress(e.target.value)} required
          />
       
        <label htmlFor='imgUrl'>Image</label>
          <input
            type='text'
            name='imgUrl'
            id='imgUrl'
           value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)} required
          />

<label htmlFor='type'>Type Of Room</label>
          <input
            type='text'
            name='type'
            id='type'
            value={type}
            onChange={(e) => setType(e.target.value)} required
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
           value={email}
           onChange={(e) => setEmail(e.target.value)} required
          />
            <label htmlFor='rent'>Rent</label>
          <input
            type='text'
            name='rent'
            id='rent'
           value={rent}
           onChange={(e) => setRent(e.target.value)} required
          />
           </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            List Property
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm