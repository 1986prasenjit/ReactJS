import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets/frontend_assets/assets";
const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-8 sticky top-0 z-10">
        {/*LEFT SIDE OF THE NAV */}
        <div className="flex items-center gap-1">
          <img src={assets.webLogo2} alt="" className="w-16" />
          <h1 className="text-3xl font-extrabold text-red-700 uppercase">
            Zyona
          </h1>
        </div>

        {/*MIDDLE OF THE NAV */}
        <ul className="hidden sm:flex gap-5 items-center">
          <NavLink to="/">
            <p className="text-lg text-gray-700 uppercase font-semibold">
              Home
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/collections">
            <p className="text-lg text-gray-700 uppercase font-semibold">
              Collections
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/about">
            <p className="text-lg text-gray-700 uppercase font-semibold">
              About
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/contact">
            <p className="text-lg text-gray-700 uppercase font-semibold">
              Contact
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
        </ul>

        {/*RIGHT SIDE OF THE NAV */}
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

          <div className="group relative">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 p-t-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">Logout</p>
                <p className="cursor-pointer hover:text-black">Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute -bottom-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1 rounded">
              10
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
