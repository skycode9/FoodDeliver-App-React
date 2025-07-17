const MenuItem = ({ item }) => {
  const itemInfo = item?.card?.info;
  const imageUrl = itemInfo?.imageId 
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo.imageId}`
    : null;

  return (
    <div className="flex justify-between items-start p-4 border-b border-gray-100 last:border-b-0">
      {/* Item Info */}
      <div className="flex-1 pr-4">
        {/* Veg/Non-veg Indicator */}
        <div className="flex items-center mb-2">
          <div className={`w-4 h-4 border-2 flex items-center justify-center ${
            itemInfo?.isVeg ? 'border-green-600' : 'border-red-600'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              itemInfo?.isVeg ? 'bg-green-600' : 'bg-red-600'
            }`}></div>
          </div>
          {itemInfo?.isBestseller && (
            <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
              ⭐ Bestseller
            </span>
          )}
        </div>

        {/* Item Name */}
        <h3 className="font-semibold text-gray-800 mb-1">
          {itemInfo?.name}
        </h3>

        {/* Price */}
        <div className="flex items-center mb-2">
          <span className="font-semibold text-gray-800">
            ₹{itemInfo?.price ? Math.floor(itemInfo.price / 100) : itemInfo?.defaultPrice ? Math.floor(itemInfo.defaultPrice / 100) : 'N/A'}
          </span>
          {itemInfo?.finalPrice && itemInfo?.finalPrice !== itemInfo?.price && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ₹{Math.floor(itemInfo.finalPrice / 100)}
            </span>
          )}
        </div>

        {/* Rating */}
        {itemInfo?.ratings?.aggregatedRating?.rating && (
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-green-600">
              {itemInfo.ratings.aggregatedRating.rating}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              ({itemInfo.ratings.aggregatedRating.ratingCountV2})
            </span>
          </div>
        )}

        {/* Description */}
        {itemInfo?.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {itemInfo.description}
          </p>
        )}
      </div>

      {/* Item Image and Add Button */}
      <div className="flex flex-col items-center">
        {imageUrl && (
          <div className="relative mb-2">
            <img
              src={imageUrl}
              alt={itemInfo?.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
        )}
        <button className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
          ADD
        </button>
        <p className="text-xs text-gray-500 mt-1">Customisable</p>
      </div>
    </div>
  );
};

export default MenuItem;
