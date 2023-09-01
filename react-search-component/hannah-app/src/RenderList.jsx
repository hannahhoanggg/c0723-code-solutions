export default function RenderList({ list }) {
  const quotesList = list.map((quote, index) => <li key={index}>{quote}</li>);
  return <ul>{quotesList}</ul>;
}
