import React from 'react';

const Categories = ({ allcategories,filteritems}) => {
  return (
    <div>
      {allcategories.map((category,index) => {
        return <button type='button'
          key={index}
          className='filter-btn'
          onClick={() => { filteritems(category) }}>{ category} </button>
      })}
    </div>
  )
};

export default Categories;
