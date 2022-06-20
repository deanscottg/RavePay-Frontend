import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import ShoppingCart from './ShoppingCart'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { API_URL } from './apiAdapter'

function Items({ passCartItems, account }) {
  const [displayItems, setDisplayedItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/items`)
      .then((response) => response.json())
      .then(setDisplayedItems)
  }, [])
  const onAddCartItem = (addedItem) => {
    // console.log(addedItem)
    const itemExists = cartItems.find((x) => x.id === addedItem.id)
    if (itemExists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === addedItem.id ? { ...itemExists, qty: itemExists.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...addedItem, qty: 1 }])
    }
  }

  const onRemoveCartItem = (removedItem) => {
    const itemExists = cartItems.find((x) => x.id === removedItem.id)
    if (itemExists.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== removedItem.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === removedItem.id
            ? { ...itemExists, qty: itemExists.qty - 1 }
            : x
        )
      )
    }
  }
  console.log(cartItems, 'check')
  console.log(account, 'account check')
  return (
    <div>
      {account ? (
        <div className="grid grid-cols-3 text-black">
          {displayItems.map((item) => {
            return (
              <ItemCard
                onAddCartItem={onAddCartItem}
                id={item.id}
                key={item.item_name}
                displayItem={item}></ItemCard>
            )
          })}
        </div>
      ) : (
        <h2 className="text-2xl">
          {' '}
          Please{' '}
          <span>
            <a href="/login"> LOGIN</a>
          </span>{' '}
          To view What we got
        </h2>
      )}
      {account ? (
        <div>
          <ShoppingCart
            passCartItems={passCartItems}
            onRemoveCartItem={onRemoveCartItem}
            onAddCartItem={onAddCartItem}
            cartItems={cartItems}
            displayItems={setDisplayedItems}></ShoppingCart>
        </div>
      ) : null}
    </div>
  )
}

export default Items
