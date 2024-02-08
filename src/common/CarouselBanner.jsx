import { Carousel, Button } from "@material-tailwind/react";
import React from "react";

// const logo = require("../assets/images/logo.jpg");
const CarouselBanner = () => {
  return (
    <div className="mx-0 md:mx-48 h-80 overflow-hidden">
      <Carousel className="rounded-2xl">
      <div className="relative h-full w-full gird grid-cols-2 bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="absolute inset-0 w-[50%]">
      <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          // src={logo}
          alt="banner"
          className="object-cover h-full w-full"
        />
        </div>
        <div className="absolute inset-0 place-items-center left-[60%] top-[20%]">
          <p className="font-serif text-black text-md mr-[30px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
          <Button className="bg-black text-white p-2 rounded-md">Shop Now</Button>
        </div>
      </div>
      <div className="relative h-full w-full">
      <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="banner"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
      <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="banner"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselBanner;
