import React from "react";
import Banner from "../Banner";

const Journals = () => {
  return (
    <div className="">
      <Banner text="Journals" imageClass="banner-journal" />
      <div className="w-4/5 mx-auto flex items-center py-12 gap-5">
        <div className="divider"></div>
        <div className="py-8 px-4 text-center bg-gray-200 border-t-[6px] border-secondary shadow-lg">
          <h1 className="text-xl font-bold">
            International Journals <br /> Of
            <br /> Mathematical Physics
          </h1>
        </div>
        <div className="py-8 px-4 text-center bg-gray-200 border-t-[6px] border-secondary shadow-lg">
          <h1 className="text-xl font-bold">
            International Journals <br /> Of
            <br /> Mathematical Biology
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Journals;
