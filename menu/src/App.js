import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allcategories = ['all', ...new Set(items.map((item) => item.category))] //'new Set' only allows unique values
//We are creating an array 'allcategories' with all the categories available in the data without repetition of categories. This way we are syncing our categories with the 'data' file. 
//So if we have a change in categories in our 'data' file, it won't be a problem as we dont have to pass the category manually. It will fetch whatever is available.
console.log(allcategories);

function App() {
  const [menuitems, setmenuitems] = useState(items);
  console.log(menuitems);
  const [categories, setcategories] = useState([]);

  const filteritems = (category) => {
    if (category === 'all') {
      setmenuitems(items);
      return
    }
    const newitems = items.filter((items) => items.category === category);
    setmenuitems(newitems);
  }

  return (
    <main>           
      <section className='menu-section'>   
      <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
          <Categories filteritems={filteritems} allcategories={ allcategories}/>
          <Menu items={menuitems}/>
      </div>
      </section>
    </main>
  ) 
}                          

export default App;
