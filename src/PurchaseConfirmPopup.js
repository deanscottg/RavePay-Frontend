import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PurchaseConfirmPopup({
  trigger,
  account,
  cartItems,
  setTrigger,
  cartTotal,
  onUpdatedBalance,
}) {
  const history = useNavigate()
  const [confirmBraceletId, setConfirmBraceletId] = useState('')
  const [newOrder, setNewOrder] = useState([])
  const newRavePayBalance = account.ravepay_balance - cartTotal
  const [updatedRavePayBalance, setUpdatedRavePayBalance] = useState('')
  function HandlePurchaseConfirmation(e) {
    e.preventDefault()
    console.log(cartTotal, account.ravepay_balance, 'totals')
    console.log(account.id)
    fetch(`/accounts/${account.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        festival_status: account.festival_status,
        ravepay_balance: newRavePayBalance,
      }),
    }).then((r) => {
      if (
        r.ok &&
        newRavePayBalance >= 0 &&
        confirmBraceletId === account.bracelet_id
      ) {
        onUpdatedBalance()
        account.ravepay_balance = newRavePayBalance
        alert('Thanks for purchase!, Get back out there and rage!')
      } else if (
        r.ok &&
        newRavePayBalance >= 0 &&
        confirmBraceletId !== account.bracelet_id
      ) {
        alert('Please check that bracelet fam and try again!')
      } else if (
        r.ok &&
        newRavePayBalance < 0 &&
        confirmBraceletId === account.bracelet_id
      ) {
        alert('RavePay account is a little light for this purchase!')
      } else {
        alert(
          'Not sure whats happenning here? A RavePay team member should be able to help!'
        )
      }
      fetch('/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_id: account.id,
          purchase_total: cartTotal,
          items: cartItems.map((cartItem) => {
            return cartItem.id
          }),
        }),
      }).then(() => {
        if (r.ok) {
          r.json().then((newOrder) => setNewOrder(newOrder))
        }
      })
    })

    history(`/accounts/${account.id}`)
  }

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Close
        </button>

        <form onSubmit={HandlePurchaseConfirmation}>
          <input
            className="text-black"
            placeholder="Scan your bracelet"
            type="text"
            id="Bracelet_id"
            autoComplete="off"
            value={confirmBraceletId}
            onChange={(e) => setConfirmBraceletId(e.target.value)}
          />

          <button type="submit">Purchase!</button>
        </form>
      </div>
    </div>
  ) : (
    ''
  )
}

export default PurchaseConfirmPopup
