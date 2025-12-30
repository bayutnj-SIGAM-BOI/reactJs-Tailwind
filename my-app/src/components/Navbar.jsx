import React, { useState } from "react";
import { useWindowScroll } from "react-use";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const handleSmoothNav = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href").replace("#", "");
  const targetElements = document.getElementById(targetId);

  if (targetElements) {
    targetElements.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);


  

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    useEffect(() => {
      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navbarRef.current.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navbarRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navbarRef.current.classList.remove("floating-nav");
      }
      setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);
  
    useEffect(() => {
      gsap.to(navbarRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.3,
      });
    }, [isNavVisible]);
  };
  

  return (
    <div
      ref={navbarRef}
      className="fixed inset-x-0 top-3 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center  gap-7">
            <NavLink
              to="/"
              onClick={handleScrollTop}
              className="uppercase text-2xl font-bold text-white md:text-3xl"
            >
              go2steam
            </NavLink>

            <button className="bg-blue-300 md:flex hidden items-center justify-center gap-1 w-[8rem] h-[2.5rem] rounded-full text-white">
              <NavLink to="/Home2">
                Zoom
              </NavLink>
            </button>
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {[
                { label: "Achievement", to: "#Achievement" },
                { label: "Documentation", to: "#Story" },
                { label: "Contact", to: "#Contact" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.to}
                  className="ml-6 text-lg text-white hover:text-blue-500 transition"
                  onClick={handleSmoothNav}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
