import SearchBar from './SearchBar';
import RenderList from './RenderList';
import { useState } from 'react';
import './App.css';

export default function SearchableList({ list }) {
  const [filterText, setFilterText] = useState('');
  const filteredList = list.filter((quote) =>
    quote.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar value={filterText} onChange={setFilterText} />
      <RenderList list={filteredList} />
    </div>
  );
}
