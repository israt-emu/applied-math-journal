import {useRouter} from "next/router";

const Banner = ({imageClass, text}) => {
  const router = useRouter();
  const path = router?.pathname;

  return path === "/" ? (
    <div className={`${imageClass} py-14`}>
      <div>
        <h1 className="text-secondary text-5xl text-center font-bold mb-4">Jamal Nazrul Islam</h1>
        <h1 className="text-white text-4xl text-center font-semibold">
          Mathematical Physics
          <br className="hidden lg:flex" /> & <br className="hidden lg:flex" />
          Biological Sciences Society
        </h1>
      </div>
    </div>
  ) : (
    <div className={`${imageClass} ${text ? "pt-20" : "py-20"} mx-auto text-center`}>{text ? <button className="text-white text-2xl uppercase text-center font-bold bg-secondary  px-4 py-3 rounded-t-md font-serif mt-16">{text}</button> : null}</div>
  );
};

export default Banner;
