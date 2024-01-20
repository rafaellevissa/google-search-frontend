import React, { useState } from 'react';
import ApiService from '../services/ApiService';

const SearchForm = () => {
  const [locality, setLocality] = useState('');
  const [frequency, setFrequency] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSearch = async () => {
    try {
      const response = await ApiService.performSearch({ locality, frequency, keywords });

      console.log('Search results:', response);
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };

  return (
    <div>
      <label>
        Locality:
        <input type="text" value={locality} onChange={(e) => setLocality(e.target.value)} />
      </label>
      <br />
      <label>
        Frequency:
        <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
      </label>
      <br />
      <label>
        Keywords:
        <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
