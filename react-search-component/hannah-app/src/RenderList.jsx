export default function RenderList({ list }) {
  if (list.length === 0) {
    return <div>No items match the filter.</div>;
  }
  return (
    <ul>
      {list.map((quote, index) => (
        <li key={index}>{quote}</li>
      ))}
    </ul>
  );
}
