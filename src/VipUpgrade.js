import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VipConfirmPopup from './VipConfirmPopup'

function VipUpgrade({ account }) {
  const [vipConfirmationPopup, setVipConfirmationPopup] = useState(false)
  const history = useNavigate()
  return (
    <div className=" text-white font-bold pb-4 bg-main-stage bg-cover bg-no-repeat h-full w-full min-h-screen w-screen">
      <div>
        <div className="text-center ">
          <h1 className="bg-pink-500 rounded text-4xl pb-4 font-extrabold">
            Upgrade Your bracelet to Vip here with RavePay!
          </h1>
        </div>
        <div className=" text-center text-2xl font-bold text-center pt-5 pb-20 mix-blend-mode: difference ">
          <p>VIP ugrade includes access to:</p>
          <ul>Exclusive vip viewing and dance areas at each stage</ul>
          <ul>Air-Conditioned vip bathrooms </ul>
          <ul>Express entrance lines so you can rage even quicker! </ul>
          <ul>Premiere Shuttle Access!</ul>
          {/* <ul>Upgrade for Only 200 RavePay credits!</ul> */}
        </div>

        <div className="pt-80 pb-10 text-xl pb-4">
          <div className="pb-2 border-2 rounded bg-pink-500 flex flex-col float-left text-justify text-black">
            <h2>Cost: 200 RavePay credits</h2>
          </div>
          <div className="tp-6 float-right">
            <button
              className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 pr-2"
              onClick={() => setVipConfirmationPopup(true)}>
              Upgrade Me to VIP!
            </button>
            <VipConfirmPopup
              account={account}
              trigger={vipConfirmationPopup}
              setTrigger={setVipConfirmationPopup}></VipConfirmPopup>
            <button
              className="font-normal hover:font-bold hover:font-bold border-2 outline-1 text-justify rounded-md btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:bg-pink-500 pl-2"
              onClick={() => history(`/accounts/${account.id}`)}>
              Sounds dope but ill stick with GA
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VipUpgrade
