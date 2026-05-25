const styleCard = {
  backgroundColor: '#F0F0F0',
}

const RestaurantCard = (props) => {
  const { resData } = props

  const { name, imgUrl, cuisines, avgRating, deliveryTime, costForTwo } = resData

  return (
    <div className='res-card' style={styleCard}>
      <img className='res-img' src={imgUrl} alt='Restaurant' />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} star</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard
