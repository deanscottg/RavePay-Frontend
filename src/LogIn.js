import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from './apiAdapter'

function LogIn({ setUser }) {
  const history = useNavigate()
  const [braceletId, setBraceletId] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bracelet_id: braceletId, password: password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        history('/')
      } else {
        history('/sign-up')
      }
    })
  }

  return (
    <section className="h-screen font-sans bg-black rounded">
      <div className="container px-6  py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
            <img
              src="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/zv2pmvup4i98pmmp0up1.jpg"
              className="w-full h-full rounded-md object-cover ease-in-out duration-1000 group-hover:rotate-6 group-hover:scale-125"
              alt="Sign In"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20 text-white text-size-l underline font-semibold">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h1>LOGIN</h1>
                <label htmlFor="username">Account</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Scan Your Bracelet!"
                  type="text"
                  id="username"
                  autoComplete="off"
                  value={braceletId}
                  onChange={(e) => setBraceletId(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="inline-block px-7 py-3 bg-pink-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:pink-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                type="submit">
                Lets Go!
              </button>
            </form>
            <div>
              <button
                className="bg-gradient-to-r from-white-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded duration-500"
                onClick={() => history('/sign-up')}>
                No account? We got you!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LogIn
