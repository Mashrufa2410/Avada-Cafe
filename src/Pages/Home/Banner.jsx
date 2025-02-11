import React from "react";
import img from "../../assets/Home.webp";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img className="absolute inset-0 w-full h-full object-cover" src={img} alt="Cafe Avada" />

     
    </div>
  );
};

export default Banner;
