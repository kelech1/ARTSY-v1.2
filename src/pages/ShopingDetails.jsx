import product1 from "../assets/product1.png";
import {Link} from 'react-router-dom'

const ShopingDetails = () => {
  return (
    <section className="mx-2 md:mx-16 my-10">
      <div className="flex">
        {/* Customer address */}
        <form className="w-full space-y-6 md:w-1/2">
          <div className="flex flex-col gap-y-2 w-full  md:w-11/12">
            <label>Your Email</label>
            <input
              className=" py-3 px-8 outline-none rounded-md bg-gray-200"
              type="text"
              placeholder="oluwasegunadeniyi064@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>Your fullname</label>
            <input
              className=" py-3 px-8 outline-none rounded-md bg-gray-200"
              type="text"
              placeholder="Oluwasegun Adeniyi"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>Choose a wallet</label>
            <input
              className=" py-3 px-8 outline-none rounded-md bg-gray-200"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>City</label>
            <input
              className=" py-3 px-8 outline-none rounded-md bg-gray-200"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row justify-between w-full md:w-11/12">
            <div className="flex flex-col gap-y-2 ">
              <label>Country</label>
              <input
                className=" py-3 px-8 outline-none w-full rounded-md bg-gray-200"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <label>postal code</label>
              <input
                className=" py-3 px-8 outline-none w-full rounded-md bg-gray-200"
                type="text"
                placeholder="001001"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>Phone number</label>
            <input
              className=" py-3 px-8 mb-10 outline-none rounded-md bg-gray-200"
              type="text"
              placeholder="11-203-396"
            />
          </div>

          <Link to={'/payment'}>
          <button className="py-4 w-full md:w-11/12 bg-blue-600 text-white">
            Proceed to payment
          </button>
          </Link>
        </form>
        {/* cart items */}
        <div className="hidden md:flex w-1/2 flex-col divide-y-2 border-black">
          {/* first cart item */}
          <div className="flex w-full py-8 border-t-1 border-t justify-between">
            <div className="flex space-x-8">
              <div className="w-[10rem]">
                <img src={product1} className="w-full" />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-semibold">Philomena 22</h3>
                <p>Clearamane</p>
                <p>Size: 200ft</p>
                <div className="flex space-x-8 text-2xl">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
                X
              </div>
              <div>$35.5</div>
            </div>
          </div>
          {/* Second cart item */}
          <div className="flex w-full py-8  justify-between">
            <div className="flex space-x-8">
              <div className="w-[10rem]">
                <img src={product1} className="w-full" />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-semibold">Philomena 22</h3>
                <p>Clearamane</p>
                <p>Size: 200ft</p>
                <div className="flex space-x-8 text-2xl">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
                X
              </div>
              <div>$35.5</div>
            </div>
          </div>
          {/* Third item */}
          <div className="flex w-full py-8 justify-between">
            <div className="flex space-x-8">
              <div className="w-[10rem]">
                <img src={product1} className="w-full" />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-semibold">Philomena 22</h3>
                <p>Clearamane</p>
                <p>Size: 200ft</p>
                <div className="flex space-x-8 text-2xl">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
                X
              </div>
              <div>$35.5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopingDetails;
