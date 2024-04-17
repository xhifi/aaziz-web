import Link from "@/components/core/Link";

const Socials = ({ data }) => {
  return (
    <ul className="flex flex-wrap items-center ml-auto space-x-3 text-lg">
      {Object.keys(data).map((key, idx) => {
        return (
          <li key={idx} className="hover:text-primary transition-all">
            <Link href={data[key]}>
              <i className={`bi bi-${key}`}></i>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Socials;
