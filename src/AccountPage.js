import React from 'react'
import AccountCard from './AccountCard'
import { useNavigate } from 'react-router-dom'
const AccountPage = ({ account, setUser }) => {
  const navigate = useNavigate()
  console.log(account, 'festival')
  return (
    <div>
      {account ? (
        <AccountCard
          setUser={setUser}
          key={`${account.id}`}
          id={`${account.id}`}
          account={account}></AccountCard>
      ) : (
        <h2 className="text-2xl">
          {' '}
          Please{' '}
          <span>
            <a href="/login"> LOGIN</a>
          </span>{' '}
          To start raging with RavePay!
        </h2>
      )}
    </div>
  )
}

export default AccountPage
