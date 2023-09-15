import { FaRegCircle, FaCircle } from 'react-icons/fa';

export default function Indicators({ count, currentIndex, onIndicatorClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    if (i === currentIndex) {
      buttons.push(
        <FaCircle
          key={i}
          onClick={() => onIndicatorClick(i)}
          className="progress-dot"
        />
      );
    } else {
      buttons.push(
        <FaRegCircle
          key={i}
          onClick={() => onIndicatorClick(i)}
          className="progress-dot"
        />
      );
    }
  }
  return <div className="progress-dots">{buttons}</div>;
}
