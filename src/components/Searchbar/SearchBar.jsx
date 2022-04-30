import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchBars,
} from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      alert('Введіть запит!');
      return;
    }
    onSubmit(search);
  };

  return (
    <div>
      <SearchBars>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <HiOutlineSearch style={{ width: '25px', height: '25px' }} />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            value={search}
            onChange={handleChange}
          />
        </SearchForm>
      </SearchBars>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
