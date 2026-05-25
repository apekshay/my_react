import { useState } from 'react'

const User = (props) => {
  const [count1] = useState(0)
  const [count2] = useState(0)
  const { name, location, contact } = props
  return (
    <div className='user-container'>
      <div>{count1}</div>
      <div>{count2}</div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{contact}</div>
    </div>
  )
}

export default User
