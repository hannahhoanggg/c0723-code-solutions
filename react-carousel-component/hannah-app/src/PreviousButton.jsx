import { FaChevronLeft } from 'react-icons/fa';

export default function PrevButton({ onPrevClick }) {
  return <FaChevronLeft className="previous-image" onClick={onPrevClick} />;
}
