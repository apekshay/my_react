const ListItems = (props) => {
  const { name, price, description } = props.info
  return (
    <div className=' border-b-2 border-black p-4'>
      <div className='flex justify-between pb-3'>
        <div className='font-bold'>{name}</div>
        <div className='font-bold'>{price / 100}/-</div>
      </div>
      <div>{description}</div>
    </div>
  )
}

export default ListItems
