import Socials from "./Socials";
import Contact from "./Contact";

const PreNav = ({ data }) => {
  return (
    <div className="px-4 md:px-14 bg-slate-100 py-1 hidden md:block">
      <div className="flex flex-wrap items-center text-base">
        <Contact data={data.contact} />
        <Socials data={data.socials} />
      </div>
    </div>
  );
};
export default PreNav;
