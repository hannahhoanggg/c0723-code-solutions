import { FaChevronRight } from 'react-icons/fa';

export default function NextButton({ onNextClick }) {
  return <FaChevronRight className="next-image" onClick={onNextClick} />;
}
