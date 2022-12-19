import slide1 from "../assets/slideImg1.png";
import Ellipse from "../assets/Icons/Ellipse.svg";
import Left from "../assets/Icons/Left.svg";
import Right from "../assets/Icons/Right.svg";

import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';

const Upcoming = () => {
  return (
    <>
      <section className="w-full mt-10 px-8 py-4 bg-gradient-to-r from-[#70B9D8] to-[#C6A788] flex flex-col">
        <div className="">
          <h2 className="hidden md:block text-white text-2xl font-satoshi pb-4 underline underline-offset-[10px] decoration-1">
            See Upcoming Auctions and Exhibitions
          </h2>
          <div className="w-full relative">
            <img className="h-[20rem] md:h-max" src={slide1} />
            <div
              className="flex flex-col gap-y-4 md:px-4 px-2 w-full 
          text-white absolute md:top-[60%] top-3"
            >
              <div className="flex md:space-x-16 space-x-4 items-center">
                <div className="w-4 h-4 rounded-full bg-white" />
                <h3 className="uppercase text-sm md:text-2xl md:max-w-sm max-w-lg font-bellefair ">
                  Monalisa Redefined in<br/>Style.
                </h3>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row items-end justify-between">
                <div className="flex space-x-2 md:space-x-8">
                  <div className="text-md md:text-5xl font-bellefair">01</div>
                  <div className="md:max-w-xl max-w-full space-y-4">
                    <h4 className="uppercase font-poppins font-normal text-sm">
                      starts on: 08:00 gts. Monday
                    </h4>
                    <p className="text-sm font-satoshi font-medium">
                      GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                      INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                      HIGHEST AND LOWEST BIDS.
                    </p>
                  </div>
                </div>
                <div className="md:space-x-8 space-x-4">
                  <Link to={'/auction'}>
                    <a href="#" className="underline font-satoshi font-normal">
                      See more
                    </a>
                  </Link>
                  <Link to={'/drops'}>
                    <button className="px-6 py-2 border font-satoshi font-normal rounded-md border-white">
                      Set a reminder
                    </button>
                  </Link>
                  
                </div>
                
                <div className=" md:flex">
                  <div
                  className=" hidden md:flex md:relative absolute  cursor-pointer"
                  >
                    <img width="50rem"  src={Ellipse} />
                    <img
                      width="30rem"
                      className="absolute left-1 top-[6px] "
                      src={Right}
                    />
                  </div>
                  <div
                  className=" hidden md:flex md:relative absolute  cursor-pointer"
                  >
                    <img width="50rem"  src={Ellipse} />
                    <img
                      width="30rem"
                      className="absolute left-2 top-[6px] "
                      src={Left}
                    />
                  </div>
                  
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full my-14">
        <Link to={'/marketplace'} className="px-4 md:px-10 cursor-pointer hover:px-16 duration-500 py-6 border border-transparent border-t-black border-b-black flex justify-between">
          <h2 className="text-2xl font-satoshi font-medium ">Explore marketplace</h2>
          <Icon className=" w-24 h-12 text-[#4693ED]" icon="material-symbols:arrow-right-alt-rounded" />
        </Link>
        <Link to={'/auction'} className="px-4 md:px-10 cursor-pointer hover:px-16 duration-500 py-6 border border-transparent border-b-black flex justify-between">
          <h2 className="text-2xl font-satoshi font-medium">See auctions</h2>
          <Icon className=" w-24 h-12 text-[#4693ED]" icon="material-symbols:arrow-right-alt-rounded" />
        </Link>
      </section>
    </>
  );
};

export default Upcoming;
