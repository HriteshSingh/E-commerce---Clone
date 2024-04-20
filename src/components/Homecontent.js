import React, { useState, useEffect } from 'react';

const Homecontent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'slide2.webp',
    'slide1.webp',
    'slide3.webp',
    'slide4.webp',
    'slide5.webp',
    'slide6.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [images.length]);

  const handlePrevious = () =>{
    setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length);
  }
  const handleNext = () =>{
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  } 
  return (
    <>
    <div className='Homecontent-container'>
      <div className="home-contain1">
        {images.map((imageName, index) => (
          <img
            key={index}
            src={require(`../images/${imageName}`)}
            alt=""
            className={`image-slider ${currentImageIndex === index ? 'active' : ''}`}
            style={{
              left: `${(index - currentImageIndex) * 100}%`
            }}
            />
            ))}

        <div className="slider-navigation">
          {images.map((_, index) => (
            <div
              key={index}
              className={`nav-btn ${currentImageIndex === index ? 'active' : ''}`}
            ></div>
          ))}
        </div>

        <img className='arrowspre' src={require('../images/arrowprevious.png')} alt="" onClick={handlePrevious}/>
        <img className='arrowsnext' src={require('../images/arrownext.png')} alt="" onClick={handleNext}/> 
      </div>
      <br />
    </div>
    </>
  );
};

export default Homecontent;
