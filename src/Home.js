import React from 'react'
import ReactPlayer from 'react-player'

function Home({ user }) {
  return (
    //   if user ?
    <div>
      <span>
        {/* <div className="flex-inline items-baseline font-sans text-text-align-left text-white pt-4 pb-8"> */}
        <span className="inline-grid">
          <h2 className=" text-4xl text-white">Welcome To RavePay</h2>
          <h3 className="align-left"> Your Wallets New Festie Bestie</h3>
        </span>
        <span className="float-right h-40 w-40 py-2">
          <h3>Proudly partnered with:</h3>

          <img className="h-20 w-20" src="stripe.png" alt="strip-logo"></img>
        </span>
      </span>
      {/* </div> */}

      <div className="grid place-items-center h-screen">
        <ReactPlayer
          className="object-none m-2 pb-8 pt-0"
          height="840px"
          width="1160px"
          url="./RavePayHomePage.mov"
          playing="true"
          muted="true"
          loop="true"></ReactPlayer>
      </div>
    </div>
  )
}

export default Home
