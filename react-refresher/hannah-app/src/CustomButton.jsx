export default function CustomButton({ text, count, onCustomClick }) {
  return <button onClick={() => onCustomClick(count)}>{text}</button>;
}
