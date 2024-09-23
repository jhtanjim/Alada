import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaStoreAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdCart } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import {
  MdAddBox,
  MdComment,
  MdMonetizationOn,
  MdPieChart,
  MdShoppingBag,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const commonStyleSubmenu = "pt-6 pl-12 list-disc space-y-2";

const navMenuLink = [
  {
    path: "/",
    title: "Dashboard",
    icon: <AiFillHome />,
  },
  {
    title: "Products",
    icon: <MdShoppingBag />,
    subMenu: true,
    subMenuItem: (
      <ul className={commonStyleSubmenu}>
        <li>
          <NavLink to="/product-chair">Product Chair</NavLink>
        </li>
        <li>
          <NavLink to="/product-table">Table</NavLink>
        </li>
        <li>
          <NavLink to="/product-sofa">Sofa</NavLink>
        </li>
        <li>
          <NavLink to="/product-categories">Product Categories</NavLink>
        </li>
      </ul>
    ),
  },
  {
    title: "Design Studios",
    icon: <FaStoreAlt />,
    subMenu: true,
    subMenuItem: (
      <ul className={commonStyleSubmenu}>
        <li>
          <NavLink to="/interior-design">Interior Design</NavLink>
        </li>
        <li>
          <NavLink to="/exterior-design">Exterior Design</NavLink>
        </li>
        <li>
          <NavLink to="/shop-look-demo1">Shop the Look - Demo 1</NavLink>
        </li>
        <li>
          <NavLink to="/innovation">Innovation</NavLink>
        </li>
      </ul>
    ),
  },
  {
    title: "Orders",
    icon: <IoMdCart />,
    subMenu: true,
    subMenuItem: (
      <ul className={commonStyleSubmenu}>
        <li>
          <NavLink to="/order-list">Order List</NavLink>
        </li>
        <li>
          <NavLink to="/product-grid">Product Grid</NavLink>
        </li>
        <li>
          <NavLink to="/product-grid2">Product Grid 2</NavLink>
        </li>
        <li>
          <NavLink to="/product-categories">Product Categories</NavLink>
        </li>
      </ul>
    ),
  },
  {
    title: "Transaction",
    icon: <MdMonetizationOn />,
    subMenu: true,
    subMenuItem: (
      <ul className={commonStyleSubmenu}>
        <li>
          <NavLink to="/order-list">Order List</NavLink>
        </li>
        <li>
          <NavLink to="/product-grid">Product Grid</NavLink>
        </li>
        <li>
          <NavLink to="/product-grid2">Product Grid 2</NavLink>
        </li>
        <li>
          <NavLink to="/product-categories">Product Categories</NavLink>
        </li>
      </ul>
    ),
  },
  {
    title: "Account",
    icon: <IoPersonSharp />,
    subMenu: true,
    subMenuItem: (
      <ul className={commonStyleSubmenu}>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/order-history">Order History</NavLink>
        </li>
        <li>
          <NavLink to="/account-settings">Account Settings</NavLink>
        </li>
      </ul>
    ),
  },
  {
    path: "/reviews",
    title: "Reviews",
    icon: <MdComment />,
  },
  {
    path: "/statistics",
    title: "Statistics",
    icon: <MdPieChart />,
  },
];

const Sidebar = () => {
  const [isDropdown, setIsDropdown] = useState(null);

  const handleDropdown = (index) => {
    setIsDropdown(isDropdown === index ? null : index);
  };

  return (
    <nav className="p-8">
      <div className="flex flex-col gap-9">
        {navMenuLink?.map((link, index) => (
          <NavLink
            onClick={() => handleDropdown(index)}
            to={link?.path}
            key={link?.path || index}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#adb5bd]">{link.icon}</span>
                <span className="text-[16px] font-semibold text-menu-link-color">
                  {link.title}
                </span>
              </div>
              {link.subMenu && (
                <IoMdArrowDropdown
                  className={`text-xl duration-300 ease-in-out transition-transform ${
                    isDropdown === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </div>
            {isDropdown === index && link.subMenu && (
              <span>{link.subMenuItem}</span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
