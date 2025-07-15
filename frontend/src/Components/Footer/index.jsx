import { FaLinkedin, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  const links = [
    { title: "About Us" },
    { title: "Contact Info" },
    { title: "Terms & Privacy" }
  ];

  const socialMedia = [
    { icon: <FaLinkedin /> },
    { icon: <FaFacebookF /> },
    { icon: <FaInstagramSquare /> },
    { icon: <TiSocialPinterest /> }
  ];

  return (
    <div className="w-full h-auto bg-[#000] text-[var(--white)] flex items-center justify-center gap-5 flex-col px-2 py-4">
      <div className="">
        {links?.map((el) => (
          <div
            className="cursor-pointer text-sm font-semibold mb-2"
            key={el?.title}
          >
            {el?.title}
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        {socialMedia?.map((el, index) => (
          <div key={index}>{el?.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
