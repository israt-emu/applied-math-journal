import Image from "next/image";

const PresidentSection = () => {
  return (
    <div className="px-4 py-10 mx-auto w-1/2">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-5">
          <div className="text-center sm:text-left mb-14">
            <Image className="rounded my-3" src="/president.jpeg" alt="President Photo" width={200} height={400} />
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
        <div className="relative col-span-12 px-4 sm:col-span-7 mt-2">
          <div>
            <h3 className="text-3xl font-semibold">Dr Hanif Murad</h3>
            <p className="text-sm font-bold tracking-wider uppercase text-gray-600">Professor</p>
            <p className="text-sm font-bold tracking-wider uppercase text-gray-600">President of AMath Journal society</p>
            <span className="text-sm font-bold tracking-wider uppercase text-gray-600">Noakhali Science & Technology University</span>
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

export default PresidentSection;
