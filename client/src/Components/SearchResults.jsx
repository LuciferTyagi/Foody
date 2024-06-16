import React from 'react'

const SearchResults = ({ results }) => {
  return (
    <div className='results-list w-full flex-col shadow-xl shadow-[#ddd] mt-[1rem] max-h-[300px] overflow-y-scroll'>
      {results.map((result, id) => (
        <div key={id} className="p-2 border-b border-gray-200 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {result.name}
        </div>
      ))}
    </div>
  )
}

export default SearchResults
