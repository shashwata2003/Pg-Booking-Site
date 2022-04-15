import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../Auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
   <center> <button className='btn' onClick={onLogout} style={{margin:"1.5rem"}}>
   <u> Logout </u>
    </button>
    <button className='btn btn-block' >
    
    <Link to="/dashboard/list">List</Link>
    </button></center>
    
          
           </header>)
         
       }
       
       export default Header