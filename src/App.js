import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SignUp from './SignUp'
import Navbar from './Navbar'
import Home from './Home'
import LogIn from './LogIn'
import Items from './Items'
import About from './About'
import AccountOrders from './AccountOrders'
import AccountPage from './AccountPage'
import ConfirmPurchasePage from './ConfirmPurchasePage'
import VipUpgrade from './VipUpgrade'
import VipConfirmPopup from './VipConfirmPopup'
import AccountAddPackMenu from './AccountAddPackMenu'
import SuccessfulAccountAdd from './SuccessfulAccountAdd'
import { useNavigate } from 'react-router-dom'

import './App.css'
import { API_URL } from './apiAdapter'

function App({ cartItems }) {
  const [renderCartItems, setRenderCartItems] = useState([])
  const [user, setUser] = useState(null)
  const passCartItems = (cartItems) => {
    setRenderCartItems(cartItems)
  }

  function onUpdatedBalance() {
    fetch(`${API_URL}/me`).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }

  useEffect(() => {
    // auto-login
    fetch(`${API_URL}/me`).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  // const isLoggedIn = !!user
  return (
    <>
      <Navbar account={user} setUser={setUser} />
      <main className="bg-gray-100 flex-grow bg-black text-white font-sans">
        <Routes>
          <Route path="/" element={<Home account={user} />}></Route>

          <Route
            path="/accounts/:id"
            element={<AccountPage account={user} setUser={setUser} />}></Route>

          <Route
            path="/items"
            element={
              <Items
                cartItems={cartItems}
                account={user}
                passCartItems={passCartItems}
              />
            }></Route>
          <Route
            path="/confirm-purchase"
            element={
              <ConfirmPurchasePage
                onUpdatedBalance={onUpdatedBalance}
                cartItems={renderCartItems}
                account={user}
                setUser={setUser}
              />
            }></Route>
          <Route path="/about" account={user} element={<About />}></Route>
          <Route exact path="/" account={user} element={<Home />}></Route>
          <Route
            path="/vip-upgrade"
            element={
              <VipUpgrade account={user} setAccount={setUser} />
            }></Route>

          <Route
            path="/add-packs"
            element={
              <AccountAddPackMenu account={user} setAccount={setUser} />
            }></Route>
          <Route
            path="/checkout/success"
            element={
              <SuccessfulAccountAdd
                onUpdatedBalance={onUpdatedBalance}
                account={user}
                setAccount={setUser}
              />
            }></Route>

          <Route
            path="/order-history"
            element={
              <AccountOrders account={user} setAccount={setUser} />
            }></Route>

          <Route
            path="/login"
            element={<LogIn setUser={setUser} account={user} />}></Route>

          <Route
            path="/sign-up"
            element={<SignUp setUser={setUser} account={user} />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
