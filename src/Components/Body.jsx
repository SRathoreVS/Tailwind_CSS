import React from "react";

const body = () => {
  return (
    <div className="space-y-4">
      <div className="lg:flex">
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end ">
          <img
            src="./assets/Blue-Shape.svg"
            alt="1st"
            className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]"
          />
          <img
            src="./assets/Pink-Shape.svg"
            alt="2st"
            className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
          />
          <img
            src="./assets/Purple-Shape.svg"
            alt="3st"
            className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
          />
          <img
            src="./assets/Hero-Model.png"
            alt="hero"
            className="absolute  h-64 md:h-72 lg:h-[400px]"
          />
        </div>
        <div className="lg:flex-1 lg:order-1">
          <h1 className="text-5xl font-bold font-playfair leading-tight">
            Host your Website in less than 5 minutes
          </h1>
          <p className="font-lato text-gray-400">
            With Hostar, get your website up and running in no less than 5
            minutes with the most competetive pricing packages available online
          </p>
          <form action="" className="flex flex-col gap-4 md:flex-row">
            <input
              className="rounded-md px-4 py-3 placeholder:text-red-400"
              type="email"
              placeholder="enter your email address"
            />
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-500 text-white">
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
      <div className="flex gap-2">
        <img src="./assets/Checkmark.svg" alt="check" />
        <p className="font-lato text-gray-400">
          No Spam Ever. Unsubscribe anytime
        </p>
      </div>
    </div>
  );
};

export default body;
