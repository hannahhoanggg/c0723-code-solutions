import './App.css';
import Carousel from './Carousel';

const images = [
  {
    src: '/images/001.png',
    alt: 'Pusheen',
  },
  {
    src: '/images/002.jpg',
    alt: 'Jigglypuff',
  },
  {
    src: '/images/003.png',
    alt: 'Harry Potter',
  },
  {
    src: '/images/004.jpg',
    alt: 'Halloween Cat',
  },
  {
    src: '/images/005.png',
    alt: 'Pikachu',
  },
];

export default function App() {
  return <Carousel images={images} />;
}
