import React, { useState } from 'react';
import birthday from '../Assets/birthday.jpg';
import harshu from '../Assets/harshu.jpg'

export const Birthdaywish = () => {
  const [imageSrc, setImageSrc] = useState(birthday);
  const birthdayWish = "Happy Birthday to the most amazing sister in the world! 🎂🎉";
   
  const handleClick = () => {
    // Change the image source when the button is clicked
    setImageSrc(imageSrc === birthday ? harshu : birthday);
  };
  return (
    <>
      <div className="card" >
        <img src={imageSrc} className="card-img-top"  />
        <div className="card-body">
          <h5 className="card-title">Happy Birthday</h5>
          <p className="card-text">{birthdayWish}</p>
          <button onClick={handleClick} className="btn btn-primary">Click Here</button>
        </div>
      </div>
    </>
  );
};
