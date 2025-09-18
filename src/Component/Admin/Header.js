import React, { useEffect, useState } from "react";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { RiMenuAddFill, RiCloseFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { getUserName } from "../../Config/user";

const Header = ({ isMobileOpen, toggleSidebarMobile }) => {
  const [isNotOpen, setIsNotOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [username, setUsername] = useState(null);

useEffect(() => {
        const user = localStorage.getItem("username");
        setUsername(user);
    }, []);
  return (
    <div className="flex items-center justify-between px-4 py-3">
      {/* Mobile menu button on the left */}
      <button
        className="md:hidden text-2xl p- rounded hover:bg-slate-800 transition"
        onClick={toggleSidebarMobile}
        aria-label="Toggle sidebar"
      >
        {isMobileOpen ? <RiCloseFill /> : <span className="text-3xl font-bold flex gap-3 items-center">ROBOSYS<RiMenuAddFill  className="border border-slate-200 p-1 rounded" /></span>}
      </button>

      {/* Right-side controls */}
      <div className="flex items-center gap-3 ml-auto">
        <div
          className="relative flex items-center hover:cursor-pointer"
          onClick={() => setIsNotOpen((o) => !o)}
        >
          <span className="text-xl bg-slate-950 p-2 rounded-full relative after:absolute after:h-2.5 after:w-2.5 after:bg-pink-700 after:top-0 after:right-1.5 after:rounded-full">
            <IoIosNotifications />
          </span>
          {isNotOpen && (
            <div className="absolute top-12 right-0 w-[300px] bg-black/95 rounded shadow-lg border border-slate-800 z-50">
              <div className="border-b border-slate-600 bg-slate-900 py-3 px-5">
                <span className="text-lg font-normal">Notifications</span>
              </div>
              <ul className="py-2">
                <li className="px-5 py-2 hover:bg-slate-800">Notification 1</li>
                <li className="px-5 py-2 hover:bg-slate-800">Notification 2</li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="relative flex items-center hover:cursor-pointer"
          onClick={() => setIsProfileOpen((o) => !o)}
        >
          <img src="../assets/img/default.jpg" alt="Profile" className="h-10 rounded-full" />
          <div className="hidden sm:flex items-center ps-2 font-semibold">
           {username}
            <FaAngleDown className={`ml-2 transition ${isProfileOpen ? "rotate-180" : ""}`} />
          </div>

          {isProfileOpen && (
            <div className="absolute top-12 right-0 w-[220px] bg-black/95 rounded shadow-lg border border-slate-800 z-50">
              <Link to="#" className="block px-5 py-2 hover:bg-slate-800">
                <HiMiniUserCircle className="inline mr-2" /> Profile
              </Link>
              <Link to="#" className="block px-5 py-2 hover:bg-slate-800">
                <IoIosSettings className="inline mr-2" /> Settings
              </Link>
              <Link to="/login" className="block px-5 py-2 hover:bg-slate-800">
                <IoLogOut className="inline mr-2" /> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
