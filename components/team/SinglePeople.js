import Image from "next/image";
import React from "react";
import imgPe from "../../assets/images/profile.jpg";
const SinglePeople = () => {
  return (
    <div className="border-0 my-3">
      <div className="divider"></div>
      <div className="flex items-center gap-5">
        <figure className="p-2">
          <Image src={imgPe} alt="Movie" width={200} height={300} />
        </figure>
        <div className="">
          <h1 className="text-dark font-semibold text-lg">Chris Bretherton</h1>
          <h1 className="text-dark font-semibold text-lg">Professor of Applied Mathematics</h1>
          <h1 className="text-dark font-semibold text-lg">Noakhali Science & Technlogy University</h1>
          <h2 className="text-secondary">email@gmail.com</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default SinglePeople;
