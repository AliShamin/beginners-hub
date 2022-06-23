import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import courseDetails from "../assets/CourseDetails.json";

function Cards() {

  const [startOfset, setStartOfset] = useState(0);
  const [endOfset, setEndOfset] = useState(3);
  const courseLength = courseDetails.length;

  const moveCards = (direction) => {

    if (direction === "forward") {
      if (endOfset == courseLength) {
        return;
      } else if (endOfset < courseLength) {
        setStartOfset(endOfset);
      }

      if (endOfset + 3 <= courseLength) {
        setEndOfset(endOfset + 3);
      } else {
        setEndOfset(courseLength);
      }
    }
    else if (direction === "backward") {
      if (startOfset >= 3) {
        setStartOfset(startOfset - 3);
        setEndOfset(endOfset - 3);
      }
    }
  }

  const getCardItems = (startOfset, endOfset) => {
    let cardItems = [];
    for (let x = startOfset; x < endOfset; x++) {
      cardItems.push(<CardItem
        src={courseDetails[x].course_img_src}
        text={courseDetails[x].courseTitle}
        label={courseDetails[x].level}
        path={courseDetails[x].path}
        courseId={courseDetails[x].courseId}
      />)
    }
    return cardItems;
  }

  return (
    <div className='cards'>
      <h1>Check out these courses!</h1>
      <div className='cards__container'>
        <span onClick={() => { moveCards("backward") }}>
          <i className="fa fa-solid fa-backward" ></i>
        </span>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {getCardItems(startOfset, endOfset)}
          </ul>
        </div>
        <span onClick={() => { moveCards("forward") }}>
          <i className="fa fa-solid fa-forward" ></i>
        </span>
      </div>
    </div>
  );
}

export default Cards;
