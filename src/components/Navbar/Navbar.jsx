import Logo from "../../global/Logo";
import { Link, useLocation } from "react-router";
import Button from "../../global/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const navList = [
  {
    id: "Home",
    name: "Home",
    link: "/home",
  },
  {
    id: "Service",
    name: "Service",
    link: "/service",
  },
  {
    id: "Features",
    name: "Features",
    link: "/feature",
  },
  {
    id: "Payment",
    name: "Payment",
    link: "/payment",
  },
];

function Navbar() {
  const location = useLocation();
  const [activeNavList, setActiveNavList] = useState(() => {
    return location.pathname.substring(1) || "Home";
  });
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <header className="bg-primary-2">
      <nav className="container flex items-center justify-between py-5">
        <Logo />
        <div className="space-x-2 hidden md:block">
          {navList &&
            navList.map(({ name, id, link }) => (
              <Link
                to={link}
                onClick={() => setActiveNavList(id)}
                className={`${
                  activeNavList === id
                    ? "text-white bg-primary-1/10"
                    : "text-white/80"
                } px-3 py-1 text-center body3 rounded-full hover:bg-primary-1/10 transition duration-300`}
                key={id}
              >
                {name}
              </Link>
            ))}
        </div>
        <div className="flex items-center">
          <Button
            className="bg-primary-1 hidden md:block text-white body3 rounded-full"
            text="Download The App"
          />
          {isMobileNav ? (
            <AiOutlineClose
              onClick={() => setIsMobileNav(!isMobileNav)}
              className="md:hidden cursor-pointer w-[35px] h-[35px] text-white"
            />
          ) : (
            <RiMenu2Fill
              onClick={() => setIsMobileNav(!isMobileNav)}
              className="md:hidden cursor-pointer w-[35px] h-[35px] text-white"
            />
          )}
        </div>
      </nav>
      {isMobileNav && (
        <div className="space-y-2 py-5 flex flex-col container md:hidden">
          {navList &&
            navList.map(({ name, id,link }) => (
              <Link
              to={link}
                onClick={() => setActiveNavList(id)}
                className={`${
                  activeNavList === id
                    ? "text-white bg-primary-1/10"
                    : "text-white/80"
                } px-3 py-1 text-center body3 rounded-full hover:bg-primary-1/10 transition duration-300`}
                key={id}
              >
                {name}
              </Link>
            ))}
          <Button
            className="bg-primary-1 md:hidden text-white body3 rounded-full"
            text="Download The App"
          />
        </div>
      )}
    </header>
  );
}

export default Navbar;
