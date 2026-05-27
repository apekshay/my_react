import { IMG_BASE_URL } from '../../utils/constants'

const RestaurantCard = (props) => {
  const { resData } = props

  const { name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwo } = resData

  return (
    <div className='shadow-2xs border-s-fuchsia-50 p-2 rounded-lg w-[250px] shadow-xl hover:bg-gray-100'>
      <img
        className='h-[200px] w-[100%] rounded-md mb-4'
        src={IMG_BASE_URL + '' + cloudinaryImageId}
        alt='Restaurant'
      />
      <h3 className='font-bold text-lg'>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} star</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

//Higher order component
export const withVegRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-green-500 text-white rounded-sm m-2 p-2'>Veg</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard
