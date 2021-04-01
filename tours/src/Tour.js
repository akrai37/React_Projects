import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price ,deleteTour}) => {
  const [remove, setremove] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt="not available" />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>      
          <h4 className='tour-price'>${ price}</h4>
        </div>
        <p>
          {remove ? info : `${info.substring(0, 200)}...`} /*'remove' will display complete 'info' if it is true, else it will only display a substring of it'*/
          <button onClick={() => setremove(!remove)}>
            {remove ? 'show less' : 'show more'}
          </button>
        </p>
        <button className='delete-btn' onClick={()=>deleteTour(id)}>Not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
