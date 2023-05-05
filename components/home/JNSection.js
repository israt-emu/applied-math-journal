import Image from "next/image";

const JNSection = () => {
  return (
    <div className="px-4 py-12 mx-auto w-1/2">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-5">
          <div className="text-center sm:text-left mb-14">
            <Image className="rounded my-3" src="/jamalNazrulIslam.jpg" alt="Jamal Nazrul Islam Photo" width={200} height={400} />
          </div>
        </div>

        <div className="relative col-span-12 px-4 sm:col-span-7 mt-2">
          <div>
            <h3 className="text-3xl font-semibold">Jamal Nazrul Islam</h3>
            <h3 className="text-sm font-bold uppercase text-gray-600">Mathematical physicist and cosmologist.</h3>
            <h3 className="text-sm font-bold uppercase text-gray-600"> Former professor of University of Chittagong</h3>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quidem dolores esse ullam, maiores eos beatae ipsum rem modi? Fugiat recusandae sunt impedit animi facilis voluptas eos inventore voluptates repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae harum exercitationem quos sunt, consequuntur nemo, omnis, quidem at possimus corrupti quibusdam?
        Molestias voluptatibus modi cum vel voluptas ullam sequi.
      </div>
    </div>
  );
};

export default JNSection;
