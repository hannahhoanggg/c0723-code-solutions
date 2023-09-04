import { useState } from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import './App.css';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handlePrevClick() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleIndicatorClick(i) {
    setCurrentIndex(i);
  }

  return (
    <div className="container">
      <div className="row">
        <Banner item={items[currentIndex]} />
      </div>
      <div className="row">
        <PrevButton onPrevClick={handlePrevClick} />
      </div>
      <div className="row">
        <Indicators
          count={items.length}
          current={currentIndex}
          onIndicatorClick={handleIndicatorClick}
        />
      </div>
      <div className="row">
        <NextButton onNextClick={handleNextClick} />
      </div>
    </div>
  );
}
