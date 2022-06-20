import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup({ setUser, account }) {
  const current = new Date().toISOString().split('T')[0]
  const history = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [newBraceletId, setNewBraceletId] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [festivalStatus, setFestivalStatus] = useState('GA')

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        password: password,
        password_confirmation: passwordConfirmation,
        email: email,
        bracelet_id: newBraceletId,
        birthdate: birthDate,
        festival_status: festivalStatus,
        ravepay_balance: 0.0,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((account) => {
          setUser(account)
          history(`/accounts/${account.id}`)
        })
      }
    })
  }
  return (
    <section className="h-screen font-sans bg-black rounded">
      <div>
        <h2 className="text-4xl text-white">Get started with RavePay</h2>
        <p>
          Let us worry about the financials, you just figure out that next set
          time conflict!
        </p>
      </div>
      {/* <h2 className="text-2xl">Lets get you started with RavePay</h2> */}
      <div className="container px-6  py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
            <img
              src="https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/73/2019/12/12153558/EDCK2019_0831_205503-01290_IME.jpg"
              className="w-full h-full rounded-md object-cover ease-in-out duration-1000 group-hover:rotate-6 group-hover:scale-125"
              alt="Welcome Home"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20 text-white text-size-l underline font-semibold">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h1 className="text-xl">Ready to Rage?</h1>
                <label htmlFor="First Name">First Name</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  id="First_name"
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Last Name">Last Name</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  id="Last_name"
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="password"
                  id="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div>
                <label htmlFor="password">Run that password back for me!</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="password"
                  id="Password_confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div>
                <label htmlFor="Bracelet">Scan that bracelet!</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  id="Bracelet_id"
                  autoComplete="off"
                  value={newBraceletId}
                  onChange={(e) => setNewBraceletId(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  id="Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Birthdate">Date of Birth</label>
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="date"
                  id="Birthdate"
                  autoComplete="off"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max={current}
                />
              </div>
              <div>
                <label htmlFor="Festival Status">Bracelet Status</label>
                <select
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="dropdown"
                  value={festivalStatus}
                  onChange={(e) => setFestivalStatus(e.target.value)}>
                  <option value="GA">GA (General Admission)</option>
                </select>
              </div>

              <button
                className="inline-block px-7 py-3 bg-pink-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:pink-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                type="submit">
                Lets Go!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
