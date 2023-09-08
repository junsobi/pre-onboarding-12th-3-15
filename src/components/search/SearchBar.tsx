import React, { SetStateAction, useCallback } from 'react';
import { StyledInput } from '../../styles/SearchBar';

interface SearchBarProps {
  query: string;
  setQuery: (value: SetStateAction<string>) => void;
  onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = React.memo(({ query, setQuery, onClick }) => {
  const memoizedHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery],
  );

  return (
    <>
      <StyledInput
        type="text"
        placeholder="질환명을 입력해주세요"
        value={query}
        onChange={memoizedHandleChange}
        onClick={onClick}
      />
    </>
  );
});

export default SearchBar;
