import { Outlet } from "react-router-dom";
import NavbarTop from "../Pages/Shared/NavbarTop/NavbarTop";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      {/* NavbarTop */}
      <div className="fixed top-0 left-0 w-full z-10">
        <NavbarTop />
      </div>

      <div className="flex">
        {/* Sidebar - only show on larger screens */}
        <div className="hidden lg:flex fixed top-[100px] left-0 w-[12%] h-[calc(100vh-60px)] z-10">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex-grow lg:ml-[12%] mt-[60px] bg-[#f8f9fa] min-h-screen p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
