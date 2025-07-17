import MenuItem from "./MenuItem";

const MenuCategory = ({ menu, index, isOpen, onToggle, isNested = false }) => {
  if (!menu?.card?.card?.itemCards) return null;

  return (
    <div className={isNested ? "bg-gray-50 rounded-lg p-4" : "bg-white rounded-lg shadow-md p-6"}>
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={onToggle}>
        <h2 className="text-xl font-bold text-gray-800">
          {menu?.card?.card?.title} ({menu?.card?.card?.itemCards?.length})
        </h2>
        <button className="text-gray-400 hover:text-gray-600 transition-transform">
          <svg 
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      {isOpen && (
        <div className="space-y-6 animate-fadeIn">
          {menu?.card?.card?.itemCards.map((item, itemIndex) => (
            <MenuItem key={itemIndex} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
