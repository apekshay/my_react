import RestaurantCard from './RestaurantCard'
// import resCardList from '../../utils/mockData'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([])
  const [searchRestaurantsList, setSearchRestaurantsList] = useState([])
  const [searchText, setSearchText] = useState('')

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

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='searchText'
            placeholder='Write a text for search'
          />
          <button className='search-btn' onClick={() => search()}>
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            let filteredRestaurantsList = searchRestaurantsList.filter((resCard) => resCard.info.avgRating > 4.5)
            setSearchRestaurantsList(filteredRestaurantsList)
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {searchRestaurantsList.map((resData) => (
          <Link key={resData.info.id} to={'/restaurants/' + resData.info.id}>
            <RestaurantCard resData={resData.info} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
