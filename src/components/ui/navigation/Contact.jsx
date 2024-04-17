import Link from "@/components/core/Link";

const Contact = ({ data }) => {
  return (
    <ul className="flex flex-wrap items-center space-x-4">
      {Object.keys(data).map((key, idex) => {
        if (key === "whatsapp") {
          return data[key].map((whatsapp, idx) => {
            return (
              <li key={idx} className="hover:text-primary transition-all">
                <Link href={`https://wa.me/${whatsapp}`} target="_blank">
                  <i className="bi bi-whatsapp"></i> {whatsapp}
                </Link>
              </li>
            );
          });
        }
        return (
          <li key={idex} className="hover:text-primary transition-all">
            <Link href={`mailto:${data[key]}`}>
              <i className="bi bi-envelope"></i> {data[key]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Contact;
