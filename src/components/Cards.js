import React, { useEffect, useState } from 'react';
import '../core/styles/Cards.css';
import CardItem from './CardItem';
import courseDetails from "../assets/CourseDetails.json";

function Cards() {

  let [startOfset, setStartOfset] = useState(0);
  let [endOfset, setEndOfset] = useState(3);
  const [showCardsScroll, setShowCardsScroll] = useState(false);
  const courseLength = courseDetails.length;

  useEffect(() => {
    if (courseDetails.length > 3) {
      setShowCardsScroll(true)
    }
  },[])

  const moveCards = (direction) => {

    if (direction === "forward") {
      if (endOfset == courseLength) {
        return;
      } else if (endOfset < courseLength) {
        setEndOfset(++endOfset);
        setStartOfset(++startOfset);
      }
    }
    else if (direction === "backward") {
      if (startOfset == 0) {
        return;
      }
      setEndOfset(--endOfset);
      setStartOfset(--startOfset);
    }
  }

  const getCardItems = (startOfset, endOfset) => {
    let cardItems = [];
    console.log("startOfset",startOfset);
    console.log("endofset",endOfset);
    for (let x = startOfset; x < endOfset; x++) {
      if (x < courseDetails.length) {
        cardItems.push(<CardItem
          src={courseDetails[x].course_img_src}
          text={courseDetails[x].courseTitle}
          label={courseDetails[x].level}
          path={courseDetails[x].path}
          courseId={courseDetails[x].courseId}
        />)
      }
    }
    return cardItems;
  }

  return (
    <div className='cards'>
      <h1>Check out these courses!</h1>
      <div className='cards__container'>
        {showCardsScroll && <span onClick={() => { moveCards("backward") }}>
          <i className="fa fa-solid fa-backward" ></i>
        </span>
        }
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {getCardItems(startOfset, endOfset)}
          </ul>
        </div>
        {showCardsScroll && <span onClick={() => { moveCards("forward") }}>
          <i className="fa fa-solid fa-forward" ></i>
        </span>
        }
      </div>
    </div>
  );
}

export default Cards;
