import { useState } from "react";
import MenuCategory from "./MenuCategory";

const MenuContainer = ({ menuInfo }) => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (index) => {
    setOpenCategories(prev => ({
      ...prev,
      [index]: prev[index] === false ? true : false
    }));
  };

  return (
    <div className="space-y-8">
      {menuInfo.map((menu, index) => {
        const cardType = menu?.card?.card?.["@type"];
        const isOpen = openCategories[index] !== false; // Default open
        
        // Handle nested categories
        if (cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
          const categories = menu?.card?.card?.categories || [];
          
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {/* Main Category Header */}
              <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => toggleCategory(index)}>
                <h2 className="text-xl font-bold text-gray-800">
                  {menu?.card?.card?.title}
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

              {/* Nested Categories */}
              {isOpen && (
                <div className="space-y-6">
                  {categories.map((category, categoryIndex) => {
                    const nestedKey = `${index}-${categoryIndex}`;
                    const isNestedOpen = openCategories[nestedKey] !== false;
                    
                    return (
                      <div key={categoryIndex} className="border-l-4 border-orange-200 pl-4">
                        <MenuCategory
                          menu={{ card: { card: category } }}
                          index={nestedKey}
                          isOpen={isNestedOpen}
                          onToggle={() => toggleCategory(nestedKey)}
                          isNested={true}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }
        
        // Handle normal categories
        return (
          <MenuCategory
            key={index}
            menu={menu}
            index={index}
            isOpen={isOpen}
            onToggle={() => toggleCategory(index)}
          />
        );
      })}
    </div>
  );
};

export default MenuContainer;
