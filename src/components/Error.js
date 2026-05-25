import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  console.log('err', err)
  return (
    <div>
      <h1>OOPs</h1>
      <h2>{err.status}</h2>
      <h2>{err.data}</h2>
    </div>
  )
}

export default Error
