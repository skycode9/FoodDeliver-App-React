import MenuItem from "../components/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "../components/CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="m-4 p-6">
        <h1 className="text-3xl font-semibold underline text-center mb-5">
          Cart
        </h1>

        <div className="w-8/12 mx-auto">
          {cartItems.length > 0 ? (
            <div className="flex justify-end px-4">
              <button
                className="px-3 py-2 bg-red-500 text-white rounded cursor-pointer mb-10"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          ) : (
            <div className="text-center">There is no items in cart...</div>
          )}

          {/* <MenuItem MenuSubData={cartItems} showItems={true} /> */}
          <CartItems items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
