import React from "react";
import Banner from "../Banner";
import SinglePeople from "./SinglePeople";

const Team = () => {
  return (
    <div className="bg-gray-300">
      <Banner imageClass="banner-team" text="Our Team" />
      <div className="flex flex-col  w-10/12 mx-auto">
        <SinglePeople />
        <SinglePeople />
        <SinglePeople />
        <SinglePeople />
      </div>
    </div>
  );
};

export default Team;
