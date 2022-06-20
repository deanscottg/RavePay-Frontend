import React from 'react'
import { useNavigate } from 'react-router-dom'

function AccountAddPackMenu({ account }) {
  function HandleAddPackSubmit(id) {
    fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        id,
      }),
    })
      // .then(response => response.json())
      // .then(data => {
      //     // navigate to data.url
      //     <Redirect to="data.url" />
      // })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            window.location.href = data.url
          })
        }
      })
  }
  return (
    <div>
      {account ? (
        <div>
          <div className="bg-rainbow-road bg-no-repeat bg-contain bg-left h-screen flex flex-col pr-4">
            <div className="bg-fire bg-no-repeat bg-contain bg-right h-screen flex flex-col pl-4">
              <div className="text-4xl font-bold pb-10 text-center">
                <h1>Choose the RavePay Add pack that best suits you!</h1>
              </div>
              <div className="text-xl pt-12 flex flex-col text-center pb-8 mr-4">
                <p className="hover:text-pink-500">
                  Here at RavePay We've preselected 5 different Add Packs you
                  can pick
                </p>
                <p className="hover:text-pink-500">
                  You do less thinking, and get you back to the next set you've
                  been dying to see!
                </p>
                <div>
                  <div className="flex flex-col my-12 flex-center-items">
                    <button
                      className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 max-w-xs m-auto"
                      onClick={() => HandleAddPackSubmit(1)}>
                      $20 Add pack
                    </button>

                    <button
                      className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 max-w-xs m-auto"
                      onClick={() => HandleAddPackSubmit(2)}>
                      $50 Add pack
                    </button>
                    <button
                      className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 max-w-xs m-auto"
                      onClick={() => HandleAddPackSubmit(3)}>
                      $100 Add pack
                    </button>
                    <button
                      className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 max-w-xs m-auto"
                      onClick={() => HandleAddPackSubmit(4)}>
                      $500 Add pack
                    </button>
                    <button
                      className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 max-w-xs m-auto"
                      onClick={() => HandleAddPackSubmit(5)}>
                      $1000 Add pack
                    </button>
                  </div>
                  <p className="mt-10">
                    RavePay Proudly partnered with:{' '}
                    <a
                      className="hover:text-pink-500 hover:underline"
                      href="https://stripe.com/">
                      Stripe
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AccountAddPackMenu
