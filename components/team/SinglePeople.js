import Image from "next/image";
import React from "react";
import imgPe from "../../assets/images/team.png";
const SinglePeople = () => {
  return (
    <div className="card card-side glass w-2/5 my-3">
      <figure className="p-2">
        <Image src={imgPe} alt="Movie" width={200} height={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePeople;
