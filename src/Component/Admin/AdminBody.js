import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { getUserPermissions, getUserToken } from "../../Config/user";

const AdminBody = ({ content }) => {
  // Mobile drawer visibility (<= md)
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  // Desktop collapse state (>= md): false = wide (w-64), true = collapsed (w-24)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebarMobile = () => setIsSidebarMobileOpen((s) => !s);
  const toggleSidebarDesktop = () => setIsSidebarCollapsed((s) => !s);
  const closeSidebarMobile = () => setIsSidebarMobileOpen(false);

  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Sidebar (handles both mobile drawer + desktop collapse) */}
      <Sidebar
        isMobileOpen={isSidebarMobileOpen}
        isDesktopCollapsed={isSidebarCollapsed}
        toggleMobile={toggleSidebarMobile}
        toggleDesktop={toggleSidebarDesktop}
        closeMobile={closeSidebarMobile}
      />

      {/* Overlay for mobile when drawer is open */}
      {isSidebarMobileOpen && (
        <button
          aria-label="Close sidebar"
          onClick={closeSidebarMobile}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Header (fixed) */}
      <div className="fixed top-0 left-0 z-30 w-full bg-slate-700">
        <Header
          isMobileOpen={isSidebarMobileOpen}
          toggleSidebarMobile={toggleSidebarMobile}
        />
      </div>

      {/* Main content; on desktop we offset for sidebar width */}
      <main
        className={`pt-16 transition-[margin] duration-300 ease-in-out ml-0
        ${isSidebarCollapsed ? "md:ml-24" : "md:ml-64"}`}
      >
        <div className="p-4">{content}</div>
        <Footer />
      </main>
    </div>
  );
};

export default AdminBody;
