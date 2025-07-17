const RestaurantHeader = ({ restInfo }) => {
  if (!restInfo) return null;

  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    costForTwo,
    totalRatingsString,
  } = restInfo;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-gray-600 text-lg mb-3">{cuisines?.join(", ")}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">{areaName}</span>
            <span>•</span>
            <span>{sla?.slaString}</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {avgRating}
            </div>
            <span className="text-gray-500 text-sm">
              ({totalRatingsString})
            </span>
          </div>
          <div className="text-lg font-semibold text-gray-800">
            ₹{Math.floor(costForTwo / 100)} for two
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
