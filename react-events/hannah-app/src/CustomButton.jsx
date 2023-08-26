export default function CustomButton({ text, color, onCustomClick }) {
  const buttonStyle = {
    backgroundColor: color,
  };
  return (
    <button onClick={() => onCustomClick({ text })} style={buttonStyle}>
      {text}
    </button>
  );
}
