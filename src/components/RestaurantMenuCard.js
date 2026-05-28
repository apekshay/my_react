import ListItems from './ListItems'
import { useState } from 'react'

const RestaurantMenuCard = (props) => {
  const { itemCards, title } = props.data
  const showItems = props.showItems
  const setShowIndex = props.setShowIndex

  const handleClick = () => {
    setShowIndex()
  }
  return (
    <div className='bg-red-100 text-black shadow-md flex flex-1 mb-3 p-3 flex-col w-[600px]'>
      <div className='flex justify-between mb-4' onClick={() => handleClick()}>
        <div className='font-bold'>
          {title} ({itemCards.length})
        </div>
        <div>🔽</div>
      </div>
      {showItems && (
        <div>
          {itemCards.map((itemCard) => (
            <ListItems key={itemCard.card.info.id} info={itemCard.card.info}></ListItems>
          ))}
        </div>
      )}
    </div>
  )
}
export default RestaurantMenuCard
