export default function CustomButton({ text, count, onClick }) {
  return <button onClick={() => onClick(count)}>{text}</button>;
}
