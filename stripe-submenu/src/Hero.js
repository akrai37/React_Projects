import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h2>Payment infrastructre for the internet</h2>
          <p>
            Millions of companies of all sizes-from startups to
            Fortune 500s-use
            Stripe's softwares and APIs to accept payments,send payouts
            and manage their businesses online
          </p>
          <button className='btn'>
             Start Now
          </button>
        </article>
        <article className='hero-images'>
           <img src={phoneImg} className='phone-img' alt='phone'/>
        </article>
      </div>
    </section>
  )
}

export default Hero
