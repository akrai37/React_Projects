import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';//they all are components

const Review = () => {

  const [index,setIndex] = useState(1);
  const { id, name, job, image, text } = people[index]
  
  const check = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const prevPerson = () => {
    setIndex((index) => {   
      const newindex = index + 1;
      return check(newindex);
      })  
  }
  const nextPerson = () => {
    setIndex((index) => {
      const newindex = index -1;
      return check(newindex);
      })  
  }
  const randomPerson=() => {
    const randomnumber = Math.floor(Math.random()*people.length);
    if (randomnumber === index) {
      randomnumber = index + 1;
    }
    return setIndex(check(randomnumber));
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt="not available" className='person-img'/>
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div classname='button-container'>
        <button className='prev-btn' onClick={ prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={ nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </article>
  )
};

export default Review;
