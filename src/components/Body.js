import RestaurantCard, { withVegRestaurant } from './RestaurantCard'
// import resCardList from '../../utils/mockData'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([])
  const [searchRestaurantsList, setSearchRestaurantsList] = useState([])
  const [searchText, setSearchText] = useState('')

  const VegRestaurantCard = withVegRestaurant(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://corsproxy.io/?' + 'https://namastedev.com/api/v1/listRestaurants')
    const json = await data.json()
    setRestaurantsList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSearchRestaurantsList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const search = () => {
    const filteredRestaurantsList = restaurantsList.filter((restaurant) => {
      const resName = restaurant?.info?.name?.toLowerCase()
      return resName.includes(searchText.toLowerCase())
    })

    console.log('filteredRestaurantsList', filteredRestaurantsList, searchText)

    setSearchRestaurantsList(filteredRestaurantsList)
  }
  console.log('restaurantsList', restaurantsList)
  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='flex justify-between m-4 '>
        <div>
          <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='p-4 mr-2 border border-solid border-gray-500 h-10'
            placeholder='Write a text for search'
          />
          <button className='px-2 bg-amber-300 h-10 rounded' onClick={() => search()}>
            Search
          </button>
        </div>
        <button
          className='px-2 bg-amber-300 h-10 rounded'
          onClick={() => {
            let filteredRestaurantsList = searchRestaurantsList.filter((resCard) => resCard.info.avgRating > 4.5)
            setSearchRestaurantsList(filteredRestaurantsList)
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className='flex gap-5 flex-wrap p-10 justify-center'>
        {searchRestaurantsList.map((resData) => (
          <Link key={resData.info.id} to={'/restaurants/' + resData.info.id}>
            {resData.info.veg ? (
              <VegRestaurantCard resData={resData.info} />
            ) : (
              <RestaurantCard resData={resData.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
