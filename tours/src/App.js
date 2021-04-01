import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) =>  tour.id !== id  );
    setTours(newTours);
  }

  const fetchTours = async () => {
    try {                 
      setLoading(true);  
      const resonse = await fetch(url);
      const tours = await resonse.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    }
    catch (error) {
      setLoading(true)
      console.log('error');
    }
  }

  useEffect(() => {
    fetchTours();
  },[])

  if (loading) {
    return (
      <main>
          <Loading />
      </main>
   
    );
  }

  if (tours.length===0) {
    return (
      <main>
        <h2>No tours left</h2>
        <button className='btn' onClick={ ()=>fetchTours()}>refresh</button>
       </main>
     )
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={ deleteTour}/>
     </main>
  )
}

export default App
