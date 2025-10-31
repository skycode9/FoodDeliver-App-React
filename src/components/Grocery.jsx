import React from "react";

const Grocery = () => {
  const groceryCategories = [
    { name: "Fresh Fruits", icon: "🍎", items: 50 },
    { name: "Vegetables", icon: "🥬", items: 45 },
    { name: "Dairy Products", icon: "🥛", items: 30 },
    { name: "Bakery", icon: "🍞", items: 25 },
    { name: "Beverages", icon: "🥤", items: 40 },
    { name: "Snacks", icon: "🍿", items: 60 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          🛒 Grocery Store
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Fresh groceries delivered to your doorstep. This page uses lazy loading for optimal performance!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groceryCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-5xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 text-center">
                {category.items} items available
              </p>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Browse
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <div className="flex items-start">
            <div className="text-3xl mr-4">💡</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Why Shop Groceries with Us?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Fresh produce delivered daily</li>
                <li>✅ Best prices guaranteed</li>
                <li>✅ Free delivery on orders above ₹500</li>
                <li>✅ 100% quality assured products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 italic">
          📦 This component is lazy-loaded for better performance and faster initial page load
        </div>
      </div>
    </div>
  );
};

export default Grocery;
