import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => { //this 'useEffect' re-renders the page eveytime index changs. So, if the index is 'out of bound', it will deal with it.
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <span></span>Review    
      </div>
      <div className='section-center'>
        {people.map((person,personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextslide';
          if (personIndex === index) { //'opacity' (CSS component) of only 'activeSlide' class is 1, thats why only 1component is shown on the screen.etc.
            position = 'activeSlide';  //Remember, ALL the components(people) are present on the screen(as we used maps) but only one is visible with 'activeSlide' class which can be toggled.
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) { //2nd part is complicated
            position = 'lastslide';
          }
          return (              
            <article className={ position} key={id}>
              <img src={image} alt="not available" className='person-img'/>
              <h4>{name}</h4>  
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'></FaQuoteRight>
             </article>
          ) 
        })}
         <button>
            <FiChevronLeft className='prev' onClick={()=>setIndex(index-1)}></FiChevronLeft >
        </button>
         <button>
            <FiChevronRight className='next' onClick={()=>setIndex(index+1) }></FiChevronRight>
         </button>
      </div>
    </section>
  )
}                            

export default App;
