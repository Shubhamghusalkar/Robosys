import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuRound } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Sidebar = ({
  isMobileOpen,
  isDesktopCollapsed,
  toggleMobile,
  toggleDesktop,
  closeMobile,
}) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (location.pathname.startsWith("/master")) {
      setOpen(true);
    }
  }, [location.pathname]);

  // check active path
  const isActive =
    location.pathname.startsWith("/master") ||
    location.pathname.startsWith("/sub-master");

  const itemCls = (active) =>
    `flex items-center px-5 py-3 text-gray-300 hover:bg-pink-700 hover:text-white relative group
     ${isDesktopCollapsed ? "md:justify-center" : ""}
     ${active ? "bg-pink-700 text-white font-normal" : ""}`;
  const itemMenuCls = (active) =>
    `flex items-center px-3 py-2 text-gray-300 hover:bg-pink-700 hover:text-white relative group
     ${isDesktopCollapsed ? "md:justify-center" : ""}
     ${active ? "text-pink-700 font-semibold" : ""}`;

  const labelCls = `group-hover:font-normal ${isDesktopCollapsed ? "md:hidden" : ""}`;
  const [isMasterOpen, setIsMasterOpen] = useState(false)
  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen bg-black text-white z-50
        transition-[transform,width] duration-300 ease-in-out
        w-64 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}  /* mobile drawer */
        md:translate-x-0
        ${isDesktopCollapsed ? "md:w-24" : "md:w-64"}
      `}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between bg-slate-700 h-16 px-4">
        <Link to="/dashboard" className="text-3xl font-bold">
          {/* On desktop, show R when collapsed, full when expanded */}
          <span className="hidden md:inline">
            {isDesktopCollapsed ? "R" : "ROBOSYS"}
          </span>
          {/* On mobile, always show full brand */}
          <span className="md:hidden">ROBOSYS</span>
        </Link>

        {/* Desktop collapse chevrons */}
        <button
          onClick={toggleDesktop}
          className="hidden md:flex text-white"
          aria-label="Toggle sidebar width"
        >
          {isDesktopCollapsed ? <CiSquareChevRight size={28} /> : <CiSquareChevLeft size={28} />}
        </button>

        {/* Mobile close button */}
        <button
          onClick={toggleMobile}
          className="md:hidden text-white"
          aria-label="Close mobile sidebar"
        >
          <RiCloseFill size={26} className="border border-slate-200 p-1 rounded" />
        </button>
      </div>

      {/* Nav */}
      <nav className={`py-5 ${isDesktopCollapsed ? "md:space-y-2" : ""}`}>
        <Link to="/dashboard" className={itemCls(location.pathname === "/dashboard")}>
          <span className={`mr-4 ${isDesktopCollapsed ? "md:mr-0" : ""}`}>
            <LuLayoutDashboard size={20} />
          </span>
          <span className={labelCls}>Dashboard</span>
          {isDesktopCollapsed && (
            <span className="absolute left-full pr-10 text-left rounded-r-full bg-gray-800 py-2.5 transition-all duration-300 ease-in-out hidden group-hover:flex group-hover:bg-pink-700 group-hover:font-normal whitespace-nowrap z-10">
              Dashboard
            </span>
          )}
        </Link>

        <Link to="/users" className={itemCls(location.pathname === "/users")}>
          <span className={`mr-4 ${isDesktopCollapsed ? "md:mr-0" : ""}`}>
            <HiOutlineUser size={20} />
          </span>
          <span className={labelCls}>Users</span>
          {isDesktopCollapsed && (
            <span className="absolute left-full pr-10 text-left rounded-r-full bg-gray-800 py-2.5 transition-all duration-300 ease-in-out hidden group-hover:flex group-hover:bg-pink-700 group-hover:font-normal whitespace-nowrap z-10">
              Users
            </span>
          )}
        </Link>

        <Link to="/kit-list" className={itemCls(location.pathname === "/kit-list" || location.pathname === "/add-kits" || location.pathname === "/kits-view")}>
          <span className={`mr-4 ${isDesktopCollapsed ? "md:mr-0" : ""}`}>
            <AiFillProduct size={20} />
          </span>
          <span className={labelCls}>Kits</span>
          {isDesktopCollapsed && (
            <span className="absolute left-full pr-10 text-left rounded-r-full bg-gray-800 py-2.5 transition-all duration-300 ease-in-out hidden group-hover:flex group-hover:bg-pink-700 group-hover:font-normal whitespace-nowrap z-10">
              Kits
            </span>
          )}
        </Link>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className={`${itemCls(location.pathname.startsWith("/master"))} w-full flex items-center`}
          >
            <span className={`mr-4 ${isDesktopCollapsed ? "md:mr-0" : ""}`}>
              <CgMenuRound size={20} />
            </span>
            {!isDesktopCollapsed && <span className={labelCls}>Master</span>}
            <span className="ml-auto">
              {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </span>
          </button>

          {isDesktopCollapsed && (
            <span className="absolute left-full top-1/2 -translate-y-1/2 pr-10 rounded-r-full bg-gray-800 py-2.5 font-normal text-white hidden group-hover:flex group-hover:bg-pink-700 whitespace-nowrap z-10">
              Master
            </span>
          )}

          {open && !isDesktopCollapsed && (
            <div className="ml-6 mt-1 flex flex-col gap-1">
              <Link
                to="/master/components"
                className={itemMenuCls(location.pathname === "/master/components")}
              >
                <RiCheckboxBlankCircleFill className="mr-2" size={10} />
                Components
              </Link>
              <Link
                to="/master/kits"
                className={itemMenuCls(location.pathname === "/master/kits")}
              >
                <RiCheckboxBlankCircleFill className="mr-2" size={10} />
                Master Kit
              </Link>
              <Link
                to="/master/master-projects"
                className={itemMenuCls(location.pathname === "/master/master-projects")}
              >
                <RiCheckboxBlankCircleFill className="mr-2" size={10} />
                Master Project
              </Link>
            </div>
          )}
        </div>

        <Link to="/forms" className={itemCls(location.pathname === "/forms")}>
          <span className={`mr-4 ${isDesktopCollapsed ? "md:mr-0" : ""}`}>
            <AiFillProduct size={20} />
          </span>
          <span className={labelCls}>Forms</span>
          {isDesktopCollapsed && (
            <span className="absolute left-full pr-10 text-left rounded-r-full bg-gray-800 py-2.5 transition-all duration-300 ease-in-out hidden group-hover:flex group-hover:bg-pink-700 group-hover:font-normal whitespace-nowrap z-10">
              Forms
            </span>
          )}
        </Link>

        <Link to="#" className={itemCls(location.pathname === "#")}>
          <span className={`mr-4 ${isDesktopCollapsed ? "md:mr-0" : ""}`}>
            <IoSettingsOutline size={20} />
          </span>
          <span className={labelCls}>Settings</span>
          {isDesktopCollapsed && (
            <span className="absolute left-full pr-10 text-left rounded-r-full bg-gray-800 py-2.5 transition-all duration-300 ease-in-out hidden group-hover:flex group-hover:bg-pink-700 group-hover:font-normal whitespace-nowrap z-10">
              Settings
            </span>
          )}
        </Link>

        <Link to="/login" className={itemCls(location.pathname === "/login")}>
          <span className={`mr-4 ${isDesktopCollapsed ? "md:mr-0" : ""}`}>
            <IoLogOutOutline size={20} />
          </span>
          <span className={labelCls}>Logout</span>
          {isDesktopCollapsed && (
            <span className="absolute left-full pr-10 text-left rounded-r-full bg-gray-800 py-2.5 transition-all duration-300 ease-in-out hidden group-hover:flex group-hover:bg-pink-700 group-hover:font-normal whitespace-nowrap z-10">
              Logout
            </span>
          )}
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
