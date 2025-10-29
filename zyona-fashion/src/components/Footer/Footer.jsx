import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets/frontend_assets/assets";
function Footer() {
  return (
    <>
      <footer className="w-full flex items-start justify-between flex-wrap p-4">
        <Link to="/">
          <h3 className="text-2xl font-bold text-shadow-black">COMPANY</h3>
          <div className="flex items-center">
            <img src={assets.webLogo2} className="w-20" alt="Company Logo" />
            <h1 className="text-lg sm:text-2xl font-bold text-black uppercase font-serif tracking-widest">
              Zyona
            </h1>
          </div>
        </Link>

        <ul className="flex flex-col gap-5 items-center text-2xl font-bold text-shadow-black">
          {" "}
          LINKS
          <NavLink to="/">
            <p className="text-xs sm:text-sm  text-gray-700 uppercase font-semibold">
              Home
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/collections">
            <p className="text-xs sm:text-sm  text-gray-700 uppercase font-semibold">
              Collections
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/about">
            <p className="text-xs sm:text-sm  text-gray-700 uppercase font-semibold">
              About
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/contact">
            <p className="text-xs sm:text-sm text-gray-700 uppercase font-semibold">
              Contact
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
        </ul>

        <div className="">
          <h3 className="text-lg sm:text-2xl font-bold text-black uppercase font-serif tracking-widest">
            GET IN TOUCH
          </h3>
          <p>+1-000-000-0000 </p>
          <p>dev@gmail.com</p>
          <p>Instagram</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
