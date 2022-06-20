import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavLink from './NavLink'
import { API_URL } from './apiAdapter'

function Navbar({ account, setUser }) {
  const history = useNavigate()
  function handleLogOutClick() {
    fetch(`${API_URL}/logout`, { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    })
    history('/')
  }
  return (
    <header className="border-b">
      <div>
        <div className="relative flex flex-wrap items-left justify-between px-1 py-2 bg-pink-500 mb-3 font-sans flex space-x-1">
          <NavLink
            className="rounded-md hover:font-bold border-1 hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
            to="/">
            Home
          </NavLink>
          {account ? (
            <div className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded">
              <button className="" onClick={handleLogOutClick}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
                to="/login">
                Login
              </NavLink>
            </>
          )}
          <NavLink
            className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
            to="/items">
            Items
          </NavLink>
          {account ? (
            <NavLink
              className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
              to={`/accounts/${account?.id}`}>
              Account
            </NavLink>
          ) : (
            <NavLink
              className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
              to={'/accounts/'}>
              Account
            </NavLink>
          )}
          <NavLink
            className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
            to="/about">
            About RavePay
          </NavLink>
          {account ? (
            <div className="flex-col md:flex-row float-right text-xs font-medium">
              <p>
                {account.first_name} {account.last_name}
              </p>
              <p>Festival Status:{account.festival_status}</p>
              <p>RavePayBalance:{account.ravepay_balance}</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
