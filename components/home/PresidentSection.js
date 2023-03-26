import Image from "next/image";

const PresidentSection = () => {
  return (
    <div className="">
        <hr className="bg-dark"/>
      <section className="bg-gray-100 text-gray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14">
                <Image
                  className="rounded my-3"
                  src="/president.jpeg"
                  alt="President Photo"
                  width={200}
                  height={400}
                />
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
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div>
                  <h3 className="text-3xl font-semibold">Dr Hanif Murad</h3>
                  <p className="text-sm font-bold tracking-wider uppercase text-gray-600">Professor</p>
                  <p className="text-sm font-bold tracking-wider uppercase text-gray-600"F>President AMath Journal society</p>
                  <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                    Noakhali Science and Technology University, 2345 Southern
                    Road State Highway, Southbound 5712,Australia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresidentSection;
