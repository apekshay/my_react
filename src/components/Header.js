import { LOGO_URL } from '../../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/useOnlineStatus'

const Header = () => {
  const [btnName, setBtnName] = useState('Login')
  const status = useOnlineStatus()
  return (
    <div className='flex justify-between bg-pink-50 items-center shadow-lg'>
      <div className='logo'>
        <img src={LOGO_URL} alt='Logo' />
      </div>
      <div className='navlist'>
        <ul className='flex p-10 gap-4'>
          <li>Status: {status ? '✅' : '🔴'}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/'>Cart</Link>
          </li>
          <button className='login' onClick={() => (btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login'))}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
