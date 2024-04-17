import Contractors from "@/static/images/features/contractors.jpg";
import EstablishedBusinessAdvice from "@/static/images/features/established-business-advice.jpg";
import Startups from "@/static/images/features/startups.jpg";
import Image from "next/image";

const FeatureImages = () => {
  return (
    <div className="px-4 md:px-12 py-6 md:py-12">
      <div className="flex items-center flex-col md:flex-row gap-y-12 md:gap-x-24 justify-between">
        <div className="content w-full space-y-3 md:w-1/2 order-2 md:order-1">
          <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet consecte excepturi facere nam?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa accusamus porro nam vitae veritatis perferendis facere,
            quis laudantium quam, accusantium libero sed quo voluptates, cupiditate illo temporibus numquam ducimus?
          </p>
          <ol className="list-decimal list-inside">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quisquam ab!</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate quod repellat exercitationem hic molestias illum
              expedita atque. Voluptas magni laudantium ex!
            </li>
          </ol>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, praesentium natus? Tempore, sed animi? Mollitia veritatis, et
            officia adipisci velit accusantium magnam delectus, doloremque, possimus doloribus fugiat ipsam dolor nulla ut iste deleniti
            facere esse rerum! Consectetur ex vel sed.
          </p>
          <button className="inline-block px-6 py-1.5 bg-primary text-white rounded-lg border-primary hover:bg-red-700 focus:ring-primary/25 focus:outline-none focus:ring-4 ring-offset-2 transition-all">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-row gap-x-4 items-center order-1 md:order-2">
          <div className="relative w-1/2 h-[386px] rounded-lg overflow-hidden">
            <Image src={Contractors} fill className="object-cover object-center" />
          </div>
          <div className="w-1/2 m-0">
            <div className="img-twice flex flex-col gap-y-4">
              <div className="relative w-full h-[184px] rounded-lg overflow-hidden">
                <Image src={EstablishedBusinessAdvice} fill className="object-cover" />
              </div>
              <div className="relative w-full h-[184px] rounded-lg overflow-hidden">
                <Image src={Startups} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureImages;
