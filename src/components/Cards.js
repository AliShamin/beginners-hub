import React, { useEffect, useState } from 'react';
import '../core/styles/Cards.css';
import { CardItem } from './CardItem';
import courseDetails from "../assets/CourseDetails.json";

export const Cards = () => {

  const [showCardsScroll, setShowCardsScroll] = useState(false);
  const courseLength = courseDetails.length;
  useEffect(() => {
    document.querySelector(".cards__items");
    if (courseDetails.length > 3) {
      setShowCardsScroll(true)
    }
  }, [])


  const moveCards = (direction) => {
    if (direction === "forward") {
      document.querySelector(".cards__items").scrollLeft += 350;
    }
    else if (direction === "backward") {
      document.querySelector(".cards__items").scrollLeft -= 350;
    }
  }

  const getCardItems = (startOfset, endOfset) => {
    const cardItems = [];
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
        {/* {showCardsScroll && <span className="sliding_control" onClick={() => { moveCards("backward") }}>
          <i className="fa fa-solid fa-backward" ></i>
        </span>
        } */}
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {getCardItems(0, courseLength)}
          </ul>
        </div>
        {/* {showCardsScroll && <span className="sliding_control" onClick={() => { moveCards("forward") }}>
          <i className="fa fa-solid fa-forward" ></i>
        </span>
        } */}
      </div>
    </div>
  );
}

