export default function Indicators({ count, current }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{ backgroundColor: current === i ? 'lightblue' : undefined }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
