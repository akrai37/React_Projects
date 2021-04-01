import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor}) => { //they are all part of 'color'
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;
  useEffect(() => { //it will set the alert to false after 3 seconds
    const Timeout=setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(Timeout);
  }, [alert])
  
  return (
    <article className={`color`} style={{
      backgroundColor: `rgb(${bcg})`
    }} onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    }}>
    
      <p className='percentage-value'>{ weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert' >copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
