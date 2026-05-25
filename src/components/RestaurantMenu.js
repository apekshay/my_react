import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantsMenu] = useState(null)

  useEffect(() => {
    fetchMenu()
  }, [])

  const { restId } = useParams()
  const fetchMenu = async () => {
    const data = await fetch('https://corsproxy.io/?' + 'https://namastedev.com/api/v1/listRestaurantMenu/' + restId)

    const res = await data.json()

    setRestaurantsMenu(res)
  }

  if (restaurantMenu === null) {
    return <Shimmer></Shimmer>
  }
  const { name, costForTwo, cuisines, avgRating } = restaurantMenu?.data?.cards[2]?.card?.card?.info
  const { itemCards } = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log('itemCards', itemCards)
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(',')}- {costForTwo}
      </h2>
      <h3>{avgRating}</h3>

      <h1>Menu</h1>
      {itemCards.map((item) => {
        return <li key={item.card.info.id}>{item.card.info.name}</li>
      })}
    </div>
  )
}

export default RestaurantMenu
