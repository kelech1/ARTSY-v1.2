import woman from "../assets/sunset2.png";
import Users from "../components/Users";

const Livebid = () => {
  return (
    <section className="md:px-16 px-4 my-4">
      <div></div>
      <div className="flex border border-black">
        <div className="w-full md:w-1/2 relative">
          <div>
            <img src={woman} className="w-full" />
          </div>
          <div className="absolute inset-y-40 w-full flex justify-center">
            <h3 className="text-white text-[3rem] font-semibold">
              Current bid $4500
            </h3>
          </div>
          <div className="absolute top-4 flex justify-between items-center px-8 w-full">
            <div className="w-10 h-10 bg-gray-400 flex rounded-full justify-center items-center">
              X
            </div>
            <button className="bg-blue-500 px-4 py-1 text-sm rounded-full text-white">
              Live bid
            </button>
          </div>
          <div className="absolute w-full bottom-12 left-10">
            <h3 className="text-white text-xl">Tag: Lost or Wither</h3>
          </div>
        </div>
        <div className="hidden px-4 md:block relative md:w-1/2">
          {/* users */}
          <Users />
          <div className="absolute bottom-20">
            <p className="text-gray-500 italic">Creator: Stormy Rylie</p>
          </div>
          <div className="flex justify-between absolute w-11/12 bottom-4">
            <input
              type="text"
              placeholder="place a bid..."
              className="rounded-full px-6 w-10/12 py-2 outline-none border border-black"
            />
            <div className="w-12 h-12 border-black border rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livebid;
