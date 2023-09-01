import SearchBar from './SearchBar';
import RenderList from './RenderList';
import { useState } from 'react';
import './App.css';

export default function SearchableList({ list }) {
  const [filterText, setFilterText] = useState('');

  function filtered() {
    const filteredList = list.filter((quote) =>
      quote.toLowerCase().includes(filterText)
    );
    return filteredList.length === 0
      ? 'No items match the filter.'
      : filteredList;
  }

  return (
    <div className="container">
      <SearchBar
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <RenderList list={filtered()} />
    </div>
  );
}
