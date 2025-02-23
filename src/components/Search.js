import { BiSearch, BiCaretDown } from 'react-icons/bi';

const Search = ({ query, onQueryChange, sortBy, onSortByChange }) => {
  return (
    <div className="relative mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <BiSearch className="h-5 w-5 text-[#6466f1]" />
          </div>
          <input
            type="text"
            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#6466f1] focus:ring-2 focus:ring-[#6466f1]/20 outline-none transition-all text-gray-700 placeholder-gray-400 bg-[#6466f1]/5"
            placeholder="Search appointments by pet name or owner..."
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </div>

        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center px-4 py-3 bg-[#6466f1] text-white rounded-xl hover:bg-[#5152c8] transition-colors"
            onClick={() => onSortByChange(sortBy === 'petName' ? 'ownerName' : 'petName')}
          >
            Sort by: {sortBy === 'petName' ? 'Pet Name' : 'Owner'}
            <BiCaretDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search; 