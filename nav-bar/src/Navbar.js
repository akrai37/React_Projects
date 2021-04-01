import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showlinks, setshowlinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => { //this 'useEffect' is to get the height of the links dynamically
    const linksHeight = linksRef.current.getBoundingClientRect().height; //with this, we can get the heights
    if (showlinks) {
    linksContainerRef.current.style.height=`${linksHeight}px`
  } else {
    linksContainerRef.current.style.height=`0px`
  }                           
  })
  
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="logo" />
          <button className='nav-toggle' onClick={()=>setshowlinks(!showlinks)}>
              <FaBars/>
          </button>
        </div>              
        
        {<div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {/* <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>  
            <li>
              <a href="#">products</a>
            </li> */}
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id} >
                  <a href={url}>{text }</a>
                </li>
              )
            })}
          </ul>
        </div>
        }
        <ul className='social-icons'>
          {/* <li>
            <a href="https:/www.twitter.com"></a>
            <FaTwitter/>
          </li>
            <li>
            <a href="https:/www.twitter.com"></a>
            <FaTwitter/>
          </li>
            <li>
            <a href="https:/www.twitter.com"></a>
            <FaTwitter/>
          </li> */}
          {social.map((socialicon) => {
            const { id, url, icon } = socialicon;
            return (
              <li key={id}>
                <a href={ url}>{ icon}</a>
              </li>
            )
          })}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
