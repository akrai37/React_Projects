import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, deleteTour}) => {
  
  return (
    <section>
      <div className='title'>
        <h2>Our Tour</h2>
      </div>
      <div className='underline'></div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} deleteTour={ deleteTour}/>
          )
        })}
      </div>
     </section>
  )
};

export default Tours;
