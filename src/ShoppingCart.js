import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { AiOutlineMinusSquare } from 'react-icons/ai'

function ShoppingCart({
  cartItems,
  setCartItems,
  onAddCartItem,
  onRemoveCartItem,
  passCartItems,
}) {
  const cartTotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const history = useNavigate()
  const redirectToConfirmPage = () => {
    passCartItems(cartItems)
    history('/confirm-purchase')
  }

  return (
    <aside>
      <h1>ShoppingCart</h1>
      <div>{cartItems.length === 0 && <div>Lets buy stuff!</div>}</div>
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>
          <div>
            <p>{cartItem.item_name}</p>
            <p>
              Quantity:{cartItem.qty} {cartItem.price} RavePay Credits{' '}
            </p>
            <button onClick={() => onAddCartItem(cartItem)}>
              <BsFillCartPlusFill />
            </button>
            <button onClick={() => onRemoveCartItem(cartItem)}>
              <AiOutlineMinusSquare />
            </button>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div>Your Order Total:</div>
          <div>{cartTotal} RavePay Credits</div>
          <button onClick={redirectToConfirmPage}>Checkout</button>
        </>
      )}
    </aside>
  )
}

export default ShoppingCart
