const MenuSearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for dishes"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <svg 
          className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
    </div>
  );
};

export default MenuSearchBar;
