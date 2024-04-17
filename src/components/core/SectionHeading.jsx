import Divider from "./ui/divider";

const SectionHeading = ({ children, heading }) => {
  return (
    <div className="container-responsive">
      <h1 className="text-center text-xl font-extrabold">{heading}</h1>
      <Divider>{children}</Divider>
    </div>
  );
};
export default SectionHeading;
