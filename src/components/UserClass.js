import React from 'react'

class UserClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, location, contact } = this.props
    const { count } = this.state
    return (
      <div className='user-container'>
        <div>{count}</div>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            })
          }}>
          increment
        </button>
        <div>{name}</div>
        <div>{location}</div>
        <div>{contact}</div>
      </div>
    )
  }
}

export default UserClass
