import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import './App.css';

export default function RotatingBanner({ items }) {
  return (
    <div className="container">
      <div className="row">
        <Banner items={items[0]} />
      </div>
      <div className="row">
        <PrevButton />
      </div>
      <div className="row">
        <Indicators />
      </div>
      <div className="row">
        <NextButton />
      </div>
    </div>
  );
}
