import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showinfo,setshowinfo]=useState(false)
  return ( 
    <article>
      <header>
        <h2>{title}</h2>
        <button classname='btn' onClick={() => setshowinfo(!showinfo)}>
          { showinfo ? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>   
       {showinfo && <p>{ info}</p>}
    </article>
  )
};

export default Question;
