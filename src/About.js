import React from 'react'

function About() {
  return (
    <div className="text-align-left">
      <div className="m-auto p-8">
        <h2 className="pb-4 text-5xl font-superbold">Who we are?</h2>
        <p className="text-xl">
          Here at RavePay we're ravers and festival attendees just like you out
          to do what we can to make any festival experience as amazing as it can
          be!
        </p>
      </div>
      <div className="m-auto p-8 text-align-left">
        <h2 className="text-5xl font-superbold">How does RavePay work?</h2>
        <p className="text-xl">
          We maximize the festival experience by providing you with an account
          of RavePay credits that you can use for anything that would normally
          require taking out a credit card. It all runs through your festival
          bracelet nfc tag and you can easily reload credits as often or
          sparingly as you'd want! We hold the funds so you're payment method
          isn't ran every single time you want to make a purchase inside the
          festival grounds. Getting you back to the next stage sooner than ever!
        </p>
        <div className="m-auto pt-12 text-align-left">
          <h2 className="text-3xl font-superbold pt-8">
            All we ask for this concenience is you do what you can to keep
            spreading the Peace, Love, Unity and Respect!
            <br></br>
            Sincerely, Dean and The Team at RavePay
          </h2>
        </div>
        <div className="image-container">
          <img
            src="About-2.jpg"
            className="object-cover h-75 w-60 m-2"
            alt=""></img>
          <div className="p-8 float-left text-xl">
            <a
              className=" align-left hover:text-pink-500 hover:underline"
              href="mailto:ravepayteam@gmail.com">
              We'd love to hear from you!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
