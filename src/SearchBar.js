import React from 'react'

const SearchBar = ({
  type,
  value,
  onChange
}) => {
  return (
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
  )
}

export default SearchBar