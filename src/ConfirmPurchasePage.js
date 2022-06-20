import React, { useState } from 'react'
import PurchaseConfirmPopup from './PurchaseConfirmPopup'

function ConfirmPurchasePage({
  account,
  setUser,
  cartItems,
  onUpdatedBalance,
}) {
  const [purchaseConfirmPopup, setConfirmPurchasePopup] = useState(false)
  const cartTotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0)

  return (
    <div>
      <h1>{account.first_name}'s Order</h1>
      {cartItems.map((cartItem) => (
        <div>
          <p>
            {cartItem.item_name} x Quantity: {cartItem.qty}{' '}
          </p>
        </div>
      ))}

      <hr />
      <p>Total: {cartTotal} RavePay Credits</p>
      <hr />

      <button onClick={() => setConfirmPurchasePopup(true)}>
        Complete my Purchase
      </button>
      <PurchaseConfirmPopup
        onUpdatedBalance={onUpdatedBalance}
        account={account}
        cartItems={cartItems}
        trigger={purchaseConfirmPopup}
        setTrigger={setConfirmPurchasePopup}
        cartTotal={cartTotal}></PurchaseConfirmPopup>
    </div>
  )
}

export default ConfirmPurchasePage
