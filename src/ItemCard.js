import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'

function ItemCard({ displayItem, onAddCartItem }) {
  return (
    <div className="m-4 p-4 bg-white rounded-lg shadow-sm text-black">
      <div className="text-black">
        <img
          className="w-36 object-contain"
          alt={displayItem.item_name}
          src={displayItem.item_image}
        />
        <p className="text-black-500">{displayItem.item_name}</p>
        <p>${displayItem.price}</p>
        <p>{displayItem.category}</p>
        <button
          className="hover:text-pink-500 hover:underline"
          onClick={() => onAddCartItem(displayItem)}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ItemCard
