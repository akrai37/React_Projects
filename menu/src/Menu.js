import React from 'react';

const Menu = ({ items}) => {
  return (
    <div>
      {
      items.map((menuitem) => {
        const { id, title, category, price, img, desc } = menuitem;
        return (
          <article key={ id} className='menu-item'>
            <img src={img} alt="not available" className='photo'/>
            <div>
              <header>
                <h4>{title}</h4>
                <h4>${price }</h4>
              </header>
              <p className='item-text'>{ desc}</p>
            </div>
          </article>
        )
      })}
   </div>
  )
};

export default Menu;
