export default function Indicators({ count, current, onIndicatorClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => onIndicatorClick(i)}
        style={{ backgroundColor: current === i ? 'lightblue' : undefined }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
