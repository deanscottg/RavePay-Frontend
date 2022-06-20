import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from './apiAdapter'

function VipConfirmPopup({ account, trigger, setTrigger }) {
  const history = useNavigate()
  const [confirmBraceletId, setConfirmBraceletId] = useState('')
  const ravePayBalanceAfterUpgrade = account.ravepay_balance - 200
  // const [newVipStatus, setNewVipStatus]=useState("")
  function HandleVipConfirmation(e) {
    e.preventDefault()
    fetch(`${API_URL}/vipaccounts/${account.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        festival_status: 'VIP',
        ravepay_balance: ravePayBalanceAfterUpgrade,
      }),
    }).then((r) => {
      if (
        r.ok &&
        confirmBraceletId === account.bracelet_id &&
        account.festival_status === 'GA' &&
        account.ravepay_balance > 200
      ) {
        account.festival_status = 'VIP'
        account.ravepay_balance = ravePayBalanceAfterUpgrade
        alert('Enjoy that VIP upgrade!')
      } else if (r.ok && confirmBraceletId !== account.bracelet_id) {
        alert('Please check that bracelet fam and try again!')
      } else if (r.ok && account.ravepay_balance < 200) {
        alert(
          'Better update that balance if you want to use the VIP bathrooms!'
        )
      } else if (r.ok && account.festival_status === 'VIP') {
        alert('Already upgraded to VIP fam!')
      }
      history(`/accounts/${account.id}`)
    })
    // && alert("Enjoy that VIP upgrade!") && account.ravepay_balance === ravePayBalanceAfterUpgrade
  }

  return trigger ? (
    <div className="popup pb-20">
      <div className="popup-inner">
        <div className="flex flex-col">
          <button
            className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 mt-2 mr-8"
            onClick={() => setTrigger(false)}>
            Close
          </button>

          <form className="text-black" onSubmit={HandleVipConfirmation}>
            <input
              placeholder="Scan your bracelet"
              type="text"
              id="Bracelet_id"
              autoComplete="off"
              value={confirmBraceletId}
              onChange={(e) => setConfirmBraceletId(e.target.value)}
            />

            <button
              className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500"
              type="submit">
              VIP!
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default VipConfirmPopup
