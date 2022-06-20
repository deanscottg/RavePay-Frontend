import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function SuccessfulAccountAdd({ account, onUpdatedBalance }) {
  const [addValue] = useSearchParams()
  const purchasedAdd = parseInt(addValue.get('amount'))
  // account = true
  useEffect(() => {
    fetch('/added-funds', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        add_pack: purchasedAdd,
      }),
    }).then((r) => {
      if (r.ok) {
        onUpdatedBalance()
      }
    })
  }, [])

  return (
    <div>
      {account ? (
        <div>
          <h1>Thanks for using RavePay {account.first_name}</h1>
          <h2> Your new RavePay Balance is:{account.ravepay_balance}</h2>
        </div>
      ) : null}
    </div>
  )
}

export default SuccessfulAccountAdd
