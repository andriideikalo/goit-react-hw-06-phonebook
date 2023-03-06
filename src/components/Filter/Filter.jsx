// import { PropTypes } from 'prop-types';
import React from 'react';
// import { nanoid } from 'nanoid';
import { InputFilterStyled } from './FilterStyled';
import { FilterLabelStyled } from './FilterStyled';
import { setFilter } from '../../redux/filterSplice';
import { filterSelector } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  const inputHandleChacge = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <>
      <FilterLabelStyled>Find contacts by name</FilterLabelStyled>
      <FilterLabelStyled htmlFor={filter}>
        <InputFilterStyled
          type="text"
          value={filter}
          onChange={inputHandleChacge}
          name="filter"
        />
      </FilterLabelStyled>
    </>
  );
};

export default Filter;
