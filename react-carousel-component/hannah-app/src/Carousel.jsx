import { useState, useCallback, useEffect } from 'react';
import Banner from './Banner';
import PrevButton from './PreviousButton';
import NextButton from './NextButton';
import Indicators from './Indicators';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images]);
  useEffect(() => {
    const timeoutId = setTimeout(handleNext, 3000);
    return () => clearTimeout(timeoutId);
  }, [handleNext]);

  function handlePrevClick() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function handleIndicatorClick(i) {
    setCurrentIndex(i);
  }

  return (
    <div className="carousel">
      <Banner image={images[currentIndex]} />
      <PrevButton onPrevClick={handlePrevClick} />
      <NextButton onNextClick={handleNext} />
      <Indicators
        count={images.length}
        currentIndex={currentIndex}
        onIndicatorClick={handleIndicatorClick}
      />
    </div>
  );
}
