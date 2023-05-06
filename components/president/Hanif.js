import React from "react";
import Banner from "../Banner";
import Image from "next/image";
import Education from "./Education";
import Award from "./Award";
import presidentImage from "../../assets/images/hanif.jpg";

const Hanif = () => {
  return (
    <div className="pb-8">
      <Banner imageClass="bg-primary" text="" />

      <div className="w-10/12 mx-auto flex container justify-center">
        <div className="w-4/12 text-center sm:text-left mb-14">
          <Image className="rounded -mt-10" src={presidentImage} alt="President Photo" width={200} height={400} />
          <div>
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p>
              <span>Phone : </span>019811111
            </p>
            <p>
              <span>Email : </span>amath@email.com
            </p>
          </div>
        </div>

        <div className=" w-9/12 px-4">
          <div>
            <h3 className="text-3xl font-semibold text-dark mt-4">Dr Muhammad Hanif Murad</h3>
            <p className="text-sm font-bold tracking-wider uppercase text-gray-600">Professor</p>
            <p className="text-sm font-bold tracking-wider uppercase text-gray-600">President of AMath Journal society</p>
            <span className="text-sm font-bold tracking-wider uppercase text-gray-600">Noakhali Science & Technology University</span>
          </div>
          <div>
            <h1 className="text-lg font-bold mt-3">Biography:</h1>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed commodi id culpa neque repudiandae ratione provident suscipit, cumque ea dolorum voluptates pariatur eius quam quod quisquam possimus minima laudantium minus?</div>
          </div>
          <Education />
          <Award />
        </div>
      </div>
    </div>
  );
};

export default Hanif;
