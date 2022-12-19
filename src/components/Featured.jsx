import img1 from "../assets/Rectangle1.jpg";
import img2 from "../assets/egyptian.png";
import img3 from "../assets/ramses.png";
import user1 from "../assets/user11.jpg";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";


import { Icon } from '@iconify/react';

const Featured = () => {
  return (
    <section className="md:px-14 px-2 mt-14 relative z-[100]">
      <h2 className="text-xl px-4 md:text-2xl font-medium py-2 md:py-4 font-satoshi text-[#333333]">Featured products</h2>
      {/* first section */}
      <div
        className="flex flex-col border-transparent 
        md:border-t md:border-black md:flex-row 
             justify-center md:py-10 pt-1 pb-4 px-4 relative"
      >
        <div className="group w-full md:w-[610px] relative">
          <img className=" md:pr-4" src={img1} />

          <div class="hidden absolute top-0 left-0 md:flex h-0 w-[595px] items-center justify-center  bg-black opacity-0  group-hover:h-full group-hover:opacity-50 group-hover:ease-out group-hover:transition-opacity group-hover:delay-200 group-hover:duration-300">
            <h1 class="text-2xl text-white p-5">View product</h1>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <Icon className=" w-16 h-16 text-[#ffffff]" icon="ph:arrow-circle-right-thin" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-8 px-0 flex flex-col md:justify-between">
          <div className='absolute top-[10%] md:static flex justify-center md:justify-start w-11/12 '>
            <h3 className=" md:text-[#333333] text-white font-bold text-2xl font-stix">
              The Boolean Egyptian
            </h3>
          </div>
          <p className="text-left max-w-sm font-satoshi font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur dolore reiciendis quibusdam architecto voluptates sed
            obcaecati veritatis ipsam quo incidunt
          </p>
          <div className="flex md:border-none border-b border-black pb-4 space-x-4 mt-4 items-center">
            <div className="flex w-[2rem] mr-[3rem]">
              <img src={user1} />
              <img className="-ml-4" src={user2} />
              <img className="-ml-4" src={user3} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user5} />
            </div>
            <div className='px-2 w-[10rem] font-satoshi font-medium'><h4 className=''>64 major creators</h4></div>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <Icon className=" w-16 h-16 text-[#ffffff] md:text-[#333333]" icon="ph:arrow-circle-right-thin" />
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div
        className="flex flex-col border-transparent 
        md:border-t md:border-black md:flex-row-reverse 
             justify-center md:py-10 pt-1 pb-4 px-4 my-8 md:my-0 relative"
      >
        <div className="group w-full md:w-[610px] relative">
          <img className=" md:pr-4" src={img2} />

          <div class="hidden absolute top-0 left-0 md:flex h-0 w-[595px] items-center justify-center  bg-black opacity-0  group-hover:h-full group-hover:opacity-50 group-hover:ease-out group-hover:transition-opacity group-hover:delay-200 group-hover:duration-300">
            <h1 class="text-2xl text-white p-5">View product</h1>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <Icon className=" w-16 h-16 text-[#ffffff]" icon="ph:arrow-circle-right-thin" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-8 px-0 flex flex-col md:justify-between">
         <div className='absolute top-[10%] md:static flex justify-center md:justify-start w-11/12 '>
            <h3 className=" md:text-[#333333] text-white font-bold text-2xl font-stix">
              The Boolean Egyptian
            </h3>
          </div>
          <p className="text-left max-w-sm font-satoshi font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur dolore reiciendis quibusdam architecto voluptates sed
            obcaecati veritatis ipsam quo incidunt
          </p>
          <div className="flex space-x-4 md:border-none border-b border-black pb-4 mt-4 items-center">
            <div className="flex w-[2rem] mr-[3rem]">
              <img src={user1} />
              <img className="-ml-4" src={user2} />
              <img className="-ml-4" src={user3} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user5} />
            </div>
            <div className='px-2 w-[10rem] font-satoshi font-medium'><h4 className=''>64 major creators</h4></div>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <Icon className=" w-16 h-16 text-[#ffffff] md:text-[#333333]" icon="ph:arrow-circle-right-thin" />
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div
        className="flex flex-col border-transparent 
        md:border-t md:border-black md:flex-row 
             justify-center md:py-10 pt-1 pb-4 px-4 relative"
      >
        <div className="group w-full md:w-[610px] relative">
          <img className=" md:pr-4" src={img3} />

          <div class="hidden absolute top-0 left-0 md:flex h-0 w-[595px] items-center justify-center  bg-black opacity-0  group-hover:h-full group-hover:opacity-50 group-hover:ease-out group-hover:transition-opacity group-hover:delay-200 group-hover:duration-300">
            <h1 class="text-2xl text-white p-5">View product</h1>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
              <Icon className=" w-16 h-16 text-[#ffffff]" icon="ph:arrow-circle-right-thin" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-8 px-0 flex flex-col md:justify-between">
          <div className='absolute top-[10%] md:static flex justify-center md:justify-start w-11/12 '>
            <h3 className=" md:text-[#333333] text-white font-bold text-2xl font-stix">
              The Boolean Egyptian
            </h3>
          </div>
          <p className="text-left max-w-sm font-satoshi font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur dolore reiciendis quibusdam architecto voluptates sed
            obcaecati veritatis ipsam quo incidunt
          </p>
          <div className="flex space-x-4 mt-4 md:border-none border-b border-black pb-4 items-center">
            <div className="flex w-[2rem] mr-[3rem]">
              <img src={user1} />
              <img className="-ml-4" src={user2} />
              <img className="-ml-4" src={user3} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user5} />
            </div>
            <div className='px-2 w-[10rem] font-satoshi font-medium'><h4 className=''>64 major creators</h4></div>
            <div
              className="flex md:relative absolute top-[30%] md:left-10 
            md:-top-1 right-10 cursor-pointer"
            >
             <Icon className=" w-16 h-16 text-[#ffffff] md:text-[#333333]" icon="ph:arrow-circle-right-thin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
