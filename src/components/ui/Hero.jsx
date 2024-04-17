import HeroImage from "@/static/images/hero/hero-img.jpg";
import Image from "next/image";
import BookAMeeting from "./forms/BookAMeeting";

const Hero = () => {
  return (
    <div className="relative overflow-hidden px-4 md:px-12 py-6 md:py-12">
      <Image
        src={HeroImage}
        className="absolute aspect-1 top-0 left-0 -z-10 w-full h-full object-cover"
        alt="a sexy lady looking through your eyes seductively while sitting in a workplace nsfw"
      />
      <div className="flex flex-wrap flex-col md:flex-row md:items-center justify-between space-y-12 md:space-y-0">
        <div className="w-full md:w-1/2 space-y-4 text-white">
          <h1 className="text-xl md:text-2xl font-bold leading-none">Lorem Ipsum Dolor Sit Amet Igni</h1>
          <p className="text-lg">What be thy thickness?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus repudiandae temporibus sequi earum neque
            officiis dignissimos ad non rerum nisi illum fugit, unde suscipit quis illo facere ducimus iusto.
          </p>
          <button className="inline-block px-5 py-1.5 bg-white text-primary rounded-lg text-lg">Click Me Broer</button>
        </div>
        <div className="md:w-1/3 relative">
          <BookAMeeting />
        </div>
      </div>
    </div>
  );
};
export default Hero;
