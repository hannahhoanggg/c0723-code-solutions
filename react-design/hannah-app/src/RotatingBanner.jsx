import { useState } from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import './App.css';

export default function RotatingBanner({ items }) {
  const [currentIndex /*setCurrentIndex*/] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <Banner item={items[currentIndex]} />
      </div>
      <div className="row">
        <PrevButton />
      </div>
      <div className="row">
        <Indicators count={items.length} current={currentIndex} />
      </div>
      <div className="row">
        <NextButton />
      </div>
    </div>
  );
}
