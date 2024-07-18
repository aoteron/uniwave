// import React from "react";
import { assets } from  "myFrontendAssets";
const Sidebar = () => {
  return (
    <nav className="w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex">
      <section className="p-2 bg-[var(--secondary-background)] h-[10%] rounded-xl flex flex-col justify-around">
        <div className="pl-2 flex items-center gap-3 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home button" />
          <p className="font-bold">Home</p>
        </div>
        <div className="pl-2 flex items-center gap-3 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Home button" />
          <p className="font-bold">Search</p>
        </div>
      </section>
      <section className="bg-[var(--secondary-background)] h-[90%] rounded-xl">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.stack_icon} alt="Your Library" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-5"
              src={assets.arrow_icon}
              alt="Arrow aiming right"
            />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[var(--neutral-dark)] m-2 rounded-xl font-semibold flex flex-col items-start gap-1 pl-4">
          <h1>Create your playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button className="px-4 py-1.5 bg-[var(--neutral-light)] text-[15px] text-[var(--secondary-background)] rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[var(--neutral-dark)] m-2 rounded-xl font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcast to follow</h1>
          <p className="font-light">We will kept you update on new episodes</p>
          <button className="px-4 py-1.5 bg-[var(--neutral-light)] text-[15px] text-[var(--secondary-background)] rounded-full mt-4">
            Browse podcasts
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Sidebar;
