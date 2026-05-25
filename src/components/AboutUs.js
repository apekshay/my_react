import UserClass from './UserClass'
import User from './User'

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name='Apeksha (function)' location='Nagpur' contact='9561061286' />
      <UserClass name='Apeksha (class)' location='Nagpur' contact='9561061286' />
    </div>
  )
}

export default AboutUs
