import product1 from "../assets/product1.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../features/productSlice";

const Cartpage = () => {
  const { cartItems, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  
  // const addDecimals = (num) => {
  //   return (Math.round(num * 100) / 100).toFixed(2);
  // };

  // order.itemsPrice = addDecimals(
  //   order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  // );


  return (
    <section className="mx-2 md:mx-16 my-10">
      {/* cart items */}
      {cartItems.map((item, i) => {
        return (
          <div key={i} className="flex flex-col divide-y-2 border-black">
            {/* first cart item */}
            <div className="flex w-full py-8 border-t-1 border-t justify-between">
              <div className="flex space-x-8">
                <div className="w-[10rem]">
                  <img src={item.image} className="w-full" />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p>{item.title}</p>
                  <p>Size: 200ft</p>
                  <div className="flex space-x-8 text-2xl">
                    <button onClick={() => dispatch(decrement(item.id))}>
                      -
                    </button>
                    <span>{item.unit}</span>
                    <button onClick={() => dispatch(increment(item.id))}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div onClick={()=>{
                  dispatch(removeItem(item.id))
                }} className="w-10 cursor-pointer h-10 flex justify-center items-center rounded-full border border-black">
                  X
                </div>
                <div>${item.price}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex my-10 flex-col-reverse md:flex-row justify-between">
        <div className="md:w-1/2 w-full flex flex-col items-center gap-y-5">
          <Link to={"/details"}>
            <button className="py-4 px-32 bg-blue-600 text-white">
              Proceed to checkout
            </button>
          </Link>
          <p className="text-blue-700">Continue shopping</p>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <div className="flex justify-between">
            <div>Products in cart</div>
            <div>{cartItems.length} items</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping</div>
            <div>$3.56</div>
          </div>
          <div className="flex justify-between">
            <div>Total</div>
            <div>$599</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cartpage;
