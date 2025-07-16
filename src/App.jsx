/**
 *  Basic Layout of the App
 *
 *  - Header
 *    - Logo
 *    - Navbar (Home / About / Cart)
 *
 *  - Body
 *    - Search bar components
 *    - Restaurant Container
 *      - Restaurant Card
 *
 *  - Footer
 *    - Copyright
 *    - Links
 */
const Header = () => {
  return (
    <>
      <div className="flex justify-between p-3 items-center border mt-1">
        <img
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
          alt=""
          srcset=""
          className="w-24 h-24 object-contain"
        />
        <ul className="flex gap-4 text-lg">
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="mt-5">
        {/* search bar */}
        <div className="w-10 flex">
          <input className="border p-2" type="text" />
          <button className="bg-blue-400 text-white px-3 py-2 rounded-md ml-1 cursor-pointer">
            Search
          </button>
        </div>
        {/* restaurant container */}
        <div className="mw-full mt-5 flex flex-wrap">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

const RestaurantCard = () => {
  return (
    <>
      <div className="w-[250px] border border-black p-[5px] bg-gray-100 m-5 cursor-pointer hover:bg-gray-200 mb-4">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/1b846766-8d71-449b-b1bc-116fc8c3a024_9862.JPG"
          alt=""
          className="rounded"
          srcset=""
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl">Meghna Foods</h3>
          <h4>Address</h4>
          <h4>4.4 star</h4>
          <h4>38 min</h4>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="container mx-auto px-3">
      <Header />
      <Body />
    </div>
  );
};

export default App;
