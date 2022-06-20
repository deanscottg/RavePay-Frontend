import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VipUpgrade from './VipUpgrade'
import { API_URL } from './apiAdapter'

function AccountCard({ account, setUser }) {
  const history = useNavigate()
  function HandleDeleteAccount() {
    fetch(`${API_URL}/accounts/${account.id}`, {
      method: 'DELETE',
    })
      .then(() => setUser(null))
      .then(() => history('/'))
  }

  return (
    <div className="bg-festival-couple bg-cover pb-4 bg-no-repeat h-full w-full min-h-screen w-screen">
      <div>
        <header className="text-6xl">
          {account.first_name}'s RavePay Account
        </header>
      </div>
      <div className=" pt-4 flex flex-col space-y-3 border-2 border-white-500 text-2xl mt-20 w-1/2">
        <p>Email:{account.email}</p>
        <p>Festival Status:{account.festival_status}</p>
        <p>Birthdate:{account.birthdate}</p>
        <p>RavePay balance:{account.ravepay_balance}</p>
      </div>
      <div className="mt-10 space-y-4">
        <div>
          <button
            className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500"
            onClick={() => history('/add-packs')}>
            Add to RavePay Balance
          </button>
        </div>
        <div>
          <button
            className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500"
            onClick={() => history('/order-history')}>
            My Orders
          </button>
        </div>
        <div>
          <button
            className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500"
            onClick={() => history('/vip-upgrade')}>
            Ask me about VIP upgrade?
          </button>
        </div>

        <div>
          <br></br>
          <button
            className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500"
            onClick={HandleDeleteAccount}>
            Delete My account
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountCard
