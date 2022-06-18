import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import courseDetails from "../assets/CourseDetails.json";

function Cards() {

  const getCardItems = () => {
    let cardItems = [];
    for (let x in courseDetails) {
      cardItems.push(<CardItem
        src={courseDetails[x].course_img_src}
        text={courseDetails[x].courseTitle}
        label={courseDetails[x].level}
        path={courseDetails[x].path}
      />)
    }
    return cardItems;
  }

  return (
    <div className='cards'>
      <h1>Check out these courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {getCardItems()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
