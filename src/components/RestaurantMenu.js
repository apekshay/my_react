import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import RestaurantMenuCard from './RestaurantMenuCard'

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantsMenu] = useState(null)
  const [showIndex, setShowIndex] = useState(0)

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
  const categories = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((items) => {
    return items?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  })

  return (
    <div className='flex flex-col items-center'>
      <h1 className='p-2 font-bold my-2'>{name}</h1>
      <h2 className='font-bold my-2'>
        {cuisines.join(',')}- {costForTwo}
      </h2>

      <h1 className='font-bold mb-3'>Menu</h1>

      {categories.map((item, index) => {
        return (
          <RestaurantMenuCard
            key={item?.card?.card?.title}
            data={item?.card?.card}
            showItems={showIndex == index ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        )
      })}
    </div>
  )
}

export default RestaurantMenu
